import React, { useState, useEffect } from "react";

// Redux and Actions
import { connect } from "react-redux";
import { componentOneAction } from "../../Actions/componentOneActions";
import { testConnection } from "../../firebase/api";

// CSS
import "./Component1.scss";


const Component1 = props => {
	const [state, setstate] = useState({});
	useEffect(() => {
		props.componentOneAction();
		testConnection().then( x => {
			setstate({result: x.result.name});
		});
	}, []);
	return (
		<div>
			<h1>Hello from {props.text}</h1>
			<h3>Result is {state.result}</h3>
		</div>
	);
};

const mapStateToProps = state => ({
	text: state.componentOne.text
});

export default connect(mapStateToProps, { componentOneAction })(Component1);
