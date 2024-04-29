import EventForm from "@/app/(components)/EventForm";
import React from "react";
import PreviewEvent from "./[id]/page";
;


const getEventById = async (id: any) => {
    try {
        const res = await fetch(`http://localhost:3000/api/Events/${id}`, {
            cache: "no-cache",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch event");
        }

        return res.json();
    } catch (err) {
        console.error("Error fetching event:", err);
    }

}

const CreateEvent = async ({ params }: any) => {

    const EDITMODE = params.id === "new" ? false : true;
    let updatedEventData = {};

    if (EDITMODE) {
        const fetchedEvent = await getEventById(params.id);
        updatedEventData = fetchedEvent.event;
        console.log("uhello", updatedEventData);
    } else {
        updatedEventData = {
            _id: "new"
        }
    }



    return <EventForm event={updatedEventData} />;
};

export default CreateEvent;