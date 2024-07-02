import React, { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import useTheme from "../../hooks/useTheme";

function PercentageBar(prop) {
  const [showValue, setShowValue] = useState(false);
  const [key, value] = Object.entries(prop)[0];
  const borderColor = useTheme(prop.type, "bordercolor");

  const bgColor = useTheme(prop.type, "headercolor");

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

      <div
        className={`w-full border-solid border-[1px] h-6 rounded ${borderColor}`}
      >
        <div
          style={{ width: avgValue + "%" }}
          className={`h-full w-full rounded-r ${bgColor}`}
        ></div>
      </div>

      <h2>{avgValue}%</h2>
      {showValue && (
        <div className="absolute z-[49] bg-black rounded text-white px-2 mt-6 py-1 left-[-30%] text-nowrap">
          {key}: {value} pts
        </div>
      )}
    </div>
  );
}

export default PercentageBar;
