import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Example } from "../shared/example"

window.addEventListener('load', () => {
    ReactDOM.hydrate(<Example />, document.getElementById('react_root'));
});