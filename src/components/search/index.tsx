// Vendors
import * as React from 'react';

// CSS
import './style.css';

interface IProps {
  handleChange: (search:string) => void,
  active?: boolean;
}

export default class Search extends React.Component<IProps> {
	private textInput: HTMLInputElement;
	private h: any;

	constructor(props: IProps) {
		super(props);

	}

	public debounce(func: () => void, wait = 50) {
		return () => {
			clearTimeout(this.h);
			this.h = setTimeout(() => func(), wait);
		}
	}

	public componentWillReceiveProps(nextProps:IProps) {
		console.log(nextProps);
		this.textInput.focus();
	}


	public render () {
		const { handleChange, active } = this.props;

		return (
			<React.Fragment>
				<div className={`search search--${active ? 'active' : 'disabled'}`}>
					<input
						type="text"
						className="search__input"
						onChange={(e) => {
							const change = e.target.value;
							const debounced = this.debounce(() => handleChange(change), 1000);
							debounced();
						}}
						ref={thisInput => (this.textInput = thisInput as HTMLInputElement)}
					/>
				</div>
			</React.Fragment>
		);
	}
}
