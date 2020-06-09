import React, { useState } from 'react';
import Context from './Context';
import Paginator from './Paginator';
import Decision from './Decision';
import Datos from '../data';

const Gestor = () => {
	const [ data ] = useState(Datos());
	const [ item, setItem ] = useState(data[0]);

	const handlePag = (page) => {
		if (page === -1) {
			document.location.reload();
		}
		let selected = data.find((i) => i.page.current === page);
		setItem(selected);
	};

	return (
		<Context>
			<h1>{item.title}</h1>

			<div className="container.content" >
				<p className="item.content">{item.content}</p>

				{item.decision ? (
					<Decision
						optionA={{ item: item.decision.opA, handle: () => handlePag(item.decision.opA.go) }}
						optionB={{ item: item.decision.opB, handle: () => handlePag(item.decision.opB.go) }}
					/>
				) : null}
			</div>

			<Paginator
				backProps={{ title: 'Anterior', has: item.page.back, handle: () => handlePag(item.page.back) }}
				nextProps={{ title: 'Siguiente', has: item.page.next, handle: () => handlePag(item.page.next) }}
			/>
		</Context>
	);
};

export default Gestor;