import './App.css'
import Home from "./components/Pages/Home/Home"
import Projects from "./components/Pages/Projects/Projects"
import Root from "./components/Pages/Root/Root"
import About from "./components/Pages/About/About"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {path: "/", element: <Root />, children: [
    {path: "", element: <Home />},
    {path: "projects", element: <Projects />},
    {path: "about", element: <About />},
  ]}
])
// possibly add monaco code editor to run code 

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
