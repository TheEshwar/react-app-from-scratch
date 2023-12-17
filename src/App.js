import React from "react";
import "./main.scss";
import btnStyles from "./Button.module.css"
import LOGO1 from "./images/profile.png"
import LOGO2 from "./images/profile copy.png"

const App = () => {
	return (
		<div>
			<h1>I love my India.</h1>
      <button className={btnStyles.success}>Sucess</button>
      <button className={btnStyles.error}>Error</button>
      <img src={LOGO1} width={"200px"}/>
      <img src={LOGO2} width={"200px"}/>
		</div>
	);
};

export default App;
