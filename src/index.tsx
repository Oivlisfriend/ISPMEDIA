import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.css";

import Home from "^/views/home/view/Home";
import Login from "^/views/login/view/Login";
import SignUp from "./views/signUp/view/SignUp";
import AlbumDetails from "^/views/albumDetails/view/AlbumDetails";
import Group from "^/views/group/view/Group";
import reportWebVitals from "./reportWebVitals";
import ContentManagement from "./views/ContentManagement/ContentManagement";
import Reproducer from "./views/reproducer/view/Reproducer";
import Radio from "./views/radio/Radio";
import Header from "./lib/component/Header/Header";

import {
  AuthViewModel,
  MidiaViewModel,
  PlaylistViewModel,
  GroupViewModel,
} from "./lib/core/utils/initializerModels";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Login" element={<Login viewModel={AuthViewModel} />} />
        <Route path="/SignUp" element={<SignUp viewModel={AuthViewModel} />} />
      </Routes>
    </Router>
    <Router>
      <div className="w-full">
        <Header viewModel={AuthViewModel} />
        <div className="pt-16 bg-[#131313] h-screen overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  viewGroup={GroupViewModel}
                  viewPlaylist={PlaylistViewModel}
                  midiaModel={MidiaViewModel}
                  viewModel={AuthViewModel}
                />
              }
            />
            <Route
              path="/Group"
              element={
                <Group
                  viewGroup={GroupViewModel}
                  viewPlaylist={PlaylistViewModel}
                />
              }
            />
            <Route
              path="/Reproducer"
              element={
                <Reproducer
                  midiaView={MidiaViewModel}
                  viewModel={AuthViewModel}
                />
              }
            />
            <Route
              path="/ContentManagement"
              element={
                <ContentManagement
                  viewGroup={GroupViewModel}
                  viewPlaylist={PlaylistViewModel}
                  midiaModel={MidiaViewModel}
                />
              }
            />
            <Route
              path="/Details"
              element={
                <AlbumDetails
                  viewGroup={GroupViewModel}
                  viewPlaylist={PlaylistViewModel}
                  viewModel={AuthViewModel}
                />
              }
            />
            <Route path="/Radio" Component={Radio} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
