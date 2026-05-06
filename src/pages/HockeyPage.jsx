import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
export default function HockeyPage() {
  return <SportPage sport="Hockey" league="NHL · NCAA · Junior" heroImg={heroImg}
    heroSubtitle="Championship plaques, arena busts, retired jersey displays, and Hall of Fame installations for hockey programs — sculpted from your actual photographs." />;
}