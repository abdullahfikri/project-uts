import { NavLink } from "react-router-dom";
import SettingSvg from "../../assets/setting.svg";
const Navbar = (props) => {
  return (
    <nav className="bg-primary text-med">
      <div className="container justify-between items-center m-auto flex p-5">
        <div>
          <p className="font-bold text-2xl">Al-Qur'an Utsmani</p>
        </div>
        <div className="">
          <ul className=" flex items-center">
            <li>
              <NavLink
                to="/surat/list-surat"
                className="py-3 px-4 hover:text-secondary font-bold text-xl"
              >
                Surat
              </NavLink>
            </li>
            <li>
              <button className="py-3 px-4" onClick={props.onOpen}>
                <img src={SettingSvg} alt="Setting" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
