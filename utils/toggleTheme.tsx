import { Dispatch, SetStateAction } from "react";

interface IToggleTheme {
    dark: boolean;
    setDark: Dispatch<SetStateAction<boolean>>;
}

const toggleTheme = (props: IToggleTheme) => {
    if (props.dark) {
        localStorage.setItem("dark", "false");
    } else {
        localStorage.setItem("dark", "true");
    }
    props.setDark(!props.dark);
};

export { toggleTheme };