
import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Routes
import Lobby from './routes/lobby';
import Dashboard from './routes/dashboard';
import Tournament from './routes/tournament';

export const App: React.StatelessComponent<{}> = () => {
  return (
		<BrowserRouter>
			<React.Fragment>
				Challenger Mode
				<Switch>
					<Route exact={true} path="/" component={Dashboard} />
					<Route exact={false} path="/tournament/:id" component={Tournament} />
					<Route exact={true} path="/lobby" component={Lobby} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
  );
}

export default App;
