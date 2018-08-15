// Vendors
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import { userActions } from '../../store/user/';

// Types
import { ILibrary } from '../../types';

// CSS
import './style.css';

type Props = {
	data: ILibrary,
	library?: ILibrary[],
	addUserInfo(object:any): void
};

const Card = (props:Props) => {
	const { data, addUserInfo, library } = props;
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
				<img className={`card__add-icon ${!isAddDisabled ? 'card__add-icon--clicked' : null}`} src="/icons/plus-button.svg" onClick={() => addUserInfo(data)} />
			</div>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
  library: state.user.library
});

export default connect(mapStateToProps, {
  addUserInfo: userActions.addUserInfo,
})(Card);
