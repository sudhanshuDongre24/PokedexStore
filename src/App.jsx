import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const logChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="bg-[rgb(29,29,29)] min-h-screen text-white">
        {/* <Header /> */}
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex gap-8 flex-col">
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email..."
              className="size-[320px]"
              onChange={logChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
