// Vendors
import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
	public render () {

		return (
			<div>
				<div className="dashboard__tournaments">
					Active Tournaments:
				</div>
				<div className="dashboard__create">
					<Link to="/create">
						Create Tournament
					</Link>
				</div>

			</div>
		);
	}
}

