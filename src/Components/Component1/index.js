import React, { useEffect } from "react";

// Redux and Actions
import { connect } from "react-redux";
import { componentOneAction } from "../../Actions/componentOneActions";

// CSS
import "./Component1.scss";

const Component1 = props => {
	useEffect(() => {
		props.componentOneAction();
	}, []);
	return (
		<div>
			<h1>Hello from {props.text}</h1>
		</div>
	);
};

const mapStateToProps = state => ({
	text: state.componentOne.text
});

export default connect(mapStateToProps, { componentOneAction })(Component1);
