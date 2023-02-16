import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export function AppLayout() {
    return (
        <>
        <NavBar />
        {/* Outlet is a placeholder for sub-routing */}
        <Outlet />
        </>
    )
}