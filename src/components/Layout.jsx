import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import StickyQuoteButton from "./shared/StickyQuoteButton";

export default function Layout() {
  return (
    <div className="bg-obsidian min-h-screen font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyQuoteButton />
    </div>
  );
}