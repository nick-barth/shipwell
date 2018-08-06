// Vendors
import * as React from 'react';

import { connect } from 'react-redux';


class Create extends React.Component {

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
  state
});

export default connect(mapStateToProps, {})(Create);

