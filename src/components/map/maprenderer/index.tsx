
// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

import { GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps';

interface IProps {
	origin?: any,
	destination?: any,
	user: {
		user: any,
		company: any
	}
};

class MapRenderer extends React.Component<IProps, any> {

	constructor(props:any) {
		super(props);

		this.state = {
			directions: null
		};

		console.log(props.user.company);

		const googleapiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
		const formattedAddress = props.user.company.billing_address.formatted_address.replace(/ /g, '+');
		const googkeApiKey = '&key=AIzaSyCHoslqFGMAt5Lz1DL4NjjEEVBONNVqgJo';

		fetch(googleapiUrl + formattedAddress + googkeApiKey, {
			method: 'get',
		}).then((resp:any) => {
			return resp.json()
		}).then((data) => {
			this.setState({ marker: {lat: data.results[0].geometry.location.lat, lon: data.results[0].geometry.location.lng}});
		}).catch((error) => {
			console.log('dude there is an', error);
		});

		const DirectionsService = new google.maps.DirectionsService();

		const { origin, destination } = this.props;

		if (origin && destination){
			DirectionsService.route({
				origin: new google.maps.LatLng(origin.lat, origin.lon),
				destination: new google.maps.LatLng(destination.lat, destination.lon),
				travelMode: google.maps.TravelMode.DRIVING,
			}, (result, status) => {
				if (status === google.maps.DirectionsStatus.OK) {
					this.setState({
						directions: result
					});
				} else {
					console.error(`error fetching directions ${result}`);
				}
			});
		}
	}

	render () {
		const { directions, marker } = this.state;
		const { origin, user } = this.props;


		return (
			<React.Fragment>
				{origin && directions ? (
					<GoogleMap
						defaultZoom={11}
						defaultCenter={new google.maps.LatLng(origin.lat, origin.lan)}
					>
						<DirectionsRenderer directions={directions} />
						<Marker
							position={{ lat: marker.lat, lng: marker.lon }}
						/>
					</GoogleMap>
				) : null}
			<div className="map__redux">
				Behold the amazing power of a redux store!
				<div>
					Username: {user.user.first_name} {user.user.last_name}
				</div>
				<div>
					Company: {user.company.name}
				</div>
			</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state: any) => ({
  user: state.user.user
});

export default connect(mapStateToProps, null)(MapRenderer);
