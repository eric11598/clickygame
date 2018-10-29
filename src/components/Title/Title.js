import React from "react";
import "./Title.css";

const Title = props =>(
<h1 className="title">{props.children}
<p className="card-text">Score: {props.score} | High Score: {props.highScore}</p>

</h1>);


export default Title;
 