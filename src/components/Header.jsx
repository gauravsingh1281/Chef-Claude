import chefClaudeLogo from "/images/chef-claude-icon.png";
export default function Header() {
  return (
    <header className="flex justify-center items-center gap-4 w-full shadow-md py-4 ">
      <img
        className="w-[43px] h-[52px]"
        src={chefClaudeLogo}
        alt="chef-claude-logo"
      />
      <h1 className="text-4xl font-inter">Chef Claude</h1>
    </header>
  );
}
