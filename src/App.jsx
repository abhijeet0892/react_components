import {
  Parallax1,
  ScrollReveal,
  ImageAccordionExample,
  Login1,
  Sidebar1,
  Sidebar2,
  Modal1,
  DeleteButton,
  TrashButton,
  Card1,
  PasswordStrength,
  Widget,
  Widget_1,
  Widget_2,
  Dropdown1Example,
} from "./components";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import "./App.css";

const routes = [
  {
    name: "Parallax-1",
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
    name: "Login-1",
    path: "/logins/login1",
    element: <Login1 />,
  },
  {
    name: "Sidebar-1",
    path: "/sidebars/sidebar1",
    element: <Sidebar1 />,
  },
  {
    name: "Sidebar-2",
    path: "/sidebars/sidebar2",
    element: <Sidebar2 />,
  },
  {
    name: "Modal-1",
    path: "/modals/Modal1",
    element: <Modal1 />,
  },
  {
    name: "DeleteButton",
    path: "/buttons/delete-button",
    element: <DeleteButton />,
  },
  {
    name: "TrashButton",
    path: "/buttons/trash-button",
    element: <TrashButton />,
  },
  {
    name: "Card-1",
    path: "/cards/Card1",
    element: <Card1 />,
  },
  {
    name: "PasswordStrength",
    path: "/controls/password-strength",
    element: <PasswordStrength />,
  },
  {
    name: "Pagination",
    path: "/widgets/pagination",
    element: <Widget />,
  },
  {
    name: "Widget-1",
    path: "/widgets/widget-1",
    element: <Widget_1 />,
  },
  {
    name: "Widget-2",
    path: "/widgets/widget-2",
    element: <Widget_2 />,
  },
  {
    name: "Dropdown1Example",
    path: "/dropdown1/dropdown1example",
    element: <Dropdown1Example />,
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
