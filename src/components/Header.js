import React from 'react';

// create stateless functional component
// used when you only need to render something
  const Header = (props) => {
    // console.log(props)
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day          
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    )
  }

export default Header;
