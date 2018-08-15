
// Vendors
import * as React from 'react';

import { withGoogleMap, withScriptjs } from 'react-google-maps';
import MapRenderer  from './maprenderer';


export default class Route extends React.Component<any, any> {

constructor(props:any) {
	super(props);

}

render () {
	const { origin, destination } = this.props;

	const Map = withScriptjs(withGoogleMap((props) =>
		<MapRenderer origin={origin} destination={destination} />
	));

	return (
		<React.Fragment>
			{origin && destination ? (
				<Map
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCHoslqFGMAt5Lz1DL4NjjEEVBONNVqgJo"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			) : null}

		</React.Fragment>
	)
}
}
