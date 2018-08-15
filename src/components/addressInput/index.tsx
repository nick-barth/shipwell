// Vendors
import * as React from 'react';

export default class AddressInput extends React.Component<any, any> {
	private h: any;

	constructor(props:any) {
		super(props);

		this.state = {
			address: '',
			isValidating: false,
			isValid: false
		};

	}

	public debounce(func: () => void, wait = 50) {
		return () => {
			clearTimeout(this.h);
			this.h = setTimeout(() => func(), wait);
		}
	}

	public validateAddress() {
		this.setState({isValidating: true});
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
			console.log(data);
			data.error ? this.setState({isError: true}) : this.setState({isValid: true})
		}).catch((error) => {
			this.setState({isError: true});
		})

	}

	public render () {
		const { address, isError } = this.state;

		return (
			<div className="addressInput">
				<input
					type="text"
					className="nav__search-bar__input"
					value={address}
					onChange={(e) => {
						this.setState({address: e.target.value});
						const debounced = this.debounce(() => this.validateAddress(), 1000);
						debounced();
					}}
				/>
				{isError ? <div> error u guy </div> : <div> no this is fine m8 </div>}
			</div>
		);
	}
}
