// * React/Next
// * React/Next

// * Icons
import { 
  HomeIcon,
  ChartBarIcon,
  CollectionIcon,
  TerminalIcon,
  PhotographIcon,
  CashIcon,
  AdjustmentsIcon } from '@heroicons/react/solid';
import {
  HomeIcon as OutlineHomeIcon,
  ChartBarIcon as OutlineChartBarIcon,
  CollectionIcon as OutlineCollectionIcon,
  TerminalIcon as OutlineTerminalIcon,
  PhotographIcon as OutlinePhotographIcon,
  CashIcon as OutlineCashIcon,
  AdjustmentsIcon as OutlineAdjustmentsIcons} from '@heroicons/react/outline';

import IconWrapper from './IconWrapper';

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
      <div className="w-full transition-all duration-500">
        {props.dark && <img src="/Dark-M.png" />}
        {!props.dark && <img src="/Light-M.png" />}
      </div>
      <IconWrapper dark={props.dark} title={"Home"} tab={"home"} setTab={props.setTab} disabled={false}>
        {props.tab === "home" && <HomeIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "home" && <OutlineHomeIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Stats"} tab={"stats"} setTab={props.setTab} disabled={false}>
        {props.tab === "stats" && <ChartBarIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "stats" && <OutlineChartBarIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Pages"} tab={"pages"} setTab={props.setTab} disabled={false}>
        {props.tab === "pages" && <CollectionIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "pages" && <OutlineCollectionIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Contracts"} tab={"contracts"} setTab={props.setTab} disabled={false}>
        {props.tab === "contracts" && <TerminalIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "contracts" && <OutlineTerminalIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Assets"} tab={"assets"} setTab={props.setTab} disabled={false}>
        {props.tab === "assets" && <PhotographIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "assets" && <OutlinePhotographIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Cash"} tab={"cash"} setTab={props.setTab} disabled={false}>
        {props.tab === "cash" && <CashIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "cash" && <OutlineCashIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>

      <IconWrapper dark={props.dark} title={"Settings"} tab={"settings"} setTab={props.setTab} disabled={false}>
        {props.tab === "settings" && <AdjustmentsIcon className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
        {props.tab !== "settings" && <OutlineAdjustmentsIcons className={`w-10 h-10 ${props.dark ? 'text-brand-soft-white' : 'text-brand-black' }`} />}
      </IconWrapper>
    </div>
  );
};

export default Sidebar;
