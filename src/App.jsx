import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// import Home from './components/Home/Home'
// import Experience from './components/Experience/Experience'
// import Project from './components/Projects/Project'
// import Skill from './components/Skills/Skills'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import React, { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Experience = React.lazy(() =>
  import("./components/Experience/Experience")
);
const Project = React.lazy(() => import("./components/Projects/Project"));
const Skill = React.lazy(() => import("./components/Skills/Skills"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default appRouter;
