import React from "react";
import "./Title.css";

const Title = props =>(
<h1 className="title">{props.children}
<p className="message">Select a character to earn points, but do not click more than once!</p>


</h1>);


export default Title;
 
