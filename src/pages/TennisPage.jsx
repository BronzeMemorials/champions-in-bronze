import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";
export default function TennisPage() {
  return <SportPage sport="Tennis" league="ATP · WTA · NCAA" heroImg={heroImg}
    heroSubtitle="Tournament champion plaques, club Hall of Fame displays, and portrait recognition for tennis programs. Cast from your photographs with exact likeness." />;
}