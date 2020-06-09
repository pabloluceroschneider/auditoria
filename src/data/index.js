export default () => {
	return [
		{
			page: {
				current: 1,
				next: 2
			},
			title: 'Auditando tu Ética',
			content:
				'Introducción: Esta aplicación web fue desarrollada para '+
				'realizar la presentación final de la materia de una manera distinta.'+
				'.'
		},
		{
			page: {
				current: 2,
				back: 1,
				next: 3
			},
			title: 'Auditar... ¿Qué es?',
			content: '“La auditoría es el procedimiento en el que una persona o entidad ajena a la organización u objeto auditado, recopila información y evidencia sobre el elemento auditado, con el objetivo de comparar el estado actual con los objetivos predefinidos. Con la auditoría podemos conseguir certificaciones que agregan valor a la empresa en términos de confianza con los clientes y con empresas, pero además, nos permite medir la forma en la que estamos trabajando.”'
		},
		{
			page: {
				current: 3,
				back: 2,
				next: 4
			},
			title: '¿Y la ética?',
			content: 'Según Platón, la ética está basada en la virtud del hábito de obrar bien, por la disposición constante del alma o las acciones conformes o la ley moral.'
		},
		{
			page: {
				current: 4,
				back: 3,
				next: 5
			},
			title: '¿En qué momento estos pueden encontrarse?',
			content: 'Como en todas las áreas de la vida, todos los días se deben tomar decisiones éticas.'
		},
		{
			page: {
				current: 5,
				back: 4,
				next: 6
			},
			title: 'Situación:',
			content: ''
		},
		{
			page: {
				current: 6,
				back: 5,
				next: 7
			},
			title: 'Situación:',
			content: ''
		},
		{
			page: {
				current: 7,
				next: -1
			},
			title: 'Fin.',
			content: ''
		},

		// {
		// 	page: {
		// 		current: 3,
		// 		back: 2
		// 	},
		// 	title: 'Decision',
		// 	content: 'En esta etapa se le presenta una decision ética',
		// 	decision: {
		// 		opA: {
		// 			title: 'Ser Honesto',
		// 			go: 4
		// 		},
		// 		opB: {
		// 			title: 'Robar',
		// 			go: 5
		// 		}
		// 	}
		// },
		// {
		// 	page: {
		// 		current: 4,
		// 		back: 3
		// 	},
		// 	title: 'Sos honesto',
		// 	content: 'next blablbablabla'
		// },
		// {
		// 	page: {
		// 		current: 5,
		// 		back: 3,
		// 		next: -1
		// 	},
		// 	title: 'Usted ha robado',
		// 	content: 'next blablbablabla'
		// }
	];
};
