import * as React from 'react';
import { Button } from '../components';
const App = () => (React.createElement("div", { className: "content" },
    React.createElement("h1", { className: "title" }, "Testing React Component"),
    React.createElement(Button, { onClick: () => alert('Deu bommm! 😁'), label: 'Testing', primary: true })));
export default App;
//# sourceMappingURL=App.js.map