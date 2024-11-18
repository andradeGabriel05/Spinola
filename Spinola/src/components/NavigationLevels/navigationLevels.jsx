import ActivatedButton from "../ActivatedButton/activatedButton";

export default function navigationLevels() {
  return (
    <section className="container_homepage_navigation_levels">
      <div className="levels">
        <ActivatedButton link="/">A1 Débutant</ActivatedButton>
      </div>
      <div className="levels">
        <ActivatedButton link="/a2">A2 Élémentaire</ActivatedButton>
      </div>

    </section>
  );
}
