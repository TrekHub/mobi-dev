import Event from "../../models/Event";
import { NextResponse, NextRequest } from "next/server";

interface ErrorResponse {
  message: string;
  error: any; // Any type for simplicity, you can adjust based on your error handling needs
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const eventData = body.formData;
    await Event.create(eventData);
    return NextResponse.json({ message: "Event Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    const response: ErrorResponse = {
      message: "An error occurred while creating the event",
      error: error,
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const events = await Event.find();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    const response: ErrorResponse = {
      message: "An error occurred while fetching events",
      error: error,
    };
    return NextResponse.json(response, { status: 500 });
  }
}
