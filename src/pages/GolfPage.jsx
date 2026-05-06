import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
export default function GolfPage() {
  return <SportPage sport="Golf" league="PGA · LPGA · NCAA · Club" heroImg={heroImg}
    heroSubtitle="Tournament champion recognition, club Hall of Fame displays, and locker room portrait plaques for golf programs. Cast from your actual photographs." />;
}