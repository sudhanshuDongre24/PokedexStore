import { useSelector } from "react-redux";

function bgColor(type) {
  let color;
  switch (type.toLowerCase()) {
    case "water":
      return (color = "#86a8fc");
    //   color = "#1452e3";

    case "steel":
      return (color = "#43bd95");
    //color = "#5f756d";

    case "rock":
      return (color = "#8b3f20");
    //  color = "#48180b";

    case "psychic":
      return (color = "#f91c90");
    //  color = "#a12c68";

    case "poison":
      return (color = "#9a68d9");
    //  color = "#5d2d86";

    case "normal":
      return (color = "#ca99a6");
    //   color = "#77505a";

    case "ice":
      return (color = "#d6f1fb");
    //color = "#87d2f4";

    case "ground":
      return (color = "#6e481e");
    //   color = "#a9712d";

    case "grass":
      return (color = "#26ca4f");
    //   color = "#137b3d";

    case "ghost":
      return (color = "#906691");
    //   color = "#34326b";

    case "flying":
      return (color = "#92b2c6");
    //color = "#4a677d";

    case "fire":
      return (color = "#fc4d5a");
    //   color = " #aa1e23";

    case "fighting":
      return (color = "#ee6038");
    // color = "#984024";

    case "fairy":
      return (color = "#ea1369");
    //  color = "#971944";

    case "electric":
      return (color = "#fbfa73");
    //   color = "#e3e32b";

    case "dragon":
      return (color = "#60cbd7");
    //  color = "#448a94";

    case "dark":
      return (color = "#5b5879");
    //  color = "#040706";

    case "bug":
      return (color = "#3b9851");
    //   color = "#1d4a27";

    default:
      return (color = "black");
  }
}

function headerColor(theme) {
  console.log(theme);

  /* rgb(221,221,221)] bg-[rgb(36,36,35)] border-b-[rgba(221,221,221,0.35)] text-[rgb(36,36,35)] border-b-[rgba(221,221,221,0.35)] */
  switch (theme) {
    case "Home":
      return "text-[rgb(221,221,221)] bg-[rgb(36,36,35)] border-b-[rgba(221,221,221,0.35)] ";

    case "Water":
      return "bg-[#1452e3] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Steel":
      return "bg-[#5f756d] text-[rgb(221,221,221)]  border-b-[rgba(221,221,221,0.35)]";

    case "Rock":
      return "bg-[#48180b] text-[rgb(221,221,221)] border-b-[black]";

    case "Psychic":
      return "bg-[#a12c68] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Poison":
      return "bg-[#5d2d86] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Flying":
      return "bg-[#4a677d] text-[rgb(221,221,221)] border-b-[black]";

    case "Ghost":
      return "bg-[#34326b] text-[rgb(221,221,221)] border-b-[black]";

    case "Electric":
      return "bg-[#e3e32b] text-[rgb(36,36,35)] border-b-[black]";

    case "Grass":
      return "bg-[#137b3d] text-[rgb(221,221,221)] border-b-[black]";

    case "Ground":
      return "bg-[#a9712d] text-[rgb(221,221,221)] border-b-[black]";

    case "Ice":
      return "bg-[#87d2f4] text-[rgb(36,36,35)] border-b-[rgba(221,221,221,0.35)]";

    case "Normal":
      return "bg-[#77505a] text-[rgb(36,36,35)] border-b-[black]";

    case "Fire":
      return "bg-[#aa1e23] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Bug":
      return "bg-[#1d4a27] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Fighting":
      return "bg-[#984024] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Fairy":
      return "bg-[#971944] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Dragon":
      return "bg-[#448a94] text-[rgb(221,221,221)] border-b-[rgba(221,221,221,0.35)]";

    case "Dark":
      return "bg-[#040706] text-[rgb(221,221,221)] border-b-[black]";

    default:
      return "text-[rgb(36,36,35)] bg-[rgba(254,255,254,255)] border-b-[rgba(221,221,221,0.35)]";
  }
}

const useTheme = (theme, variant) => {
  if (variant === "bgcolor") return bgColor(theme[0]);
  if (variant === "headercolor") return headerColor(theme);
};

export default useTheme;
