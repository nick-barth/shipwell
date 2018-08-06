// Vendors
import * as React from 'react';

import { connect } from 'react-redux';

import * as tournamentActions from '../../store/tournament/actions';


class Create extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

	}

	public render () {

		console.log(this.props);

		return (
			<div>
                wow 2
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
  tournaments: state.tournament.tournaments
});

export default connect(mapStateToProps, {
  addTournament: tournamentActions.addTournament,
})(Create);

