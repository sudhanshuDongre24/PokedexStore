import React from "react";

function PercentageBar(prop) {
  const [key, value] = Object.entries(prop)[0];

  let avgValue = 0;
  const maxHpValue = 255;
  const maxAttackValue = 181;
  const maxDefenseValue = 230;
  const maxSpecialAttackValue = 173;
  const maxSpecailDefenseValue = 230;
  const maxSpeed = 160;
  const maxTotalValue = 720;

  switch (key) {
    case "hp": {
      avgValue = ((value / maxHpValue) * 100).toFixed(0);
      break;
    }
    case "attack": {
      avgValue = ((value / maxAttackValue) * 100).toFixed(0);
      break;
    }
    case "defense": {
      avgValue = ((value / maxDefenseValue) * 100).toFixed(0);
      break;
    }
    case "special_attack": {
      avgValue = ((value / maxSpecialAttackValue) * 100).toFixed(0);
      break;
    }
    case "special_defense": {
      avgValue = ((value / maxSpecailDefenseValue) * 100).toFixed(0);
      break;
    }
    case "speed": {
      avgValue = ((value / maxSpeed) * 100).toFixed(0);
      break;
    }
    case "total": {
      avgValue = ((value / maxTotalValue) * 100).toFixed(0);
      break;
    }
  }

  return (
    <div
      onMouseEnter={() => console.log(value)}
      className="w-full flex justify-even gap-2"
    >
      <h2 className="">{key}:</h2>
      <div className=" border-black border-solid border-[1px] h-6 w-full rounded">
        <div
          style={{ width: avgValue + "%" }}
          className={`bg-[#ff90e8] h-full rounded-r `}
        ></div>
      </div>
      <h2>{avgValue}%</h2>
    </div>
  );
}

export default PercentageBar;
