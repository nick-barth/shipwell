// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Components
import Nav from '../../components/nav';
import Library from '../../components/library';

class Dashboard extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

	}

	public render () {
		return (
			<React.Fragment>
				<Nav />
				<Library library={this.props.user} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Dashboard);
