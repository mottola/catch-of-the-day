import React from 'react';
// import components
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// This is our main 'parent component' for React apps
// props is how we supply data to components
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

// export component for use
export default App;
