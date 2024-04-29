import { NextRequest, NextResponse } from "next/server";
import Event from "@/app/(models)/Event";

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
