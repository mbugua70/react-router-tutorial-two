import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

// loader function

export const action = async ({ request, params }) => {
  const paramsID = params.singleID;
  const response = await fetch(`http://localhost:8080/events/${paramsID}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }

  return redirect("/events");
};

export const loader = async ({ params }) => {
  const paramsID = params.singleID;
  const response = await fetch(`http://localhost:8080/events/${paramsID}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch the data" }, { status: 500 });
  } else {
    return response;
  }
};

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-details");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;
