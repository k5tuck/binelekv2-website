import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    comingSoonMode: process.env.COMING_SOON_MODE,
    isEnabled: process.env.COMING_SOON_MODE === "true",
    allEnvKeys: Object.keys(process.env).filter(k => k.includes("COMING") || k.includes("SOON")),
  });
}
