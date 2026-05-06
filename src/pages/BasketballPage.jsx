import SportPage from "./SportPage";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
export default function BasketballPage() {
  return <SportPage sport="Basketball" league="NBA · WNBA · NCAA" heroImg={heroImg}
    heroSubtitle="Bronze plaques, portrait busts, retirement honors, and Hall of Fame displays for basketball programs. Exact photographic likeness from submitted photos — no in-person sessions." />;
}