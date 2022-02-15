import React , {useState} from "react"

export default function Sidebar () {

    const items = [
        {
            "label" : "صفحات" ,
            "type" : "" ,
            "to" : "/" ,
            "childrens" : [
                {
                    "label" :    "درباره ما" ,
                    "type" : "" ,
                    "to" : "/aboutus" ,
                },
                {
                    "label" : "گالری تصاویر" ,
                    "type" : "" ,
                    "to" : "/pictures" ,
                }
            ]
        } , 
    ]

    return null ;

}