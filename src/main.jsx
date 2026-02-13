import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'


import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const m_routerr = createRouter({routeTree})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={m_routerr}/>
  </StrictMode>,
);