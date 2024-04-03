import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h4>Event Details page</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptatum, culpa quam, tempore numquam exercitationem laborum
        repellendus quisquam, perferendis distinctio saepe sit corrupti
        dignissimos dolorem quas quos autem! Harum, placeat.
      </p>
      <p>{params.singleID}</p>
    </>
  );
};

export default EventDetailPage;
