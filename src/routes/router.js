//REACT ROUTER
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
//LAYOUT
import Layout from "../Layout";

//PAGES
import Homepage from "../pages/Homepage";
import DrillMaker from "../pages/DrillMaker";
import ErrorPage from "../ErrorPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/aita" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="drill-maker" element={<DrillMaker />} />
    </Route>
    </>
  )
);
