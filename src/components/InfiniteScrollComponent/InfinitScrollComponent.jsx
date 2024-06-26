import { useEffect, useState } from "react";
import { Card } from "..";

/* let a = 26;
let b;
 */

export default function InfiniteScrollComponent({ pokemon }) {
  const [count, setCount] = useState(26);
  globalThis.scrollTo(0, 0);

  /* 
  a = count > a ? count : a;
  useEffect(() => {
    const element = document.getElementById(b);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [b]);
 */
  const cards = [];
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 300
      ) {
        setCount((count) => count + 24);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  for (let i = 0; i < count; i++) {
    if (i == pokemon.length) {
      break;
    }
    cards.push(
      <li
        className="mx-auto"
        id={pokemon[i].id}
        key={pokemon[i].name}
        // onClick={() => (b = pokemon[i].id)}
      >
        <Card {...pokemon[i]} />
      </li>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 lg:grid-cols-3 mt-4 items-center mb-11">
      {cards}
    </ul>
  );
}
