// * React/Next
// * React/Next

// * Icons
import { IconContext } from "react-icons";
import { BsFileCode, BsFileCodeFill } from "react-icons/bs";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { RiHome2Line, RiHome2Fill, RiPagesFill, RiPagesLine } from "react-icons/ri";
import IconContextWrapper from "./IconContextWrapper";

// * Interfaces
interface ISidebar {
  tab: string;
  dark: boolean;
  toggleTheme: () => void;
  setTab: (tab: string) => void;
}

const Sidebar = (props: ISidebar) => {
  return (
    <div className={`w-full h-full border ${props.dark ? 'border-brand-soft-white shadow-light-btn' : 'border-brand-black shadow-btn'} transition-all duration-500 overflow-y-scroll`}>
      <div className="w-full pt-2 pb-2 transition-all duration-500">
        {props.dark && <img src="/Dark-M.png" />}
        {!props.dark && <img src="/Light-M.png" />}
      </div>

      <IconContextWrapper dark={props.dark} title={"Home"} setTab={props.setTab} tab={"home"}>
        {props.tab === "home" && <RiHome2Fill />}
        {props.tab !== "home" && <RiHome2Line />}
      </IconContextWrapper>

      <IconContextWrapper dark={props.dark} title={"Stats"} setTab={props.setTab} tab={"stats"}>
        {props.tab === "stats" && <MdDashboard />}
        {props.tab !== "stats" && <MdOutlineDashboard />}
      </IconContextWrapper>

      <IconContextWrapper dark={props.dark} title={"Pages"} setTab={props.setTab} tab={"pages"}>
        {props.tab === "pages" && <RiPagesFill />}
        {props.tab !== "pages" && <RiPagesLine />}
      </IconContextWrapper>

      <IconContextWrapper dark={props.dark} title={"Contracts"} setTab={props.setTab} tab={"contracts"}>
        {props.tab === "contracts" && <BsFileCodeFill />}
        {props.tab !== "contracts" && <BsFileCode />}
      </IconContextWrapper>

    </div>
  );
};

export default Sidebar;
