import React from 'react'
import { tag } from "./SearchDiv.module.css";
import goTo from "../../images/Component 127 – 42.png";
const Tag = ({ tagName }) => {
    return (
        <div className={tag}>
            {tagName} &nbsp;
            <img width="12px" height="12px" src={goTo} alt="tag" />
        </div>
    )
}

export default Tag