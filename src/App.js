import React from "react";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Store";

// Components
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Component1 from "./Components/Component1/Component1";
import Component2 from "./Components/Component2/Component2";
import NotFound from "./Components/NotFound";

// CSS
import "./App.scss";

function App() {
	return (
		<Provider store={Store}>
			<Router basename="/">
				<div className="App">
					<Header />
					<main>
						<Switch>
							<Route exact path="/" component={Component1} />
							<Route exact path="/component2" component={Component2} />

							<Route component={NotFound} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
