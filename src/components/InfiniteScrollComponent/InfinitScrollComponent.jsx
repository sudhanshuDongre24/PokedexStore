import { useEffect, useState, Children, useRef } from "react";
import { Card } from "..";

let a = 26;
export default function InfiniteScrollComponent({ pokemon }) {
  const [count, setCount] = useState(a);
  const clickedCardRef = useRef();

  a = count > a ? count : a;
  console.log(a);
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
      <li className="mx-auto" id={pokemon[i].id} key={pokemon[i].id}>
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
