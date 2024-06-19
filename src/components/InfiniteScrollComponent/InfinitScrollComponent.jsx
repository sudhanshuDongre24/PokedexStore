import { useEffect, useState, Children } from "react";
import { Card } from "..";

export default function InfiniteScrollComponent({ pokemon }) {
  const [count, setCount] = useState(26);

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

  const cards = [];

  for (let i = 0; i < count; i++) {
    if (i == pokemon.length) {
      break;
    }
    cards.push(
      <li className="mx-auto" key={pokemon[i].id}>
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
