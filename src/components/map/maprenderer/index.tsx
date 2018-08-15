
// Vendors
import * as React from 'react';

import { GoogleMap, DirectionsRenderer } from 'react-google-maps';

interface IProps {
	origin?: any,
	destination?: any
};

export default class MapRenderer extends React.Component<IProps, any> {

	constructor(props:any) {
		super(props);

		this.state = {
			directions: null
		};

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
		const { directions } = this.state;
		const { origin } = this.props;

		return (
			<React.Fragment>
				{origin && directions ? (
					<GoogleMap
						defaultZoom={11}
						defaultCenter={new google.maps.LatLng(origin.lat, origin.lan)}
					>
						<DirectionsRenderer directions={directions} />
					</GoogleMap>
				) : null}
			</React.Fragment>
		)
	}
}
