import { createBrowserRouter } from "react-router-dom";
import Template from "./routes/Template";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Project from "./routes/Project";
import Filter from "./routes/Filter";
import ErrorPage from "./components/ErrorPage";
import { triviaLoader } from "./components/SidebarLeft";

const App = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: triviaLoader,
        },
        {
          path: "/projects",
          element: <Projects />,
          children: [
            {
              path: "/projects/filter",
              element: <Filter />,
            },
          ],
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ],
    },
  ]);
};

export default App;
