import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // el publisher de las PAGES!

  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hr) => (
        <HeroCard key={hr.id} {...hr} />
      ))}
    </div>
  );
};
