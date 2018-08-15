// Vendors
import * as React from 'react';

// CSS
import './style.css';

// Components
import AddressInput from '../addressInput';


type IState = {
	route?: object,
}

export default class Nav extends React.Component<{}, IState> {

	constructor(props:any) {
		super(props);

		this.state = {
			route: undefined
		};
	}

	public render () {

		return (
			<div className="routemapper">
				from:
				<AddressInput />
				to:
				<AddressInput />
			</div>
		);
	}
}
