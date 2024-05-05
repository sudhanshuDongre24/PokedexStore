import Input from "./Input";

function InputSearch({ width }) {
  function modelToggle(e) {
    if (e.target.value == "") {
      document.getElementById("searchContainer").classList.add("hidden");
    } else {
      document.getElementById("searchContainer").classList.remove("hidden");
    }
  }
  let rightValue = "";
  for (let i = 0; i < width.length; i++) {
    if (isNaN(Number(width[i]))) break;

    rightValue += width[i];
  }
  rightValue = -Number(rightValue) / 2;

  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
        <div className="relative ">
          <Input width={width} onChange={modelToggle} className="h-[52px]" />
          <img
            className="w-12 absolute top-6 right-1"
            src="/public/icons/search.svg"
            alt=""
          />
        </div>

        <div id="searchContainer" className="hidden relative ">
          <div
            className="mt-2 bg-[rgba(29,29,29,0.9)] border-white border-2 h-fit pb-10 rounded p-4 absolute animate-accordion-down "
            style={{ width: width, right: rightValue }}
          >
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <hr />
            <h1>Hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputSearch;
