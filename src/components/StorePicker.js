import React from 'react';

// import helper functions
import { getFunName } from '../helpers';

//component
class StorePicker extends React.Component {
  render() {
    return (
      // emmet form.store-selector then ctrl + e
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store &rarr;</button>
      </form>
    )
  }
}

// export component for use
export default StorePicker;
