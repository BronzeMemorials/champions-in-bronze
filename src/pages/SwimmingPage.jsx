import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
export default function SwimmingPage() {
  return <SportPage sport="Swimming" league="NCAA · USA Swimming · Olympic" heroImg={heroImg}
    heroSubtitle="Championship record boards, Hall of Fame displays, and portrait plaques for aquatics programs. Bronze recognition cast from your actual photographs." />;
}