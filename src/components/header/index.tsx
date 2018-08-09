// Vendors
import * as React from 'react';

// Components
import Spinner from '../spinner';
import Card from '../card';

// CSS
import './style.css';

type IState = {
	isSearchActive: boolean,
	isSearching: boolean,
	results: any[]
}

export default class Header extends React.Component<{}, IState> {
	private textInput: HTMLInputElement;
	private h: any;

	constructor(props:any) {
		super(props);

		this.state = {
			isSearchActive: false,
			isSearching: false,
			results: []
		};
	}

	public searchMusic (searchString:string) {
		if (searchString === '') {
			this.setState({ isSearching:false, results:[]})
		}
		const formattedString = searchString.replace(/ /g, '+');
		const url = 'https://itunes.apple.com/search?entity=musicArtist&entity=album&';
		const params = `term=${formattedString}&limit=3`;

		fetch(url + params, { method: 'get'}).then(r => r.json())
		.then(data => {
			const formattedData = data.results.map((item:any) => {
				const { collectionName, artistName, releaseDate } = item;
				return {
					collectionName,
					artistName,
					releaseDate,
					photo: item.artworkUrl100,
				}
			});
			this.setState({ results: formattedData, isSearching:false})
		})
		.catch(e => console.log("Fail"));

	}

	public debounce(func: () => void, wait = 50) {
		this.setState({isSearching: true});
		return () => {
			clearTimeout(this.h);
			this.h = setTimeout(() => func(), wait);
		}
	}

	public render () {
		const { isSearchActive, isSearching, results } = this.state;

		return (
			<div className="header">
				<div className="header__nav">
					<div className="header__title">
						gormandizer
					</div>
					<div className={`header__search`}>
						<div
							className={`header__search-button header__search-button--${isSearchActive ? 'active' : 'disabled'}`}
							onClick={() => {
								this.setState({ isSearchActive: !isSearchActive })
								this.textInput.focus();
							}}
						>
							search
						</div>
					</div>
					<div className={`search search--${isSearchActive ? 'active' : 'disabled'}`}>
						<input
							type="text"
							className="search__input"
							onChange={(e) => {
								const change = e.target.value;
								const debounced = this.debounce(() => this.searchMusic(change), 1000);
								debounced();

							}}
							ref={thisInput => (this.textInput = thisInput as HTMLInputElement)}
						/>
					</div>
				</div>
				<div className="header__results">
					{isSearching ? (
						<Spinner />
					) : (
						results.map(result => {
							return (
								<div key={result.artistName} className="header__result">
									<Card data={result} />
								</div>
							);
						})
					)}
				</div>
			</div>
		);
	}
}
