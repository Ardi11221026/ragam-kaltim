import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <HeaderMobile />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
    </>
  );
};

export default Header;
