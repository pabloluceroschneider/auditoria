export default () => {
	return [
		{
			page: {
				current: 1,
				next: 8
			},
			title: 'Auditando tu Ética',
			body:{
				type:'string',
				content:'Introducción: Esta aplicación web fue desarrollada para '+
						'realizar la presentación final de la materia de una manera distinta.'+
						'.'
			}
		},
		{
			page: {
				current: 2,
				back: 1,
				next: 3
			},
			title: 'Auditar... ¿Qué es?',
			body: {
				type:'string',
				content:'“La auditoría es el procedimiento en el que una persona o entidad ajena a la organización u objeto auditado, recopila información y evidencia sobre el elemento auditado, con el objetivo de comparar el estado actual con los objetivos predefinidos. Con la auditoría podemos conseguir certificaciones que agregan valor a la empresa en términos de confianza con los clientes y con empresas, pero además, nos permite medir la forma en la que estamos trabajando.”'
			}
		},
		{
			page: {
				current: 3,
				back: 2,
				next: 4
			},
			title: '¿Y la ética?',
			body: {
				type:'string',
				content:'Según Platón, la ética está basada en la virtud del hábito de obrar bien, por la disposición constante del alma o las acciones conformes o la ley moral.'
			}
		},
		{
			page: {
				current: 4,
				back: 3,
				next: 5
			},
			title: '¿En qué momento estos pueden encontrarse?',
			body: {
				type:'string',
				content:'Como en todas las áreas de la vida, todos los días se deben tomar decisiones éticas.'
			}
		},
		{
			page: {
				current: 5,
				back: 4,
				next: 6
			},
			title: 'Situación:',
			body: {
				type:'string',
				content:'Estudiaremos la Deodontología del Auditor Interno a través de un juego.'
			}
		},
		{
			page: {
				current: 6,
				back: 5,
				next: 7
			},
			title: 'Situación:',
			body: {
				type:'string',
				content:''
			}
		},
		{
			page: {
				current: 7,
				next: 8
			},
			title: 'Video',
			body: {
				type:'video',
				content:'https://www.youtube.com/embed/i6pwCBrmN8Q'
			}
		},
		{
			page: {
				current: 8,
				next: -1
			},
			title: 'Decision',
			body: {
				type:'decision',
				content: {
					opA: {
						title: 'Ser Honesto',
						go: 4
					},
					opB: {
						title: 'Robar',
						go: 5
					}
				}
			}
		}

		// {
		// 	page: {
		// 		current: 3,
		// 		back: 2
		// 	},
		// 	title: 'Decision',
		// 	body: 'En esta etapa se le presenta una decision ética',
			// decision: {
			// 	opA: {
			// 		title: 'Ser Honesto',
			// 		go: 4
			// 	},
			// 	opB: {
			// 		title: 'Robar',
			// 		go: 5
			// 	}
		// 	}
		// },
		// {
		// 	page: {
		// 		current: 4,
		// 		back: 3
		// 	},
		// 	title: 'Sos honesto',
		// 	body: 'next blablbablabla'
		// },
		// {
		// 	page: {
		// 		current: 5,
		// 		back: 3,
		// 		next: -1
		// 	},
		// 	title: 'Usted ha robado',
		// 	body: 'next blablbablabla'
		// }
	];
};
