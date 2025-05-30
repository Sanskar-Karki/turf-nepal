import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home/HeroSection.tsx";
import Turfs from "./pages/Turfs/Turfs.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact/Contact.tsx";
import AuthPage from "./pages/auth/auth.tsx";
import TurfRegistration from "./pages/Home/TurfRegistration.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="turfs" element={<Turfs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="turf-registration" element={<TurfRegistration />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
