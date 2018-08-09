// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import * as libraryActions from '../../store/library/actions';

class Dashboard extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

	}

	public render () {
		return (
			<div />
		);
	}
}

const mapStateToProps = (state: any) => ({
  librarys: state.library.librarys
});

export default connect(mapStateToProps, {
  addTolibrary: libraryActions.addToLibrary,
})(Dashboard);
