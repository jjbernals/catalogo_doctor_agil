import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./components/utils/footer";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Footer />
	</React.StrictMode>,
document.getElementById('root')
);