import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
export default function FootballPage() {
  return <SportPage sport="Football" league="NFL · NCAA · High School" heroImg={heroImg}
    heroSubtitle="Custom bronze plaques, busts, and statues for football programs at every level. Every player and coach captured from your actual photographs — exact likeness, no in-person sessions needed." />;
}