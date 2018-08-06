// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import * as tournamentActions from '../../store/tournament/actions';

class Tournament extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

		props.addTournament({
			name: 'Wu-Tang Challenge',
			size: 32
		});

	}
	public render () {
		const { id } = this.props.match.params;

		const tourny = this.props.tournaments.find((t:any) => t.id === parseInt(id, 10));

		return (
				<React.Fragment>
				{tourny ? (
					<React.Fragment>
						<div className="tournament__title">
							{tourny.name}
						</div>
						<div className="tourny__teams">
							{tourny.teams.length > 0 ? tourny.teams.map((team:any) => {
								return (
									<div key={team.id} className="tourny__team">
										{team.name}
									</div>
								)
							}): null}
						</div>
						<div className="Add Team">
							Add Team
						</div>
					</React.Fragment>
				) : 'Tourny does not exist'}
				</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({
  tournaments: state.tournament.tournaments
});

export default connect(mapStateToProps, {
  addTournament: tournamentActions.addTournament,
})(Tournament);
