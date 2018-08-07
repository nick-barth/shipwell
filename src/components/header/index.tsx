import * as React from 'react';

import './style.css';

const Header: React.SFC<{}> = (props) => {
	return (
		<div className="header">
			<img className="header__image" alt="title" src="https://www.challengermode.com/Content/img/cm/logo.svg" />
		</div>
	);
}

export default Header;
