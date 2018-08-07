import * as React from 'react';
import { Route } from "react-router-dom";

import Header from '../../components/header';

interface ILayoutProps {
  component: any
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<ILayoutProps> = (props) => {
	const { component, path, exact } = props;

	return (
		<React.Fragment>
			<Header />
			<Route exact={exact} path={path} component={component} />
		</React.Fragment>
	)
}

export default Layout;
