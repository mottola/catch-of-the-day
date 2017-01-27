import React from 'react';
// import helper functions
import { getFunName } from '../helpers';

// class component
class StorePicker extends React.Component {
  // functional component
  goToStore(event) {
    event.preventDefault(); // prevent form submission and page refresh
    const storeId = this.storeInput.value;
    console.log(`going to /store/${storeId}`);
    // transition to /store/:storeId from /
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      // emmet form.store-selector then ctrl + e
     // getFunName() is one of the helper functions to randomize the store name
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    )
  }
}

// set context to surface router from parent
StorePicker.contextTypes = {
  router: React.PropTypes.object

}

// export component for use
export default StorePicker;
