// Vendors
import * as React from 'react';

// Components
import Card from '../card';

// Types
import { ILibrary } from '../../types';

interface IProps {
	library: object[]
}

interface IState {
	pagination: number
}

export default class Library extends React.Component<IProps, IState> {

	constructor(props:any) {
		super(props);

		this.state = {
			pagination: 3
		};

	}

	public render () {
		const { library } = this.props;
		const { pagination } = this.state;

		return (
            <div>
				<div className="library__title">
					Miles’s Melodious Music Miscellany
				</div>
				<div className="library__library">
					{library.length > 0 ? (
						library.slice(0, pagination).map((item:ILibrary) =>
						<div key={item.photo} className="library__card">
							<Card data={item} />
						</div>)
					) : 'Empty Library!'}
				</div>
				{library.length > pagination ? (
					<div className="library__loadmore" onClick={() => this.setState({pagination: pagination + 3})}>
						Load More
					</div>
				): null}
            </div>
		);
	}
}
