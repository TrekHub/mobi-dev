import EventForm from "@/app/(components)/EventForm";
import React from "react";


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
        updatedEventData = await getEventById(params.id);
        console.log(updatedEventData);
    }
    return <EventForm />;
};

export default CreateEvent;
