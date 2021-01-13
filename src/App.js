import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Notes from "./Components/Notes/Notes";
import { NameProvider } from "./Components/State/NameContext";
function App() {
	return (
		<NameProvider>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/notes" exact component={Notes} />
					</Switch>
				</Router>
			</div>
		</NameProvider>
	);
}

export default App;
