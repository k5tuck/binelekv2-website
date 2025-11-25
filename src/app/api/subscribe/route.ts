import { NextRequest, NextResponse } from "next/server";

// Loops API endpoint for creating contacts
const LOOPS_API_URL = "https://app.loops.so/api/v1/contacts/create";

export async function POST(request: NextRequest) {
  try {
    const { email, source = "website" } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
      console.error("LOOPS_API_KEY is not configured");
      // In development, just log and return success
      if (process.env.NODE_ENV === "development") {
        console.log(`[DEV] Would subscribe: ${email} from ${source}`);
        return NextResponse.json({ success: true, message: "Subscribed (dev mode)" });
      }
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send to Loops
    const response = await fetch(LOOPS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        source,
        subscribed: true,
        userGroup: "waitlist",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle duplicate email (already subscribed)
      if (data.message?.includes("already exists") || response.status === 409) {
        return NextResponse.json({
          success: true,
          message: "You're already on the list!",
          alreadySubscribed: true,
        });
      }

      console.error("Loops API error:", data);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
