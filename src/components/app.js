import { h } from "preact";
import { Router } from "preact-router";
import { RecoilRoot } from "recoil";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
	<RecoilRoot>
		<div>
			<Router>
				<Home path="/" />
			</Router>
		</div>
	</RecoilRoot>
);

export default App;
