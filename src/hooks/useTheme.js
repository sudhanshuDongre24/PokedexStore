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
      return "bgColorDarkGray textColorLightGray border-b-[1px] border-white ";

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
    case "Home":
      return "bg-[rgb(36,36,35)] textColorLightGray ";

    case "Water":
      return "waterTypeColorLight textColorDarkGray blackShadow blackShadowAnimate border-black";

    case "Steel":
      return "steelTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Rock":
      return "rockTypeColorLight textColorLightGray border-black blackShadow blackShadowAnimate";

    case "Psychic":
      return "psychicTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Poison":
      return "poisonTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate ";

    case "Flying":
      return "flyingTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Ghost":
      return "ghostTypeColorLight textColorLightGray border-black blackShadow blackShadowAnimate ";

    case "Electric":
      return "electricTypeColorLight textColorDarkGray border-white whiteShadow whiteShadowAnimate hover:border-black";

    case "Grass":
      return "grassTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Ground":
      return "groundTypeColorLight textColorLightGray border-black blackShadow blackShadowAnimate";

    case "Ice":
      return "iceTypeColorLight textColorDarkGray border-white whiteShadow whiteShadowAnimate hover:border-black";

    case "Normal":
      return "normalTypeColorLight textColorDarkGray border-white whiteShadow whiteShadowAnimate hover:border-black";

    case "Fire":
      return "fireTypeColorDark textColorLightGray border-black hover:border-white blackShadow blackShadowAnimate";

    case "Bug":
      return "bugTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Fighting":
      return "fightingTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Fairy":
      return "fairyTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate hover:border-white";

    case "Dragon":
      return "dragonTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Dark":
      return "darkTypeColorLight textColorDarkGray border-white blackShadow blackShadowAnimate";

    default:
      return "bg-[rgba(254,255,254,255)] textColorDarkGray ";
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

function shareButtonColor(theme) {
  switch (theme) {
    case "Normal":
    case "Ice":
    case "Electric":
      return "whiteShadow whiteShadowAnimate border-white hover:border-black";

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
      return "border-black blackShadow blackShadowAnimate";
    default:
      return "border-black blackShadow blackShadowAnimate";
  }
}

function borderColor(theme) {
  switch (theme) {
    case "Normal":
    case "Ice":
    case "Electric":
      return "border-white";

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
      return "border-black";
    default:
      return "border-black";
  }
}

function headerBorderColor(theme) {
  switch (theme) {
    case "Normal":
    case "Ice":
    case "Electric":
      return "border-b-[rgb(221,221,221)] border-t-[rgba(221,221,221,0.35)]";

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
      return "border-b-black border-t-[rgb(221,221,221)]";
    default:
      return "border-black";
  }
}

function priceBoxColor(theme) {
  switch (theme) {
    case "Water":
      return "waterTypeColorDark textColorLightGray";

    case "Steel":
      return "steelTypeColorDark textColorLightGray";

    case "Rock":
      return "rockTypeColorDark textColorLightGray";

    case "Psychic":
      return "psychicTypeColorDark textColorLightGray";

    case "Poison":
      return "poisonTypeColorDark textColorLightGray";

    case "Normal":
      return "normalTypeColorDark textColorLightGray border-white";

    case "Ice":
      return "iceTypeColorDark textColorDarkGray border-white";

    case "Ground":
      return "groundTypeColorDark textColorLightGray";

    case "Grass":
      return "grassTypeColorDark textColorLightGray";

    case "Ghost":
      return "ghostTypeColorDark textColorLightGray";

    case "Flying":
      return "flyingTypeColorDark textColorLightGray";

    case "Fire":
      return "fireTypeColorDark textColorLightGray";

    case "Fighting":
      return "fightingTypeColorDark textColorLightGray";

    case "Fairy":
      return "fairyTypeColorDark textColorLightGray";

    case "Electric":
      return "electricTypeColorDark textColorDarkGray border-white";

    case "Dragon":
      return "dragonTypeColorDark textColorLightGray";

    case "Dark":
      return "darkTypeColorDark textColorLightGray";

    case "Bug":
      return "bugTypeColorDark textColorLightGray";

    default:
      return "bg-[rgb(255,144,232)]";
  }
}

const useTheme = (theme, variant) => {
  if (variant === "bgcolor") return bgColor(theme[0]);
  if (variant === "headercolor") return headerColor(theme);
  if (variant === "cartbutton") return cartButtonColor(theme);
  if (variant === "productpagebgcolor") return productPageBgcolor(theme);
  if (variant === "sharebutton") return shareButtonColor(theme);
  if (variant === "bordercolor") return borderColor(theme);
  if (variant === "headerbordercolor") return headerBorderColor(theme);
  if (variant === "priceboxcolor") return priceBoxColor(theme);
};

export default useTheme;
