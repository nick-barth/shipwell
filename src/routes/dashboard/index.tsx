// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

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
		return (
			<div>
				Dash
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
