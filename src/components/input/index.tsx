// Vendors
import * as React from 'react';

interface IProps {
	handleSubmit: (team: string) => void;
}

interface IState {
	inputString: string
}

export default class Input extends React.Component<IProps, IState> {

	constructor(props:any) {
		super(props);

		this.state = {
			inputString: ''
		};

	}

	public onChange(input:string):void {
		this.setState({
			inputString: input
		});
	}

	public onSubmit(e:any) {
		e.preventDefault();
		this.props.handleSubmit(this.state.inputString);
		this.setState({
			inputString: ''
		});
	}

	public render () {
		const { inputString } = this.state;

		return (
			<form className="input" onSubmit={(e) => this.onSubmit(e)}>
				<input className="input__input" value={inputString} onChange={(e) => this.onChange(e.target.value)} />
			</form>
		);
	}
}
