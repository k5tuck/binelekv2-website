import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

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

    // Initialize Loops client
    const loops = new LoopsClient(apiKey);

    // Create contact in Loops
    const resp = await loops.createContact({
      email,
      properties: {
        source,
      },
      mailingLists: {
        // Add your mailing list ID here from Loops dashboard
        // Example: "cm06f5v0e45nf0ml5754o9cix": true
      },
    });

    if (resp.success) {
      return NextResponse.json({
        success: true,
        message: "Successfully subscribed!",
      });
    } else {
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Subscribe error:", error);

    // Handle duplicate email error
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("already") || errorMessage.includes("exists")) {
      return NextResponse.json({
        success: true,
        message: "You're already on the list!",
        alreadySubscribed: true,
      });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
