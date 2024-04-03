import { useRouteError } from "react-router-dom";
import PageContent from "../components/pagecontent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    // because of the use of json from react-router-dom we won't have to use JSON.parse
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find the page or the resources";
  }
  console.error();
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
        <p>{error.status}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
