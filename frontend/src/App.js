// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventPage, { loader as eventPageLoader } from "./pages/Eventpage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Layout from "./layout/layout";
import EventLayout from "./layout/eventlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventPageLoader,
            // loader: async () => {
            //   //  the user of loader
            //   const response = await fetch("http://localhost:8080/events");

            //   if (!response.ok) {
            //   } else {
            //     const resData = await response.json();
            //     return resData.events;
            //   }
            // },
          },
          { path: ":singleID", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":singleID/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;