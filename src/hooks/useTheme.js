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

function buttonR(theme) {
  switch (theme) {
    case "Home":
      return "whiteShadow whiteShadowAnimate bg-[#ff90e8] text-black";

    case "Water":
      return "waterTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Steel":
      return "steelTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Rock":
      return "rockTypeColorLight textColorLightGray whiteShadow whiteShadowAnimate border-black";

    case "Psychic":
      return "psychicTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Poison":
      return "poisonTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Normal":
      return "normalTypeColorLight textColorDarkGray border-black whiteShadowAnimate whiteShadow";

    case "Ice":
      return "iceTypeColorLight textColorDarkGray border-black blackShadowAnimate blackShadow";

    case "Ground":
      return "groundTypeColorLight textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Grass":
      return "grassTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Ghost":
      return "ghostTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Flying":
      return "flyingTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Fire":
      return "fireTypeColorLight textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Fighting":
      return "fightingTypeColorLight textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Fairy":
      return "fairyTypeColorLight textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Electric":
      return "electricTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Dragon":
      return "dragonTypeColorLight textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Dark":
      return "darkTypeColorLight textColorDarkGray border-white whiteShadow whiteShadowAnimate";

    case "Bug":
      return "bugTypeColorLight textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    default:
      return "bg-[#ff90e8] border-black whiteShadow whiteShadowAnimate";
  }
}

function buttonL(theme) {
  switch (theme) {
    case "Home":
      return "bgColorDark hover:bg-black textColorLightGray  whiteShadow whiteShadowAnimate";

    case "Water":
      return "waterTypeColorDark textColorDarkGray hover:border-black border-[rgb(36,36,35)] whiteShadow whiteShadowAnimate";

    case "Steel":
      return "steelTypeColorDark textColorDarkGray whiteShadow whiteShadowAnimate border-black";

    case "Rock":
      return "rockTypeColorDark textColorLightGray whiteShadow whiteShadowAnimate border-black";

    case "Psychic":
      return "psychicTypeColorDark textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Poison":
      return "poisonTypeColorDark textColorDarkGray whiteShadow whiteShadowAnimate border-black";

    case "Normal":
      return "normalTypeColorDark textColorDarkGray border-black whiteShadowAnimate whiteShadow  ";

    case "Ice":
      return "iceTypeColorDark textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Ground":
      return "groundTypeColorDark textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Grass":
      return "grassTypeColorDark textColorDarkGray border-black whiteShadow whiteShadowAnimate";

    case "Ghost":
      return "ghostTypeColorDark textColorLightGray whiteShadow whiteShadowAnimate border-black";

    case "Flying":
      return "flyingTypeColorDark textColorLightGray border-black whiteShadow whiteShadowAnimate ";

    case "Fire":
      return "fireTypeColorDark textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Fighting":
      return "fightingTypeColorDark textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Fairy":
      return "fairyTypeColorDark textColorLightGray border-black whiteShadow whiteShadowAnimate";

    case "Electric":
      return "electricTypeColorDark textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Dragon":
      return "dragonTypeColorDark textColorDarkGray border-black blackShadow blackShadowAnimate";

    case "Dark":
      return "darkTypeColorDark textColorLightGray border-white whiteShadow whiteShadowAnimate";

    case "Bug":
      return "bugTypeColorDark textColorLightGray whiteShadow whiteShadowAnimate border-black";

    default:
      return "bg-[rgb(36,36,35)] border-black whiteShadow whiteShadowAnimate";
  }
}

function inputSearchTheme(theme) {
  switch (theme) {
    case "pokemon":
      return "bg-black text-white focus:border-[#ff90e8] whiteShadow ";

    case "Water":
      return "bg-black text-white whiteShadow focus:border-[#86a8fc]";

    case "Steel":
      return "bg-black text-white whiteShadow focus:border-[#43bd85]";

    case "Rock":
      return "bg-black text-white whiteShadow focus:border-[#8b3f20]";

    case "Psychic":
      return "bg-black text-white whiteShadow focus:border-[#f91c90]";

    case "Poison":
      return "bg-black text-white whiteShadow focus:border-[#9a68d9]";

    case "Normal":
      return "bg-black text-white whiteShadow focus:border-[#ca99a6]";

    case "Ice":
      return "bg-white text-black blackShadow focus:border-[#d6f1fb]";

    case "Ground":
      return "bg-white text-black blackShadow focus:border-[#6e481e]";

    case "Grass":
      return "bg-black text-white whiteShadow focus:border-[#26ca4f]";

    case "Ghost":
      return "bg-black text-white whiteShadow focus:border-[#906691]";

    case "Flying":
      return "bg-black text-white whiteShadow focus:border-[#92b2c6]";

    case "Fire":
      return "bg-black text-white whiteShadow focus:border-[#fc4d5a]";

    case "Fighting":
      return "bg-black text-white whiteShadow focus:border-[#ee6038]";

    case "Fairy":
      return "bg-black text-white whiteShadow focus:border-[#ea1369]";

    case "Electric":
      return "bg-white text-black blackShadow focus:border-[#fbfa73]";

    case "Dragon":
      return "bg-black text-white whiteShadow focus:border-[#60cbd7]";

    case "Dark":
      return "bg-black text-white whiteShadow focus:border-[#5b5879]";

    case "Bug":
      return "bg-black text-white whiteShadow focus:border-[#3b9851]";

    default:
      return "bg-black text-white whiteShadow focus:border-[#8b3f20]";
  }
}

function inputSeachIconTheme(theme) {
  switch (theme) {
    case "pokemon":
      return "#fff";

    case "Water":
      return "#1452e3";

    case "Steel":
      return "#5f756d";

    case "Rock":
      return "#48180b";

    case "Psychic":
      return "#a12c68";

    case "Poison":
      return "#5d2d86";

    case "Normal":
      return "#77505a";

    case "Ice":
      return "#87d2f4";

    case "Ground":
      return "#a9712d";

    case "Grass":
      return "#137b3d";

    case "Ghost":
      return "#34326b";

    case "Flying":
      return "#4a677d";

    case "Fire":
      return "#aa1e23";

    case "Fighting":
      return "#984024";

    case "Fairy":
      return "#971944";

    case "Electric":
      return "#e3e32b";

    case "Dragon":
      return "#448a94";

    case "Dark":
      return "#5b5879";

    case "Bug":
      return "#1d4a27";

    default:
      return "#fff";
  }
}

const useTheme = (theme, variant) => {
  if (!theme) {
    return;
  }

  if (variant === "bgcolor") return bgColor(theme[0]);
  if (variant === "headercolor") return headerColor(theme);
  if (variant === "cartbutton") return cartButtonColor(theme);
  if (variant === "productpagebgcolor") return productPageBgcolor(theme);
  if (variant === "sharebutton") return shareButtonColor(theme);
  if (variant === "bordercolor") return borderColor(theme);
  if (variant === "headerbordercolor") return headerBorderColor(theme);
  if (variant === "priceboxcolor") return priceBoxColor(theme);
  if (variant === "buttonRcolor") return buttonR(theme);
  if (variant === "buttonLcolor") return buttonL(theme);
  if (variant === "inputsearch") return inputSearchTheme(theme);
  if (variant === "inputsearchicon") return inputSeachIconTheme(theme);
};

export default useTheme;
