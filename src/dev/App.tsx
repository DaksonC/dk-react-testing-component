import * as React from 'react';
import { ComponentButton } from '../lib';

const App = () => (
  <div className="content">
    <h1 className="title">Testing React Component</h1>
    <ComponentButton onClick={() => alert('Deu bommm! 😁')}>
      My Library Button
    </ComponentButton>
  </div>
);

export default App;
