import { Dispatch, SetStateAction } from 'react'

interface ISetNewTab {
    tab: string
    setTab: Dispatch<SetStateAction<string>>
}
const setNewTab = (props: ISetNewTab) => {
    props.setTab(props.tab)
}

export { setNewTab }
