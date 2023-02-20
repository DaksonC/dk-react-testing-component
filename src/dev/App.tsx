import * as React from 'react';
import { Button } from '../stories';

const App = () => (
  <div className="content">
    <h1 className="title">Testing React Component</h1>
    <Button
      onClick={() => alert('Deu bommm! 😁')}
      label={'Testing'}
      primary
    />
  </div>
);

export default App;
