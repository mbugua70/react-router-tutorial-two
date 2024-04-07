import { redirect } from "react-router-dom";

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const loaderToken = () => {
  return getToken();
};

export const checkAuthLoader = () => {
  const token = getToken();

  if (!token) {
    return redirect("/");
  }

  return null;
};
