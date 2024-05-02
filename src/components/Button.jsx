export default function Button({ children }) {
  return (
    <button
      onClick={() => console.log("clicked")}
      className="border-2  rounded-full  bg-black text-white text-lg  px-[20px] py-[10px] font-bold  text-center capitalize"
    >
      {children}
    </button>
  );
}
