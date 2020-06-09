import React from 'react';
import Option from './Option';

const Decision = (props) => {
    const { optionA, optionB } = props;

	return (
        <div className="two-columns">
            <Option {...optionA} />
            <Option {...optionB} />
		</div>
	);
};

export default Decision;