import React from "react";
import { PercentageBar } from "../";
import useTheme from "../../hooks/useTheme";

function RankingComponent({
  hp,
  attack,
  defense,
  special_attack,
  special_defense,
  speed,
  type,
}) {
  const borderColor = useTheme(type[0], "bordercolor");

  return (
    <div className={`border-b-[1px] border-solid p-6 ${borderColor}`}>
      <div className="text-center mb-4">
        <h1 className="font-semibold">Ranking</h1>
      </div>

      <div className="flex flex-col gap-6">
        <PercentageBar hp={hp} type={type[0]} />

        <PercentageBar attack={attack} type={type[0]} />

        <PercentageBar defense={defense} type={type[0]} />

        <PercentageBar special_attack={special_attack} type={type[0]} />

        <PercentageBar special_defense={special_defense} type={type[0]} />

        <PercentageBar speed={speed} type={type[0]} />

        <PercentageBar
          total={
            hp + attack + defense + special_attack + special_defense + speed
          }
          type={type[0]}
        />
      </div>
    </div>
  );
}

export default RankingComponent;
