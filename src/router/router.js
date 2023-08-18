import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import ProductsList from "../ProductsList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/products",
    element: <ProductsList />
  },
]);
export default router;