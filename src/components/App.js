import React from 'react';
// import components
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// This is our main 'parent component' for React apps
// props is how we supply data to components
class App extends React.Component {
  constructor() { // allows updates of state
    super(); // allows use of 'this'

    this.addFish = this.addFish.bind(this); // bind addFish method to our App component

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

addFish(fish) {
  // copy current state
  const fishes = {...this.state.fishes} // existing fishes state using 'spread'
  // update state
  const timestamp = Date.now();
  fishes[`fish-${timestamp}`] = fish;
  // set state
  this.setState({ fishes })

  /*  
      addFish gets state from AddFishForm by first
      being handed down as props all the way to the 
      AddFish form child. This is done by adding addFish
      to Inventory as props, and then to AddFishForm (from 
      within the Inventory component). The addFish method has
      to swim down (haha) to the component that needs it, and
      then swim back up to App with its state as payload.  

  */
}

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

// export component for use
export default App;
