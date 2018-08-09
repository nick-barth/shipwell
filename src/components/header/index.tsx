// Vendors
import * as React from 'react';

// Components
import Search from '../search';

// CSS
import './style.css';

type IState = {
	isSearchActive: boolean
	isSearching: boolean
}

export default class Header extends React.Component<{}, IState> {

	constructor(props:any) {
		super(props);

		this.state = {
			isSearchActive: false,
			isSearching: false
		};
	}

	public searchMusic (searchString:string) {
		const formattedString = searchString.replace(/ /g, '+');
		const url = 'https://itunes.apple.com/search?';
		const params = `term=${formattedString}&limit=3`;

		fetch(url + params, { method: 'get'})
		.then((res) => {
			console.log(res);
			return res
		})
		.catch((ex) => {
			return 0
		});

	}

	public render () {
		const { isSearchActive } = this.state;

		return (
			<div className="header">
				<div className="header__title">
					gormandizer
				</div>
				<div className={`header__search`}>
					<div className={`header__search-button header__search-button--${isSearchActive ? 'active' : 'disabled'}`} onClick={() => this.setState({ isSearchActive: !isSearchActive })}>
						search
					</div>
				</div>
				<Search active={isSearchActive} handleChange={(search) => this.searchMusic(search)} />
				<div className="header__results" />
			</div>
		);
	}
}
