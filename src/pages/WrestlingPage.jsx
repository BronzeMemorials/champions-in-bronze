import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
export default function WrestlingPage() {
  return <SportPage sport="Wrestling" league="NCAA · USA Wrestling" heroImg={heroImg}
    heroSubtitle="Championship plaques, Hall of Fame displays, and portrait recognition for wrestling programs. Sculpted from your actual photographs — exact likeness every time." />;
}