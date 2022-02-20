import React from "react" ;
import {NavLink} from "react-router-dom" ;

export default (props) => {
    return (
        <Generator {...props} />
    );
};

function Generator(props){

    let { items , childrens , ...otherProps } = props ;

    items = items ?? childrens ;

    return (
        <UL {...otherProps}>
            { items.map(function(item , key){

                return <LI {...item} key={key} />
                
            }) }
        </UL>
    )    
}

function UL(props){
    return (
        <ul {...props}>{props.children}</ul>
    );
}

function LI(props){

    const [ toggle , toggleHandle ] = React.useState(false)

    let canShowChilds = ( toggle && props?.childrens?.length ) ;

    return (
        <li>
            <LINK {...props} onClick={ () => { toggleHandle( prev => !prev ) } } />

            { canShowChilds ? <Generator {...props} /> : "" }
        </li>
    );
}

function LINK(props){
    return (
        <NavLink {...props} >
            <i className={props.icon} ></i>
            {props.label}
        </NavLink>
    );
}
