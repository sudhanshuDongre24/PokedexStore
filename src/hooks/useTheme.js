const useTheme = (type) => {
  let color;
  switch (type.toLowerCase()) {
    case "water":
      color = "#86a8fc";
      //   color = "#1452e3";
      break;

    case "steel":
      color = "#43bd95";
      //color = "#5f756d";
      break;

    case "rock":
      color = "#8b3f20";
      //  color = "#48180b";
      break;

    case "psychic":
      color = "#f91c90";
      //  color = "#a12c68";
      break;

    case "poison":
      color = "#9a68d9";
      //  color = "#5d2d86";
      break;

    case "normal":
      color = "#ca99a6";
      //   color = "#77505a";
      break;

    case "ice":
      color = "#d6f1fb";
      //color = "#87d2f4";
      break;

    case "ground":
      color = "#6e481e";
      //   color = "#a9712d";
      break;

    case "grass":
      color = "#26ca4f";
      //   color = "#137b3d";
      break;

    case "ghost":
      color = "#906691";
      //   color = "#34326b";
      break;

    case "flying":
      color = "#92b2c6";
      //color = "#4a677d";
      break;

    case "fire":
      color = "#fc4d5a";
      //   color = " #aa1e23";
      break;

    case "fighting":
      color = "#ee6038";
      // color = "#984024";
      break;

    case "fairy":
      color = "#ea1369";
      //  color = "#971944";
      break;

    case "electric":
      color = "#fbfa73";
      //   color = "#e3e32b";
      break;

    case "dragon":
      color = "#60cbd7";
      //  color = "#448a94";
      break;

    case "dark":
      color = "#5b5879";
      //  color = "#040706";
      break;

    case "bug":
      color = "#3b9851";
      //   color = "#1d4a27";
      break;
    default:
      color = "black";
      break;
  }

  return color;
};

export default useTheme;
