
import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Routes
import Dashboard from './routes/dashboard';
import FourOhFour from './routes/fourohfour';
import Layout from './routes/layout';

export const App: React.StatelessComponent<{}> = () => {
  return (
		<BrowserRouter>
			<React.Fragment>
				<Switch>
					<Layout exact={true} path="/" component={Dashboard} />
					<Layout component={FourOhFour} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
  );
}

export default App;
