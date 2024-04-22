import {
  Parallax1,
  ScrollReveal,
  ImageAccordionExample,
  Login1,
  Sidebar1,
  Sidebar2,
  Modal1,
} from "./components";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";

const routes = [
  {
    name: "Parallax1",
    path: "/parallax/parallax-1",
    element: <Parallax1 />,
  },
  {
    name: "ScrollReveal",
    path: "/gsap/scroll-reveal",
    element: <ScrollReveal />,
  },
  {
    name: "ImageAccordion",
    path: "/accordions/image-accordion",
    element: <ImageAccordionExample />,
  },
  {
    name: "Login1",
    path: "/logins/login1",
    element: <Login1 />,
  },
  {
    name: "Sidebar1",
    path: "/sidebars/sidebar1",
    element: <Sidebar1 />,
  },
  {
    name: "Sidebar2",
    path: "/sidebars/sidebar2",
    element: <Sidebar2 />,
  },
  {
    name: "Modal1",
    path: "/modals/Modal1",
    element: <Modal1 />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  ...routes,
]);

function Layout() {
  return (
    <main className="app">
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
