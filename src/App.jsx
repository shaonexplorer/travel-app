import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

import BlogsPage from "./pages/BlogsPage";
import PlacesPage from "./pages/PlacesPage";
import BlogsDetail from "./pages/BlogsDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "places", element: <PlacesPage /> },
        { path: "blogs", element: <BlogsPage /> },
        { path: "blogs/:id", element: <BlogsDetail /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
