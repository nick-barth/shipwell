
import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Routes
import Create from './routes/create';
import Lobby from './routes/lobby';
import Dashboard from './routes/dashboard';
import Tournament from './routes/tournament';

export const App: React.StatelessComponent<{}> = () => {
  return (
		<BrowserRouter>
			<React.Fragment>
				This is the header
				<Switch>
					<Route exact={true} path="/" component={Dashboard} />
					<Route exact={true} path="/tournament" component={Tournament} />
					<Route exact={true} path="/lobby" component={Lobby} />
					<Route exact={true} path="/create" component={Create} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
  );
}

export default App;
