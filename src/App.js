import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './scenes/home';
import CharacterContainer from './scenes/character';

const App = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/:id' component={CharacterContainer} />
		</Switch>
	</Router>
)

export default App;