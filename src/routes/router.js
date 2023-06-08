import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";
import Homepage from "../pages/Homepage";
import UserInput from "../UserInput";
import ErrorPage from "../ErrorPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="/drill-maker" element={<UserInput />} />
    </Route>
  )
);
