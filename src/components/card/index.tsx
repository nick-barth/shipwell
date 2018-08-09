// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions 
import { libraryActions } from '../../store/library/';

// CSS
import './style.css';

type Props = {
	data: {
		artistName: string,
		collectionName: string,
		photo: string,
		releaseDate: string
	},
	addToLibrary(object:any): void
};

const Card = (props:Props) => {
	const { data, addToLibrary } = props;

	return (
		<div className="card">
			<img className="card__img" src={data.photo} alt={`${data.releaseDate}`} />
			<div className="card__info">
				<div className="card__title">
					Artist: {data.artistName}
				</div>
				<div className="card__title">
					Album: {data.collectionName}
				</div>
				<div className="card__title">
					Released: {data.releaseDate}
				</div>
			</div>
			<div className="card__add" onClick={() => addToLibrary(data)}>
				<img className="card__add-icon" src="/icons/plus-button.svg" />
			</div>
		</div>
	)
}

export default connect(null, {
  addToLibrary: libraryActions.addToLibrary,
})(Card);
