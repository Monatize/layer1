import { IconContext } from "react-icons";

interface IWrapper {
  dark: boolean;
  title: string;
  tab: string;
  setTab: (tab: string) => void;
  children: (false | JSX.Element)[];
}
const IconContextWrapper = (props: IWrapper) => {
  return (
    <div className="p-4 hover:cursor-pointer" onClick={() => props.setTab(props.tab)}>
      <div className={`w-full h-full flex items-center space-x-2 hover:-translate-y-2 transition-all duration-300 `}>
        <IconContext.Provider value={{
          className: `${props.dark ? 'fill-brand-soft-white' : 'fill-brand-black'}`,
          size: '2.5rem'
        }}>
          {props.children}
        </IconContext.Provider>

        <h1 className={`${props.dark ? 'text-brand-soft-white' : 'text-brand-black'} text-xl font-mt font-bold`}>{props.title}</h1>
      </div>
    </div>
  );
};

export default IconContextWrapper;
