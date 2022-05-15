import React, {useState , useEffect} from "react";

const Counter = (props) => {

    const { input , label , icon } = props ;

    return (
        <div className="widget">
            <div className="widget-body">
                <div className="media align-items-center">
                    <div className="media-body">
                        <h2 className="fs-38 text-black font-w600">{ input }</h2>
                        <span className="fs-18 ">{ label }</span>
                    </div>
                    <span className="icon">
                        <i className={ icon }></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Counter ;