import React from 'react';

const Option = (props) => {
	const { handle, item } = props;
	const { title, body } = item;
	return (
        <div className="option" onClick={() => handle()}>
			<div>{title}</div>
		</div>
	);
};

export default Option;