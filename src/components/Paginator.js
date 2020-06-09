import React from 'react';
import Button from './Button';

const Paginator = (props) => {
    const { backProps, nextProps } = props;
	return (
        <div className="two-columns">
            { backProps.has ? <Button {...backProps}/> : null }
            { nextProps.has ? <Button {...nextProps}/> : null }          
        </div>
	);
};

export default Paginator;
