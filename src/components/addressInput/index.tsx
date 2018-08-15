// Vendors
import * as React from 'react';

import './style.css';

import Spinner from '../spinner';

interface IProps {
	onValidate: (type: string, data:object) => void
	type: string
}

export default class AddressInput extends React.Component<IProps, any> {
	private h: any;

	constructor(props:any) {
		super(props);

		this.state = {
			address: '',
			isValidating: false,
			isValid: false
		};

	}

	debounce(func: () => void, wait = 50) {
		this.setState({isValidating: true});
		return () => {
			clearTimeout(this.h);
			this.h = setTimeout(() => func(), wait);
		}
	}

	validateAddress() {
		const { type, onValidate } = this.props;

		const body = {
				formatted_address: this.state.address
		};
		fetch('https://dev-api.shipwell.com/v2/locations/addresses/validate/', {
			method: 'post',
			body: JSON.stringify(body),
			headers: new Headers({
				'Authorization': 'Token 4c4547fe6ad68c57cbac0a8cfbfec35b',
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache'
			})
		}).then((resp:any) => {
			return resp.json()
		}).then((data) => {
			data.error ? this.setState({isError: true, isValidating: false}) : this.setState({isValid: true, isError:false, isValidating: false });
			const formattedData = {
				lat: data.geocoded_address.latitude,
				lon: data.geocoded_address.longitude,
				formatted_address: data.geocoded_address.formatted_address
			}
			onValidate(type, formattedData);
			this.setState({address: formattedData.formatted_address});
		}).catch((error) => {
			this.setState({isError: true, isValid: false});
		})

	}

	render () {
		const { address, isValid, isError, isValidating } = this.state;

		return (
			<div className="addressInput">
				<input
					type="text"
					className={`addressInput__input ${isValid ? 'addressInput__input--valid' : null} ${isError ? 'addressInput__input--error' : null}`}
					value={address}
					onChange={(e) => {
						this.setState({address: e.target.value, isValid: false});
						const debounced = this.debounce(() => this.validateAddress(), 1000);
						debounced();
					}}
				/>
				<div className="addressInput__spinner">
					{isValidating? <Spinner /> : null}
				</div>
			</div>
		);
	}
}
