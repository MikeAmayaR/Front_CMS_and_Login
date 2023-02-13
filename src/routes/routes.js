import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { Login } from "../views/Login";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export { MyRoutes };
