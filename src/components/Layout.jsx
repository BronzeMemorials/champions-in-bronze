import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FiftyYearsBanner from "./shared/FiftyYearsBanner";
import StickyQuoteButton from "./shared/StickyQuoteButton";
import QuoteForm from "./shared/QuoteForm";

export default function Layout() {
  return (
    <div className="bg-obsidian min-h-screen font-sans">
      <Navbar />
      <main>
        {/* TOP quote form */}
        <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />
        {/* Page content */}
        <Outlet />
        {/* MIDDLE quote form */}
        <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />
      </main>
      <FiftyYearsBanner />
      {/* BOTTOM quote form */}
      <QuoteForm title="Start Your Recognition Project Today" subtitle="Trusted by universities, stadiums, and Hall of Fame programs nationwide." source="pro" />
      <Footer />
      <StickyQuoteButton />
    </div>
  );
}