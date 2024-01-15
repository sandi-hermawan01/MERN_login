import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { UserContextProvider } from "../context/userContext";

import SignIn from "./pages/login.page";
import SignUp from "./pages/signup.page";
import HomePage from "./pages/home.page";
import DashboardPage from "./pages/dashboard.page";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3010";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
