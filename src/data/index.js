export default () => {
	return [
		{
			page: {
				current: 1,
				next: 2
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
				back: 1,
				current: 2,
				next: 3
			},
			title: 'Auditar... ¿Qué es?',
			body: {
				type:'string',
				content:'“La auditoría es el procedimiento en el que una persona o entidad ajena '+
						'a la organización u objeto auditado, recopila información y evidencia sobre '+
						'el elemento auditado, con el objetivo de comparar el estado actual con los '+
						'objetivos predefinidos. Con la auditoría podemos conseguir certificaciones que '+
						'agregan valor a la empresa en términos de confianza con los clientes y con empresas, '+
						'pero además, nos permite medir la forma en la que estamos trabajando.”'
			}
		},
		{
			page: {
				back: 2,
				current: 3,
				next: 4
			},
			title: '¿Y la ética?',
			body: {
				type:'string',
				content:'Según Platón, la ética está basada en la virtud del hábito de obrar bien, '+
						'por la disposición constante del alma o las acciones conformes o la ley moral.'
			}
		},
		{
			page: {
				back: 3,
				current: 4,
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
				back: 4,
				current: 5,
				next: 6
			},
			title: '¿Conoces sobre el caso Enron?',
			body: {
				type:'string',
				content:'Enron Corporation fue una empresa energética. '+
						'El escándalo más resonante estuvo vinculado al contrato '+
						'que tenía Enron con la empresa de energía Maharashtra State Electricity Board.'
			}
		},
		{
			page: {
				back: 5,
				current: 6,
				next: 7
			},
			title: '¿Conoces sobre el caso Enron?',
			body: {
				type:'string',
				content:'En resumidas cuentas, mediante fraudes contables, estafaron a miles de personas.'			
			}
		},
		{
			page: {
				back: 6,
				current: 7,
				next: 8
			},
			title: 'Imaginate la situación:',
			body: {
				type:'string',
				content:'Sos el auditor interno de la empresa. El gerente viene a ofrecerte '+
						'un aumento de sueldo y un ascenso pero a cambio de firmar algunos informes.'
			}
		},
		{
			page: {
				back: 7,
				current: 8
			},
			title: '¿Qué harías?',
			body: {
				type:'decision',
				content: {
					opA: {
						title: 'Los firmo feliz',
						go: 100
					},
					opB: {
						title: 'Doy un paso al costado.',
						go: 200
					}
				}
			}
		},
		{
			page: {
				current: 100,
				next: 101
			},
			title: 'Firmaste informes ilicítos.',
			body: {
				type:'string',
				content:'Todo marcha bien los primeros dias. Incluso los meses pasan '+
						'y todo parece normal. No hay rastros ni evidencias del fraude que cometiste.'
			}
		},
		{
			page: {
				back: 100,
				current: 101,
				next: 102
			},
			title: 'Firmaste informes ilicítos.',
			body: {
				type:'string',
				content:'Hasta que de un día para el otro, la verdad comienza a salir a luz... '
			}
		},
		{
			page: {
				back: 101,
				current: 102,
				next: 103
			},
			title: 'Firmaste informes ilicítos.',
			body: {
				type:'image',
				content:'enron.jpeg'
			}
		},
		{
			page: {
				back: 102,
				current: 103,
				next: 9
			},
			title: 'Game Over',
			body: {
				type:'image',
				content:'prision.jpg'
			}
		},
		{
			page: {
				back: 8,
				current: 200,
				next: 201
			},
			title: 'Decidiste dar una paso al costado',
			body: {
				type:'string',
				content:'Le comunicaste al gerente tu decision de no participar.'+
						'Te quedas con la consciencia tranquila. Pero no por mucho...'
			}
		},
		{
			page: {
				back: 9,
				current: 201,
				next: 202
			},
			title: 'Decidiste dar una paso al costado',
			body: {
				type:'string',
				content:'Tu jefe, insiste en el caso. Quiere alguien de confianza '+
						'y de la empresa. No quieren alguien nuevo. "USTED y nadie mas que '+
						'USTED puede firmar estos papeles" Te dicen, con un tono más agresivo.'

			}
		},
		{
			page: {
				back: 201,
				current: 202,
				next: 203
			},
			title: 'Decidiste dar una paso al costado',
			body: {
				type:'string',
				content:'La situación ya tiene otro ambiente. '+
						'A pesar de todo, decidis seguir firme.'

			}
		},
		{
			page: {
				back: 202,
				current: 203,
				next: 204
			},
			title: 'Decidiste dar una paso al costado',
			body: {
				type:'image',
				content:'amenazas-internas.jpg'

			}
		},
		{
			page: {
				back: 203,
				current: 204,
				next: 9
			},
			title: 'Comienzan las amenazas',
			body: {
				type:'string',
				content:'La presión pasó a ser amenazas, que vinculan tu trabajo pero '+
						'también la integridad de tu familia. Tenes que firmar esos papeles...'
			}
		},
		{
			page: {
				back: 8,
				current: 9,
				next: 10
			},
			title: 'Pero entonces... ¿qué hacemos?',
			body: {
				type:'image',
				content:'quehacemo.jpg'
			}
		},
		{
			page: {
				back: 9,
				current: 10,
				next: 11
			},
			title: 'Entre la Espada y la Pared',
			body: {
				type:'string',
				content:'Consideramos que esta es una situación límite en la cual nadie quisiera estar jamás. '+
						'Es por ello que consideramos que las reflexiones sobre la ética y dilemas tales como el del Tranvía '+
						'nos exigen a ejercitar nuestro moral inconsciente, que al final de todo, es en este tipos '+
						'de situaciones en donde se ve verdaderamente qué tipo de personas somos.'
			}
		},
		{
			page: {
				back: 10,
				current: 11,
				next: 12
			},
			title: 'Conclusiones...',
			body: {
				type:'string',
				content: 'El auditor siempre debe emplear sus'+
				'conocimientos para el cumplimiento de la ley, y su trato en'+
				'lo laboral y personal debe ejercerse sin discriminación'+
				'alguna y bajo el marco de la libre competencia. El auditor'+
				'deberá evitar y aprovechar los datos obtenidos de la'+
				'auditoría para entrar en competencia desleal con'+
				'profesionales relacionados con ella de otras áreas del'+
				'conocimiento. Debe apoyar a la empresa a cumplimentar las'+
				'normas, procedimientos y controles de las auditorias de'+
				'sistemas de información.'
			}
		},
		{
			page: {
				back: 11,
				current: 12,
				next: -1
			},
			title: 'Conclusiones...',
			body: {
				type:'string',
				content: 'Muchas gracias por jugar!'
			}
		}
		// {
		// 	page: {
		// 		current: 9,
		// 		next: 10
		// 	},
		// 	title: '¿Video?',
		// 	body: {
		// 		type:'video',
		// 		content:'https://www.youtube.com/embed/i6pwCBrmN8Q'
		// 	}
		// },
	];
};
