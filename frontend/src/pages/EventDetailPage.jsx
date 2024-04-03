import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

// loader function

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
  const data = useLoaderData();
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;
