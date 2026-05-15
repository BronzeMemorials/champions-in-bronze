import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FiftyYearsBanner from "./shared/FiftyYearsBanner";
import StickyQuoteButton from "./shared/StickyQuoteButton";
export default function Layout() {
  return (
    <div className="bg-obsidian min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FiftyYearsBanner />
      <Footer />
      <StickyQuoteButton />
    </div>
  );
}