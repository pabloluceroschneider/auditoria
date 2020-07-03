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
				next: 104
			},
			title: 'Game Over',
			body: {
				type:'image',
				content:'prision.jpg'
			}
		},
		{
			page: {
				back: 103,
				current: 104,
				next: 105
			},
			title: 'Pero, ¿Si podrías volver el tiempo?',
			body: {
				type:'image',
				content:'matrix-roja-azul.jpg'
			}
		},
		{
			page: {
				back: 104,
				current: 105
			},
			title: '¿Qué harías?',
			body: {
				type:'decision',
				content: {
					opA: {
						title: 'Los firmo feliz',
						go: 105
					},
					opB: {
						title: 'Doy un paso al costado.',
						go: 106
					}
				}
			}
		},
		{
			page: {
				back: 105,
				current: 106,
				next: 107
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
				back: 106,
				current: 107,
				next: 108
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
				back: 107,
				current: 108,
				next: 109
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
				back: 108,
				current: 109,
				next: 110
			},
			title: 'Decidiste dar una paso al costado',
			body: {
				type:'image',
				content:'amenazas-internas.jpg'

			}
		},
		{
			page: {
				back: 109,
				current: 110,
				next: 111
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
				back: 110,
				current: 111,
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
				back: 200,
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
				next: 205
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
				back: 203,
				current: 204,
				next: 205
			},
			title: 'Debes firmar.',
			body: {
				type:'string',
				content:'Tu jefe te quita tu libertad de decisión'
			}
		},
		{
			page: {
				back: 204,
				current: 205
			},
			title: 'Tienes que firmas esos informes.',
			body: {
				type:'decision',
				content: {
					opA: {
						title: 'Los firmo, por obligación',
						go: 206
					},
					opB: {
						title: 'Doy un paso al costado.',
						go: 205
					}
				}
			}
		},
		{
			page: {
				current: 206,
				next: 207
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
				back: 206,
				current: 207,
				next: 208
			},
			title: 'Firmaste informes ilicítos.',
			body: {
				type:'string',
				content:'Hasta que de un día para el otro, la verdad comienza a salir a luz... '
			}
		},
		{
			page: {
				back: 207,
				current: 208,
				next: 209
			},
			title: 'Firmaste informes ilicítos.',
			body: {
				type:'image',
				content:'enron.jpeg'
			}
		},
		{
			page: {
				back: 208,
				current: 209,
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
			title: 'Siguiente Juego: El dilema del Tranvía',
			body: {
				type:'image',
				content:'tranvia1.jpg'
			}
		},
		{
			page: {
				back: 11,
				current: 12,
				next: 13
			},
			title: 'El dilema del Tranvía',
			body: {
				type:'lista',
				content:[
					'¿Vale más una vida que cinco vidas?',
					'¿Somos capaces de decidir quien vive y quien no?',
					'Nuestras decisiones impactan en la vida de los demás',
					'¿Existe decision correcta?'
				]
			}
		},
		{
			page: {
				back: 12,
				current: 13,
				next: 14
			},
			title: 'El dilema del Tranvía',
			body: {
				type:'image',
				content:'dilema-significado.jpg'
			}
		},
		{
			page: {
				back: 13,
				current: 14,
				next: 15
			},
			title: 'El dilema del Tranvía',
			body: {
				type:'string',
				content:'Como muestra la imagen, una persona debe decidir si el tren '+
						'toma la vía que mata a una persona, o la vía que mata a cinco personas.' 
			}
		},
		{
			page: {
				back: 14,
				current: 15,
			},
			title: '¿Qué harías?',
			body: {
				type:'decision',
				content: {
					opA: {
						title: 'Vía con una persona.',
						go: 300
					},
					opB: {
						title: 'Vía con cinco personas.',
						go: 400
					}
				}
			}
		},
		{
			page: {
				back: 14,
				current: 300,
				next: 16
			},
			title: 'Vía con una persona.',
			body: {
				type:'string',
				content:'La mayoría de las personas eligen pensando en el daño menor.'
			}
		},
		{
			page: {
				back: 14,
				current: 400,
				next: 16
			},
			title: 'Vía con cinco personas.',
			body: {
				type:'lista',
				content: [
					'¿La otra persona es un familiar?',
					'¿La otra persona es más importante?'
				]
			}
		},
		{
			page: {
				back: 14,
				current: 16,
				next: 17
			},
			title: 'Otra imagen ilustrativa',
			body: {
				type:'image',
				content: 'tranvia-meme.jpeg'
			}
		},
		{
			page: {
				back: 16,
				current: 17,
				next: 18
			},
			title: 'Auditando Éticas',
			body: {
				type:'string',
				content: 'Continuaremos analizando la relación entre la ética '+
						'y la auditoría.'
			}
		},
		{
			page: {
				back: 16,
				current: 17,
				next: 18
			},
			title: 'Auditando Éticas',
			body: {
				type:'string',
				content: 'Continuaremos analizando la relación entre la ética '+
						'y la auditoría.'
			}
		},
		{
			page: {
				back: 17,
				current: 18,
				next: 19
			},
			title: 'Alegoría de la caverna',
			body: {
				type:'image',
				content: 'plato-allegory.jpg'
			}
		},
		{
			page: {
				back: 17,
				current: 18,
				next: 19
			},
			title: 'Alegoría de la caverna',
			body: {
				type:'image',
				content: 'plato-allegory.jpg'
			}
		},
		{
			page: {
				back: 18,
				current: 19,
				next: 20
			},
			title: 'Explicación personal',
			body: {
				type:'video',
				content: 'https://www.youtube.com/embed/vLjHBEQLjX0'
			},
		},
		{
			page: {
				back: 19,
				current: 20,
				next: 21
			},
			title: 'Entonces, a tener en cuenta: ',
			body: {
				type:'image',
				content: 'etica_moral_diablo_angel.jpg'						
			}
		},
		{
			page: {
				back: 20,
				current: 21,
				next: 22
			},
			title: 'Algunos de los Principios Éticos: ',
			body: {
				type:'lista',
				content: ['Principio del beneficio auditado',
					      'Principio de calidad',
						  'Principio de capacidad',
						  'Principio de cautela',
						  'Principio de criterio propio',
						  'Principio de legalidad'
					]  				
			}
		},
		{
			page: {
				back: 21,
				current: 22,
				next: 23
			},
			title: 'Conclusiones...',
			body: {
				type:'string',
				content: 'El auditor siempre debe emplear sus'+
				' conocimientos para el cumplimiento de la ley, y su trato en'+
				' lo laboral y personal debe ejercerse sin discriminación'+
				' alguna y bajo el marco de la libre competencia. El auditor'+
				' deberá evitar y aprovechar los datos obtenidos de la'+
				' auditoría para entrar en competencia desleal con'+
				' profesionales relacionados con ella de otras áreas del'+
				' conocimiento. Debe apoyar a la empresa a cumplimentar las'+
				' normas, procedimientos y controles de las auditorias de'+
				' sistemas de información.'
			}
		},
		{
			page: {
				back: 22,
				current: 23,
				next: -1
			},
			title: '',
			body: {
				type:'string',
				content: 'Y consejo: Siempre rodearse de buenas personas :)'
			}
		}
	]
};
