import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions(props) {
    return (
        <div className="SideBarOptions">
            {props.Icon && <props.Icon className="SideBarOptions__icon" />}
            {props.Icon ? (<h4>{props.options}</h4>) :  (
            <p>    
                {props.options}
            </p>
            )}
        </div>
    )
}

export default SidebarOptions
