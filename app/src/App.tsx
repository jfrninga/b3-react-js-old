// App.tsx
import { RouterProvider, createBrowserRouter, json } from "react-router-dom";
import { Login } from "./screens/Login";
import { Feed } from "./screens/Feed";
import { Register } from "./screens/Register";
import { ErrorPage } from "./components/ErrorPage";
import { AppLayout } from "./components/AppLayout";
import { UserProfile } from "./screens/UserProfile";

// Define the routing and how react router should behave
// the current URL of the browser
// 
// the router will choose the route from the root of the
// the best match for the current URL 
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,

    // If we're logged and trying to access any page
    // wrap yhem with the AppLayout component
    children: [
      {
        path: "/",
        // il est appelé une fois et il fait une requête en parllèle de notre page
        async loader() {
          const response = await fetch("/api/posts")
          if (response.status === 401) {
            throw new Response(
              "Unauthorized", { status: 401 }
            );
          }
          return await response.json()
        },
        element: <Feed />
      },
      {
        path: "/profile",
        element: <UserProfile />
      },
    ]
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
