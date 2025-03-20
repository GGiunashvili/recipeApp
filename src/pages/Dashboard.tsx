import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>dashboard</h1>
      <Link to="profile">profile</Link>
      <Link to="settings">settings</Link>
      <Outlet />
    </>
  );
}
