// Vendors
import * as React from 'react';

// CSS
import './style.css';

// Components
import AddressInput from '../addressInput';


const Route = (props:any) => {
	const { onValidate } = props;

	return (
			<div className="routemapper">
				from:
				<AddressInput type={'origin'} onValidate={onValidate} />
				to:
				<AddressInput type={'destination'} onValidate={onValidate} />
			</div>
		);
}

export default Route;
