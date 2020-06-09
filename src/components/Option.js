import React from 'react';

const Option = (props) => {
	const { handle, item } = props;
	const { title, content } = item;
	return (
        <div className="option" onClick={() => handle()}>
			<div>{title}</div>
			<div>{content}</div>
		</div>
	);
};

export default Option;