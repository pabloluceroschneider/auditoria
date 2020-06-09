import React, { useState } from 'react';
import Context from './Context';
import Gestor from './Gestor';
import Button from './Button';
import logo from '../assets/simbolo0.png';

function App() {
	const [ home, setHome ] = useState(true);

	return home ? (
		<Context>
			<div className="firstPage">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<h3>AUDITANDO ÉTICAS</h3>
					<span>Universidad Tecnológica Nacional</span><br />
					<span>Facultad Regional Córdoba</span>
					<br />
					<span>Catedra Auditoría - </span>
					<span>Curso 5K3_</span>
					<br />
					<div className="caratula">
						<span>Profesores:</span>
						<br />
						<span className="integrante">Juan Carlos </span>
						<br />
						<span className="integrante">Daniela Oyola</span>
						<br />
						<span>Integrantes:</span>
						<br />
						<span className="integrante">Damian Fariña</span>
						<br />
						<span className="integrante">Pablo Lucero Schneider</span>
						<br />
					</div>
				</div>
			</div>
			<Button handle={setHome} title="Siguiente" />
		</Context>
	) : (
		<Gestor />
	);
}

export default App;
