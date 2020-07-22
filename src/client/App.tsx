import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}


	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Hello World</h1>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {}

export default App;
