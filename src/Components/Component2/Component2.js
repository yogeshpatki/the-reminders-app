import React, { useEffect } from "react";

// Redux and Actions
import { connect } from "react-redux";
import { componentTwoAction } from "../../Actions/componentTwoActions";

// CSS
import "./Component2.scss";

const Component2 = props => {
	useEffect(() => {
		props.componentTwoAction();
	}, []);
	return (
		<div>
			<h1>Hello from {props.text}</h1>
		</div>
	);
};

const mapStateToProps = state => ({
	text: state.componentTwo.text
});

export default connect(mapStateToProps, { componentTwoAction })(Component2);
