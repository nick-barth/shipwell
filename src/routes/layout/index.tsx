// Vendor
import * as React from 'react';
import { Route } from "react-router-dom";

// Components
import Header from '../../components/header';

// CSS
import './style.css';

interface ILayoutProps {
  component: any
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<ILayoutProps> = (props) => {
	const { component, path, exact } = props;

	return (
		<React.Fragment>
			<div className="layout">
				<Header />
				<Route exact={exact} path={path} component={component} />
			</div>
		</React.Fragment>
	)
}

export default Layout;
