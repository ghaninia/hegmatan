import React , {useState} from "react"

const SideBarContext = React.createContext({
    opened : false ,
    openedAction : () => {} 
});

export default function Sidebar () {

    const [opened , openedAction] = useState(false) ;

    let value = React.useMemo( () => ({opened , openedAction}) , [opened] ) ;

    return (
        <SideBarContext.Provider value={value}>
            <div className="container">
                    <div className="menu collapse">
                    <ul id="menu">
                        <li>
                            <a href="team.html">تیم</a>
                        </li>
                        <Accordin label="پروژه">
                            <ul>
                                <li>
                                    <a href="project.html">وظایف</a>
                                </li>
                                <li>
                                    <a href="project.html">فایل ها</a>
                                </li>
                                <li>
                                    <a href="project.html">فعالیت</a>
                                </li>
                            </ul>
                        </Accordin>
                        <Accordin label="وظیفه">
                            <ul>
                                <li>
                                    <a href="task.html">فایل ها</a>
                                </li>
                                <li>
                                    <a href="task.html">فعالیت</a>
                                </li>
                            </ul>
                        </Accordin>
                        <li>
                            <a href="kanban-board.html">هیئت کانبان</a>
                        </li>
                        <li>
                            <a href="chat.html">چت</a>
                        </li>
                    </ul>
                </div>
            </div>
        </SideBarContext.Provider>
    );

}

function Accordin(props)
{
    const [show , showChange] = useState(false);

    // const {opened , openedAction} = React.useContext(SideBarContext) ;

    let className = "secondary collapse" ;

    className += show ? "show" : "" ;

    const toggleCollapse = () => {
        showChange( prev => !prev ) ;
    }

    return (
        <li>
            <a onClick={ () => toggleCollapse() }>{props.label}</a>
            <div className={className} >
                {props.children}
            </div>
        </li>
    )
}