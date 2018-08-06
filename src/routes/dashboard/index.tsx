// Vendors
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Actions
import * as tournamentActions from '../../store/tournament/actions';

class Dashboard extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

		props.addTournament({
			name: 'Wu-Tang Challenge',
			size: 32
		});

	}
	public render () {
		const { tournaments } = this.props;

		return (
			<div>
				<div className="dashboard__tournaments">
					Active Tournaments:
					<div className="dashboard__active">
						{tournaments.length > 0 ? tournaments.map((tourny:any) => {
							return (
								<Link key={tourny.id} to={`/tournament/${tourny.id}`}>
									<div className="dashboard__tournament">
										<div className="dashboard__tournament__info">
											Name: {tourny.name}
										</div>
										<div className="dashboard__tournament__info">
											Size: {tourny.size}
										</div>
									</div>
								</Link>
							)
						}): 'No active tournaments'}
					</div>
				</div>
				<div className="dashboard__create">
					Create
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
  tournaments: state.tournament.tournaments
});

export default connect(mapStateToProps, {
  addTournament: tournamentActions.addTournament,
})(Dashboard);
