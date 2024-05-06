import Input from "./Input";

function InputSearch({ width, className }) {
  function modelToggle(e) {
    if (e.target.value == "") {
      document.getElementById("searchContainer").classList.add("hidden");
    } else {
      document.getElementById("searchContainer").classList.remove("hidden");
    }
  }

  return (
    <div className="relative mt-0">
      <Input onChange={modelToggle} className="whiteShadow" />
      <img
        className="w-8 absolute top-1 right-6"
        src="/public/icons/search.svg"
        alt=""
      />

      <div
        id="searchContainer"
        className="absolute whiteShadow pb-4 mt-3 border-2 hidden w-full bg-[rgba(29,29,29,0.9)] rounded border-[rgba(221,221,221,0.35)] animate-accordion-down "
      >
        <h1
          className="hover:bg-white py-2 mb-2
         hover:text-black"
        >
          Hello
        </h1>
        <hr />
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
        <h1 className="hover:bg-white py-2 hover:text-black">Hello</h1>
      </div>
    </div>
  );
}

export default InputSearch;
