import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
// Match and Miss handle url validation

//import stylesheet (loaded by webpack)
import './css/style.css';

//import components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// router component
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

//render components with react dom
render(<Root/>, document.querySelector('#main'));
