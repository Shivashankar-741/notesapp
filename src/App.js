import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Notes from "./Components/Notes/Notes.jsx";
import { NameProvider } from "./Components/State/NameContext";
import { SetpopupProvider } from "./Components/State/SetpopupContext";
import { ThemeProvider } from "./Components/State/ThemeContext";
function App() {
	return (
		<ThemeProvider>
			<SetpopupProvider>
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
			</SetpopupProvider>
		</ThemeProvider>
	);
}

export default App;
