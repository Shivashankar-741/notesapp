import Home from "./Components/Home/Home";
import { NameProvider } from "./Components/State/NameContext";
function App() {
	return (
		<NameProvider>
			<div className="App">
				<Home />
			</div>
		</NameProvider>
	);
}

export default App;
