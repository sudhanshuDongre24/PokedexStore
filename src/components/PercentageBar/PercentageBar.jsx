import React, { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

function PercentageBar(prop) {
  const [showValue, setShowValue] = useState(false);
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
      className="flex gap-2 relative cursor-pointer"
      onMouseEnter={() => setShowValue(true)}
      onMouseLeave={() => setShowValue(false)}
    >
      <h2 className="">{key}:</h2>

      <div className="w-full border-black border-solid border-[1px] h-6  rounded">
        <div
          style={{ width: avgValue + "%" }}
          className={`bg-[#ff90e8] h-full w-full rounded-r `}
        ></div>
      </div>

      <h2>{avgValue}%</h2>
      {showValue && (
        <div className="absolute bg-black rounded text-white px-2 py-1 left-[-20%] text-nowrap">
          {key}: {value} pts
        </div>
      )}
    </div>
  );
}

export default PercentageBar;
