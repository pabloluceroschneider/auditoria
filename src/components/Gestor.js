import React, { useState } from 'react';
import CustomFragment from './CustomFragment';
import Paginator from './Paginator';
import Decision from './Decision';
import ContentRepository from './ContentRepository';
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

	const renderHeader = () => {
		return <h1>{item.title}</h1>
	};
	const renderBody = () => {
		if (item.body ){
			return <ContentRepository {...item.body} />
		}else{
			return <Decision
						optionA={{ item: item.decision.opA, handle: () => handlePag(item.decision.opA.go) }}
						optionB={{ item: item.decision.opB, handle: () => handlePag(item.decision.opB.go) }}
					/>
				}
	};
	const renderFooter = () => {
		return (
			<Paginator
				backProps={{ title: 'Anterior', has: item.page.back, handle: () => handlePag(item.page.back) }}
				nextProps={{ title: 'Siguiente', has: item.page.next, handle: () => handlePag(item.page.next) }}
			/>
		)
	};	

	return (
		<CustomFragment>
			<div className="container.content" >
				{renderHeader()}
				{renderBody()}
				{renderFooter()}
			</div>			
		</CustomFragment>
	);
};

export default Gestor;
