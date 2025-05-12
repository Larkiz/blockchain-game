import { Navigate } from "react-router";

export const CheckAuth = ({ children }) => {
  let key = sessionStorage.getItem("key");
  if (!key) {
    return <Navigate to={"signIn"} />;
  }
  return children;
};
