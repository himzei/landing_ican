import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";
import Root from "./routes/Root";
import Signup from "./routes/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
