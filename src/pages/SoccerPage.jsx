import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
export default function SoccerPage() {
  return <SportPage sport="Soccer" league="MLS · US Soccer · NCAA" heroImg={heroImg}
    heroSubtitle="Action reliefs, coach tribute busts, and club Hall of Fame displays for soccer programs. True photographic likeness from your submitted photographs." />;
}