import { Link } from "react-router-dom";
import Toggle from "../context/ThemeToggle";

const Navigation = () => {
  return (
    <div className="flex w-full justify-between items-center pb-20">
      <div>
        <Link
          to="/"
          className="text-lg lg:text-2xl font-extrabold dark:text-rose-500"
        >
          The Nothing Blog
        </Link>
        <p className="text-xs lg:text-sm">The blog where you can read about nothing at all.</p>
      </div>
      <Toggle />
    </div>
  );
};

export default Navigation;
