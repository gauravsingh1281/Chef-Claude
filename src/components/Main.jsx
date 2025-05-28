import { MdAdd } from "react-icons/md";
export default function Main() {
  return (
    <main className="w-full bg-[#FAFAF8] min-h-screen py-8 px-12">
      <form className="flex justify-center items-center gap-4 h-10">
        <input
          type="text"
          className="py-[9px] px-[13px] border-1 border-[#D1D5DB] rounded-lg shadow-sm grow-1 min-w-[150px] max-w-[400px] outline-0"
          placeholder="e.g. oregano"
        />
        <button className="font-inter py-[9px] px-[17px] rounded-lg bg-[#141413] shadow-sm text-white flex justify-center items-center gap-2">
          <MdAdd /> Add ingredient
        </button>
      </form>
    </main>
  );
}
