// Importa las dependencias necesarias
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./components/search";
import Planes from "./components/planes";
import Servicios from "./components/servicios";



function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Search />} />
				<Route path="/servicios" element={<Servicios />} />
				<Route path="/buscar-usuario" element={<Search />} />
			</Routes>
		</Router>
	);
}

export default App;

