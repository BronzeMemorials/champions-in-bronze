import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
export default function BaseballPage() {
  return <SportPage sport="Baseball" league="MLB · NCAA · Minor League" heroImg={heroImg}
    heroSubtitle="Home plate-shaped reliefs, portrait plaques, and Hall of Fame displays for baseball programs. Sculpted from your photographs with exact player likeness." />;
}