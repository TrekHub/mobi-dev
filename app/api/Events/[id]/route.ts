import { NextRequest, NextResponse } from "next/server";
import Event from "@/app/(models)/Event";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const event = await Event.findOne({ _id: id });
    return NextResponse.json({ event }, { status: 200 });
  } catch (err) {
    console.error("Error fetching event:", err);
    return NextResponse.json(
      { message: "An error occurred while fetching the event", err },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" }, { status: 200 });
  } catch (err) {
    console.error("Error deleting event:", err);
    return NextResponse.json(
      { message: "An error occurred while deleting the event", err },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const resBody = await req.json();
    const eventData = resBody.formData;

    const updatedEvent = await Event.findByIdAndUpdate(id, {
      ...eventData,
    });

    return NextResponse.json({ message: "Event Updated" }, { status: 200 });
  } catch (err) {
    console.error("Error deleting event:", err);
    return NextResponse.json(
      { message: "An error occurred while deleting the event", err },
      { status: 500 }
    );
  }
}
