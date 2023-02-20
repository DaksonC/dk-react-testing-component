import * as React from 'react';
import Button from '../lib';

const App = () => (
  <div className="content">
    <h1 className="title">Testing React Component</h1>
    <Button onClick={() => alert('button')}>My Library Button</Button>
  </div>
);

export default App;
