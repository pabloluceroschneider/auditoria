import React from 'react';

const CustomFragment = props => {

  return (
    <>
      <div className="App">
        <header className="App-header">
            {props.children}
        </header>
      </div>
    </>
  );
}

export default CustomFragment;
