import React from 'react';

const Option = (props) => {
	const { handlePag, title, go } = props;

	return (
        <div className="option" onClick={() => handlePag(go)}>
			<div>{title}</div>
		</div>
	);
};

export default Option;