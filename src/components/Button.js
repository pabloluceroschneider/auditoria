import React from 'react';

const Button = (props) => {
    const { handle, title } = props;
	return (
		<div className="App-link" onClick={() => handle()}>
			{title}
		</div>
	);
};

export default Button;
