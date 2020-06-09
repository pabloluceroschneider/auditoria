import React from 'react';

const Context = props => {

  return (
    <div className="App">
      <header className="App-header">
          {props.children}
      </header>
    </div>
  );
}

export default Context;
