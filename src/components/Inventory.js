import React from 'react';
import AddFishForm from './AddFishForm';

// create component
class Inventory extends React.Component {
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    )
  }
}

export default Inventory;
