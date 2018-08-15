// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import { userActions } from '../../store/user';

// Components
import Map from '../../components/map';
import Route from '../../components/route';

class Dashboard extends React.Component<any, any> {

	constructor(props:any) {
		super(props);

		this.state = {
			origin: null,
			destination: null
		};

	}

	componentDidMount () {
		fetch('https://dev-api.shipwell.com/v2/auth/me/', {
			method: 'get',
			headers: new Headers({
				'Authorization': 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b',
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache'
			})
		}).then((resp:any) => {
			return resp.json()
		}).then((data) => {
			this.props.addUserInfo(data);
		}).catch((error) => {
			console.log('dude there is an', error);
		});
	}

	onValidatedAddress = (type:string, route:object) => {
		this.setState({[type]: route})

	}

	render () {
		const { origin, destination } = this.state;
		return (
			<React.Fragment>
				<h1> Shipwell </h1>
				<Route onValidate={this.onValidatedAddress} />
				<Map origin={origin} destination={destination} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({
  user: state.user.user
});

export default connect(mapStateToProps, {
  addUserInfo: userActions.addUserInfo
})(Dashboard);
