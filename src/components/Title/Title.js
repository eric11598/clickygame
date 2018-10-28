import React from "react";
import "./Title.css";

const Title = props =>(
<h1 className="title">{props.children}
<p className="card-text">Score: {props.score}</p>
</h1>);


export default Title;
 