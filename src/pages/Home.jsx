import React, { Suspense } from "react";
import { Container, Card } from "../components";

const LazyCard = React.lazy(() => import("../components/Card/Card"));

function Home() {
  const number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="text-white bg-inherit z-10">
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
          {number.map((nums) => (
            <li key={nums}>
              <Suspense fallback="Loading....">
                <LazyCard index={nums} />
              </Suspense>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Home;
