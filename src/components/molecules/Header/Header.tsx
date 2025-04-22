import logo from "../../../assets/img/logo-4.png";

const Header = () => {
  return (
    <header className="bg-emerald-500 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-medium">Music Card Generator</h1>
      {/* <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg font-medium transition-colors">
        My Gallery
      </button> */}
      <img src={logo} className="w-10" ></img>
    </header>
  );
};

export default Header;
