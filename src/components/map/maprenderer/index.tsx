
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
			center: {
				lat: 42.9642169,
				lan: -78.7725794
			},
			directions: 'null',
			origin: {
				lat: null,
				lon: null
			},
			destination: {
				lat: null,
				lon: null
			}
		};

	}

	public componentDidUpdate() {

		const { origin, destination } = this.props;

		const DirectionsService = new google.maps.DirectionsService();

		if (origin && origin.lat && destination && destination.lat){
			DirectionsService.route({
				origin: new google.maps.LatLng(origin.lat, origin.lon),
				destination: new google.maps.LatLng(destination.lat, destination.lon),
				travelMode: google.maps.TravelMode.DRIVING,
			}, (result, status) => {
				console.log(result);
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

	public render () {
		const { center, directions } = this.state;

		return (
			<GoogleMap
				defaultZoom={11}
				defaultCenter={new google.maps.LatLng(center.lat, center.lan)}
			>
				{directions && <DirectionsRenderer directions={this.state.directions} />}
			</GoogleMap>
		)
	}
}
