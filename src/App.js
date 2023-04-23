import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./task1/Dashboard";
import Fetch from "./task2/Fetch";
import Register from "./task5/Register";
import Sidebar from "./Sidebar";
import Chart from "./task4/charts/Chart";
import Login from "./task3/Login";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="maste">
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/chart" element={<Chart />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/fetch" element={<Fetch />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
