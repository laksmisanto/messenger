import React from "react";
import SignUp from "./pages/registration";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Rootlayout from "./components/Rootlayout";
import Messages from "./pages/messages";
import Notification from "./pages/notification";
import Setting from "./pages/settings";
import Notloggedinuser from "./Privaterouter/Notloggedinuser";
import Loggedinuser from "./Privaterouter/Loggedinuser";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Loggedinuser />}>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
          </Route>
        </Route>
        <Route element={<Notloggedinuser />}>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
