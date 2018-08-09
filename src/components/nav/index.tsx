// Vendors
import * as React from 'react';

// Components
import Spinner from '../spinner';
import Card from '../card';

// Types
import { ILibrary } from '../../types';

// CSS
import './style.css';


type IState = {
	isSearchActive: boolean,
	isSearching: boolean,
	results: any[],
	noResults: boolean
}

export default class Nav extends React.Component<{}, IState> {
	private textInput: HTMLInputElement;
	private h: any;

	constructor(props:any) {
		super(props);

		this.state = {
			isSearchActive: false,
			isSearching: false,
			results: [],
			noResults: false
		};
	}

	public searchMusic (searchString:string) {
		if (searchString === '') {
			this.setState({ isSearching:false, results:[], noResults: false})
			return;
		}
		const formattedString = searchString.replace(/ /g, '+');
		const url = 'https://itunes.apple.com/search?entity=musicArtist&entity=album&';
		const params = `term=${formattedString}&limit=3`;

		fetch(url + params, { method: 'get'}).then(r => r.json())
		.then(data => {
			if (!data.results[0]) {
				this.setState({noResults: true, results: [], isSearching:false});
				return;
			}
			const formattedData = data.results.map((item:any) => {
				const { collectionName, artistName, releaseDate, collectionId } = item;
				return {
					collectionName,
					artistName,
					releaseDate,
					photo: item.artworkUrl100,
					id: collectionId
				}
			});
			this.setState({ results: formattedData, isSearching:false})
		})
		.catch(e => console.log("Fail"));

	}

	public debounce(func: () => void, wait = 50) {
		this.setState({isSearching: true, noResults: false});
		return () => {
			clearTimeout(this.h);
			this.h = setTimeout(() => func(), wait);
		}
	}

	public render () {
		const { isSearchActive, isSearching, results, noResults } = this.state;

		return (
			<div className="nav">
				<div className="nav__nav">
					<div className="nav__title">
						gormandizer
					</div>
					<div className={`nav__search`}>
						<div
							className={`nav__search-button nav__search-button--${isSearchActive ? 'active' : 'disabled'}`}
							onClick={() => {
								this.setState({isSearchActive: !isSearchActive, isSearching: false, results: []})
								this.textInput.focus();
							}}
						>
							search
						</div>
					</div>
					<div className={`nav__search-bar nav__search-bar--${isSearchActive ? 'active' : 'disabled'}`}>
						<input
							type="text"
							className="nav__search-bar__input"
							onChange={(e) => {
								const change = e.target.value;
								const debounced = this.debounce(() => this.searchMusic(change), 1000);
								debounced();

							}}
							ref={thisInput => (this.textInput = thisInput as HTMLInputElement)}
						/>
					</div>
				</div>
				<div className="nav__results">
					{isSearching ? (
						<Spinner />
					) : (
						results.map((result:ILibrary) => {
							return (
								<div key={result.releaseDate + result.collectionName} className="nav__result">
									<Card data={result} />
								</div>
							);
						})
					)}
					{noResults && isSearchActive ? (
						<div className="nav__noresults">
							No results found... :(
						</div>
					): null}
				</div>
			</div>
		);
	}
}
