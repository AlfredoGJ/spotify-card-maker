import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo-4.png";
import logosvg from "../../../assets/logo.svg";
const Header = () => {
  return (
    <header className="bg-emerald-500 text-white px-8 py-6 flex justify-between items-center">
      <Link to="/">
        <div className="flex gap-3 items-center">
          <img fetchPriority="high" src={logosvg} className="w-10" alt="logo"></img>
          <h1 className="text-3xl font-medium">
            {" "}
            Spot<span className="text-3xl font-thin">Image</span>
          </h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;

// SpotImage
// Spotixer
// Musix
