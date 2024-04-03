// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// const EventPage = () => {
//   const events = [
//     { id: uuidv4(), title: "soap" },
//     { id: uuidv4(), title: "frontEnd" },
//     { id: uuidv4(), title: "BackEnd" },
//     { id: uuidv4(), title: "fullstack" },
//     { id: uuidv4(), title: "data scientist" },
//   ];
//   return (
//     <>
//       <h4>Event Details Page</h4>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veniam
//         accusantium officiis laudantium aliquam pariatur error fugit corrupti
//         inventore tempora. Minima porro nemo et distinctio sunt, doloribus
//         quidem ad eaque!
//       </p>

//       <main>
//         <ul>
//           {events.map((eventItems) => (
//             <li key={eventItems.id}>
//               <Link to={eventItems.id}>{eventItems.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// };

// export default EventPage;

// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";


// loader function

export const loader = async () => {
  //  the user of loader
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch the data" }),
    //   { status: 500 }
    // );
    //  using json utility function instead
  } else {
    // const resData = await response.json();
    return response;
  }
};

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");
  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchEvents();
  //   the use of loader
  // }, []);

  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
