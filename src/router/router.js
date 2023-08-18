import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import ProductsList from "../ProductsList";
import Test from "../Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/products",
    element: <ProductsList />
  },
]);
export default router;