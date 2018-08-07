
import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Routes
import Lobby from './routes/lobby';
import Dashboard from './routes/dashboard';
import Tournament from './routes/tournament';
import FourOhFour from './routes/fourohfour';
import Layout from './routes/layout';

export const App: React.StatelessComponent<{}> = () => {
  return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Layout exact={true} path="/" component={Dashboard} />
					<Layout exact={false} path="/tournament/:id" component={Tournament} />
					<Layout exact={true} path="/lobby" component={Lobby} />
					<Layout component={FourOhFour} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
  );
}

export default App;
