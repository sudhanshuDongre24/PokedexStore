import { useSelector } from "react-redux";

function bgColor(type) {
  switch (type.toLowerCase()) {
    case "water":
      return "waterTypeColorLight";

    case "steel":
      return "steelTypeColorLight";

    case "rock":
      return "rockTypeColorLight";

    case "psychic":
      return "psychicTypeColorLight";

    case "poison":
      return "poisonTypeColorLight";

    case "normal":
      return "normalTypeColorLight";

    case "ice":
      return "iceTypeColorLight";

    case "ground":
      return "groundTypeColorLight";

    case "grass":
      return "grassTypeColorLight";

    case "ghost":
      return "ghostTypeColorLight";

    case "flying":
      return "flyingTypeColorLight";

    case "fire":
      return "fireTypeColorLight";

    case "fighting":
      return "fightingTypeColorLight";

    case "fairy":
      return "fairyTypeColorLight";

    case "electric":
      return "electricTypeColorLight";

    case "dragon":
      return "dragonTypeColorLight";

    case "dark":
      return "darkTypeColorLight";

    case "bug":
      return "bugTypeColorLight";

    default:
      return "black";
  }
}

function headerColor(theme) {
  switch (theme) {
    case "Home":
      return "bg-[rgb(36,36,35)] textColorLightGray ";

    case "Water":
      return "waterTypeColorDark textColorLightGray";

    case "Steel":
      return "steelTypeColorDark textColorLightGray";

    case "Rock":
      return "rockTypeColorDark textColorLightGray";

    case "Psychic":
      return "psychicTypeColorDark textColorLightGray";

    case "Poison":
      return "poisonTypeColorDark textColorLightGray ";

    case "Flying":
      return "flyingTypeColorDark textColorLightGray";

    case "Ghost":
      return "ghostTypeColorDark textColorLightGray ";

    case "Electric":
      return "electricTypeColorDark textColorDarkGray";

    case "Grass":
      return "grassTypeColorDark textColorLightGray";

    case "Ground":
      return "groundTypeColorDark textColorLightGray";

    case "Ice":
      return "iceTypeColorDark textColorDarkGray";

    case "Normal":
      return "normalTypeColorDark textColorDarkGray";

    case "Fire":
      return "fireTypeColorDark textColorLightGray";

    case "Bug":
      return "bugTypeColorDark textColorLightGray";

    case "Fighting":
      return "fightingTypeColorDark textColorLightGray";

    case "Fairy":
      return "fairyTypeColorDark textColorLightGray";

    case "Dragon":
      return "dragonTypeColorDark textColorLightGray";

    case "Dark":
      return "darkTypeColorDark textColorLightGray";

    default:
      return "bg-[rgba(254,255,254,255)] textColorDarkGray ";
  }
}

function cartButtonColor(theme) {
  switch (theme) {
    case "Grass":
      return "";

    default:
      return "text-black";
  }
}

function productPageBgcolor(theme) {
  switch (theme) {
    case "Normal":
    case "Ice":
    case "Electric":
      return "bgColorDarkGray text-white";

    case "Grass":
    case "Water":
    case "Steel":
    case "Flying":
    case "Fighting":
    case "Rock":
    case "Poison":
    case "Fairy":
    case "Psychic":
    case "Fire":
    case "Ghost":
    case "Ground":
    case "Dragon":
    case "Bug":
    case "Dark":
      return "bgColorWhite text-black";
    default:
      return "bgColorWhite text-black";
  }
}

const useTheme = (theme, variant) => {
  if (variant === "bgcolor") return bgColor(theme[0]);
  if (variant === "headercolor") return headerColor(theme);
  if (variant === "cartbutton") return cartButtonColor(theme);
  if (variant === "productpageHeaderbgcolor") return productpagebgcolor(theme);
  if (variant === "productpagebgcolor") return productPageBgcolor(theme);
};

export default useTheme;
