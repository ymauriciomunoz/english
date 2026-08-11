import type { A1LessonContent } from "./a1-course";

export const b1Course: A1LessonContent[] = [
  {
    objective: "Narrar experiencias personales conectando hechos y emociones.",
    vocabulary: ["at first", "eventually", "realised", "felt", "memorable"],
    example: "At first I felt nervous, but eventually I realised everyone was friendly.",
    activities: [
      { prompt: "Conecta el cambio", phrase: "At first the task seemed difficult, but ___ I understood it.", options: ["eventually", "unless", "despite"], answer: "eventually", tip: "Eventually significa finalmente, después de un proceso." },
      { prompt: "Elige la narración natural", phrase: "¿Cómo cuentas un aprendizaje pasado?", options: ["I realised that mistakes helped me learn.", "I realise yesterday mistakes.", "I was realise to learn."], answer: "I realised that mistakes helped me learn.", tip: "Usa pasado simple para hechos terminados." }
    ]
  },
  {
    objective: "Comprender y resumir los puntos principales de una noticia.",
    vocabulary: ["headline", "report", "according to", "event", "source"],
    example: "According to the report, the event attracted more than a thousand visitors.",
    activities: [
      { prompt: "Presenta la fuente", phrase: "___ the local newspaper, the park will reopen soon.", options: ["According to", "Because to", "Although of"], answer: "According to", tip: "According to introduce la fuente de información." },
      { prompt: "Identifica un buen resumen", phrase: "La noticia explica un nuevo programa de reciclaje.", options: ["The report describes a new recycling programme.", "The headline recycling yesterday new.", "The source was programme."], answer: "The report describes a new recycling programme.", tip: "Un resumen expresa la idea central con claridad." }
    ]
  },
  {
    objective: "Expresar metas, ambiciones y condiciones para alcanzarlas.",
    vocabulary: ["goal", "achieve", "would like to", "if", "determined"],
    example: "I'd like to study abroad if I have the opportunity.",
    activities: [
      { prompt: "Completa la condición", phrase: "If I practise every day, I ___ improve.", options: ["will", "would have", "am"], answer: "will", tip: "First conditional: if + presente, will + verbo." },
      { prompt: "Expresa una ambición", phrase: "My main ___ is to become a wildlife photographer.", options: ["goal", "condition", "report"], answer: "goal", tip: "Goal significa meta." }
    ]
  },
  {
    objective: "Explicar problemas ambientales y proponer soluciones.",
    vocabulary: ["pollution", "waste", "reduce", "renewable", "protect"],
    example: "We can reduce plastic waste by reusing bottles and bags.",
    activities: [
      { prompt: "Propón una solución", phrase: "We can save energy by ___ the lights off.", options: ["turning", "turn", "to turned"], answer: "turning", tip: "Después de by usamos verbo en -ing." },
      { prompt: "Completa la consecuencia", phrase: "If we protect forests, more animals ___ survive.", options: ["will", "would have", "had"], answer: "will", tip: "Usa will para una consecuencia futura posible." }
    ]
  },
  {
    objective: "Describir películas y analizar personajes y tramas.",
    vocabulary: ["plot", "character", "setting", "performance", "ending"],
    example: "The plot was exciting, although the ending was quite predictable.",
    activities: [
      { prompt: "Contrasta tu opinión", phrase: "The acting was excellent, ___ the story was too slow.", options: ["although", "because", "therefore"], answer: "although", tip: "Although introduce un contraste." },
      { prompt: "Identifica el elemento", phrase: "The time and place of a story are its ___.", options: ["setting", "performance", "character"], answer: "setting", tip: "Setting es el lugar y época de una historia." }
    ]
  },
  {
    objective: "Describir dificultades, causas y soluciones prácticas.",
    vocabulary: ["issue", "cause", "solution", "deal with", "prevent"],
    example: "To deal with the issue, the team changed its schedule.",
    activities: [
      { prompt: "Presenta una finalidad", phrase: "They added more buses ___ reduce traffic.", options: ["to", "for", "so because"], answer: "to", tip: "To + verbo expresa finalidad." },
      { prompt: "Elige la solución", phrase: "The best way to ___ this problem is to communicate clearly.", options: ["deal with", "cause", "prevented by"], answer: "deal with", tip: "Deal with significa afrontar o gestionar." }
    ]
  },
  {
    objective: "Resolver situaciones de viaje y pedir ayuda con precisión.",
    vocabulary: ["delay", "reservation", "accommodation", "available", "refund"],
    example: "Our flight was delayed, so we asked whether another one was available.",
    activities: [
      { prompt: "Explica el problema", phrase: "I'd like a ___ because the tour was cancelled.", options: ["refund", "reservation", "delay"], answer: "refund", tip: "Refund significa devolución de dinero." },
      { prompt: "Pregunta indirectamente", phrase: "Could you tell me ___ any rooms are available?", options: ["whether", "what do", "that are"], answer: "whether", tip: "Whether introduce una pregunta indirecta de sí o no." }
    ]
  },
  {
    objective: "Analizar hábitos y explicar cambios para una vida saludable.",
    vocabulary: ["balanced", "routine", "avoid", "improve", "used to"],
    example: "I used to skip breakfast, but now I follow a more balanced routine.",
    activities: [
      { prompt: "Habla de un hábito pasado", phrase: "I ___ stay up late, but now I sleep earlier.", options: ["used to", "use for", "was use"], answer: "used to", tip: "Used to describe hábitos del pasado que cambiaron." },
      { prompt: "Elige el hábito saludable", phrase: "To improve your sleep, you should ___ screens before bed.", options: ["avoid", "increase", "depend"], answer: "avoid", tip: "Avoid significa evitar." }
    ]
  },
  {
    objective: "Evaluar beneficios y riesgos del uso de internet.",
    vocabulary: ["privacy", "reliable", "share", "account", "online"],
    example: "Before sharing information online, check whether the source is reliable.",
    activities: [
      { prompt: "Elige una recomendación", phrase: "You should use a strong password to protect your ___.", options: ["account", "headline", "screening"], answer: "account", tip: "Account significa cuenta." },
      { prompt: "Evalúa una fuente", phrase: "A ___ website provides accurate and trustworthy information.", options: ["reliable", "private password", "sharing"], answer: "reliable", tip: "Reliable significa fiable." }
    ]
  },
  {
    objective: "Comparar costumbres y comunicarte con respeto intercultural.",
    vocabulary: ["custom", "tradition", "respectful", "similar", "different"],
    example: "Although our traditions are different, both celebrations bring families together.",
    activities: [
      { prompt: "Encuentra la similitud", phrase: "Both traditions are ___ because they include music and dancing.", options: ["similar", "respectfully", "custom"], answer: "similar", tip: "Similar expresa características compartidas." },
      { prompt: "Contrasta culturas", phrase: "___ the meals are different, people celebrate for the same reason.", options: ["Although", "Therefore", "Because of"], answer: "Although", tip: "Although significa aunque." }
    ]
  },
  {
    objective: "Expresar y justificar opiniones de forma organizada.",
    vocabulary: ["in my view", "reason", "however", "for example", "conclusion"],
    example: "In my view, school trips are valuable because students learn through experience.",
    activities: [
      { prompt: "Introduce tu postura", phrase: "___, public transport should be more affordable.", options: ["In my view", "For resulting", "At conclusion"], answer: "In my view", tip: "In my view introduce una opinión." },
      { prompt: "Apoya la idea", phrase: "Outdoor activities build confidence. ___, team sports teach cooperation.", options: ["For example", "However of", "Unless"], answer: "For example", tip: "For example añade evidencia concreta." }
    ]
  },
  {
    objective: "Analizar opciones y explicar decisiones importantes.",
    vocabulary: ["choice", "advantage", "disadvantage", "consider", "decision"],
    example: "After considering the advantages and disadvantages, we chose the train.",
    activities: [
      { prompt: "Describe el proceso", phrase: "Before making a decision, you should ___ every option.", options: ["consider", "choice", "decisive of"], answer: "consider", tip: "Consider significa evaluar con atención." },
      { prompt: "Explica el resultado", phrase: "The main ___ of cycling is that it produces no pollution.", options: ["advantage", "disadvantage", "choice to"], answer: "advantage", tip: "Advantage significa ventaja." }
    ]
  },
  {
    objective: "Crear suspense y narrar un misterio con tiempos pasados.",
    vocabulary: ["clue", "suspect", "disappear", "had left", "mysterious"],
    example: "By the time the detective arrived, the suspect had already left.",
    activities: [
      { prompt: "Ordena los hechos", phrase: "When we opened the door, someone ___ the note.", options: ["had removed", "has remove", "was removing before"], answer: "had removed", tip: "Past perfect muestra la acción anterior a otro hecho pasado." },
      { prompt: "Elige la palabra de misterio", phrase: "The broken key was the first important ___.", options: ["clue", "setting", "headline"], answer: "clue", tip: "Clue significa pista." }
    ]
  },
  {
    objective: "Explicar procesos científicos y relaciones de causa y efecto.",
    vocabulary: ["experiment", "result", "measure", "increase", "due to"],
    example: "The temperature increased due to the chemical reaction.",
    activities: [
      { prompt: "Expresa una causa", phrase: "The plant grew faster ___ the extra sunlight.", options: ["due to", "although", "unless"], answer: "due to", tip: "Due to va seguido de un sustantivo." },
      { prompt: "Describe el proceso", phrase: "During the experiment, researchers ___ the temperature every hour.", options: ["measured", "measurement", "were measure"], answer: "measured", tip: "Measured es el pasado de measure." }
    ]
  },
  {
    objective: "Reflexionar sobre estrategias para aprender mejor.",
    vocabulary: ["review", "focus", "strategy", "make progress", "effective"],
    example: "Reviewing vocabulary regularly is more effective than studying it once.",
    activities: [
      { prompt: "Elige la estrategia", phrase: "I make better progress when I ___ my notes every week.", options: ["review", "avoid", "measure"], answer: "review", tip: "Review significa repasar." },
      { prompt: "Compara métodos", phrase: "Short daily practice is ___ effective than one long monthly session.", options: ["more", "most", "much of"], answer: "more", tip: "More + adjetivo + than crea una comparación." }
    ]
  },
  {
    objective: "Colaborar, asignar responsabilidades y resolver desacuerdos.",
    vocabulary: ["contribute", "responsibility", "suggest", "agree", "compromise"],
    example: "Everyone contributed an idea, and we reached a compromise.",
    activities: [
      { prompt: "Haz una sugerencia", phrase: "Why don't we ___ the tasks equally?", options: ["divide", "divided", "division"], answer: "divide", tip: "Why don't we + verbo sirve para sugerir." },
      { prompt: "Resuelve el desacuerdo", phrase: "Neither idea was perfect, so the team found a ___.", options: ["compromise", "responsibility", "contribution to"], answer: "compromise", tip: "Compromise es un acuerdo con concesiones." }
    ]
  },
  {
    objective: "Describir inventos y explicar su impacto en la vida cotidiana.",
    vocabulary: ["invented", "device", "development", "impact", "enable"],
    example: "The smartphone has changed how people communicate and access information.",
    activities: [
      { prompt: "Usa la voz pasiva", phrase: "The first telephone ___ by Alexander Graham Bell.", options: ["was invented", "invented was", "has invent"], answer: "was invented", tip: "Was + participio forma la pasiva en pasado." },
      { prompt: "Explica el impacto", phrase: "This device ___ people to work from almost anywhere.", options: ["enables", "impacts to", "developing"], answer: "enables", tip: "Enable someone to significa permitir que alguien haga algo." }
    ]
  },
  {
    objective: "Participar en debates breves con acuerdo y desacuerdo respetuoso.",
    vocabulary: ["I see your point", "I agree", "I'm not convinced", "evidence", "counterargument"],
    example: "I see your point; however, the evidence suggests a different conclusion.",
    activities: [
      { prompt: "Discrepa con respeto", phrase: "___, but I think there is another solution.", options: ["I see your point", "You are wrong totally", "No convincing"], answer: "I see your point", tip: "Reconocer la idea ajena suaviza el desacuerdo." },
      { prompt: "Apoya tu argumento", phrase: "The strongest ___ is the result of the recent survey.", options: ["evidence", "agree", "pointing"], answer: "evidence", tip: "Evidence significa evidencia o pruebas." }
    ]
  },
  {
    objective: "Planear y presentar un episodio de podcast claro y atractivo.",
    vocabulary: ["episode", "audience", "introduce", "segment", "wrap up"],
    example: "In today's episode, we'll explore three ways to build a healthy routine.",
    activities: [
      { prompt: "Abre el episodio", phrase: "In today's ___, we're talking about future technology.", options: ["episode", "audience", "wrap"], answer: "episode", tip: "Episode es cada entrega de un podcast." },
      { prompt: "Cierra con claridad", phrase: "To ___, let's review the three main ideas.", options: ["wrap up", "introduce", "segmenting"], answer: "wrap up", tip: "To wrap up significa para terminar o resumir." }
    ]
  },
  {
    objective: "Integrar las habilidades B1 en una misión de comunicación independiente.",
    vocabulary: ["summarise", "explain", "support", "respond", "confidently"],
    example: "I can explain my opinion, support it with examples and respond confidently.",
    activities: [
      { prompt: "Construye un argumento", phrase: "In my view, volunteering is valuable ___ it builds useful skills.", options: ["because", "despite", "unless"], answer: "because", tip: "Because conecta una opinión con su razón." },
      { prompt: "Elige el cierre B1", phrase: "¿Qué frase resume una comunicación independiente?", options: ["I can describe experiences and explain my ideas clearly.", "I ideas clear describing can.", "I was explain tomorrow."], answer: "I can describe experiences and explain my ideas clearly.", tip: "Una frase B1 conecta varias capacidades con precisión." }
    ]
  }
];
