import Event from "../../(models)/Event";
import { NextResponse , NextRequest} from "next/server";

export async function POST(req: NextRequest) {
  console.log("hellp");
  try {
    const body = await req.json();
    const eventData = body.formData;
    await Event.create(eventData);
    return NextResponse.json({ message: "Event Created" }, { status: 201 });
  } catch (err) {
    console.error("Error creating event:", err);
    return NextResponse.json(
      { message: "An error occurred while creating the event", err },
      { status: 500 }
    );
  }
}
