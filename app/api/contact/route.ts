import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, category, phone, subject } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production, this can forward to an internal email dispatch, database, or CRM.
    console.log("[Torkk Contact Form Submission]:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      category,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Inquiry received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
