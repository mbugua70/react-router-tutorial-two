import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

//   the use of useNavigation hook from react router dom
//   it can be use to look at transition state if the data fetch has begun and if data has been fetched.
const Layout = () => {
  // const navigates = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigates.state === "loading" && <p>loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
