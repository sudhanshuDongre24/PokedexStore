import React from "react";
import { PercentageBar } from "../";

function RankingComponent({
  hp,
  attack,
  defense,
  special_attack,
  special_defense,
  speed,
}) {
  return (
    <div className="border-b-[1px] border-solid border-black p-6">
      <div className="text-center mb-4">
        <h1 className="font-semibold">Ranking</h1>
      </div>

      <div className="flex flex-col gap-6">
        <PercentageBar hp={hp} />

        <PercentageBar attack={attack} />

        <PercentageBar defense={defense} />

        <PercentageBar special_attack={special_attack} />

        <PercentageBar special_defense={special_defense} />

        <PercentageBar speed={speed} />

        <PercentageBar
          total={
            hp + attack + defense + special_attack + special_defense + speed
          }
        />
      </div>
    </div>
  );
}

export default RankingComponent;
