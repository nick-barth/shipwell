// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import { libraryActions } from '../../store/library/';

// Types
import { ILibrary } from '../../types';

// CSS
import './style.css';

type Props = {
	data: ILibrary,
	library?: ILibrary[],
	addToLibrary(object:any): void
};

const Card = (props:Props) => {
	const { data, addToLibrary, library } = props;
	const isAddDisabled = library && !library.find((i:any) => i.id === data.id);
	const dateString = new Date(data.releaseDate).toLocaleDateString();

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
					Released: {dateString}
				</div>
			</div>
			<div className="card__add">
				{isAddDisabled ? (
					<img className="card__add-icon" src="/icons/plus-button.svg" onClick={() => addToLibrary(data)} />
				) : null}
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
  library: state.library.library
});

export default connect(mapStateToProps, {
  addToLibrary: libraryActions.addToLibrary,
})(Card);
