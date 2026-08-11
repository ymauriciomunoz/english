import type { A1LessonContent } from "./a1-course";

export const b2Course: A1LessonContent[] = [
  {
    objective: "Presentar ideas inspiradoras y explicar por qué generan cambios.",
    vocabulary: ["inspire", "initiative", "impact", "vision", "turn into"],
    example: "Her vision inspired the community to turn a simple idea into a national initiative.",
    activities: [
      { prompt: "Explica el impacto", phrase: "The campaign inspired thousands of people ___ action.", options: ["to take", "taking to", "for taken"], answer: "to take", tip: "Inspire someone to + verbo expresa motivación." },
      { prompt: "Completa la transformación", phrase: "They turned a local project ___ a global movement.", options: ["into", "in", "towards of"], answer: "into", tip: "Turn something into significa transformar en." }
    ]
  },
  {
    objective: "Adaptar mensajes para comunicarte con públicos diferentes.",
    vocabulary: ["audience", "tone", "clarify", "misunderstanding", "adapt"],
    example: "Adapting your tone to the audience can prevent misunderstandings.",
    activities: [
      { prompt: "Elige la estrategia", phrase: "The speaker ___ her language for a younger audience.", options: ["adapted", "misunderstood to", "clarified of"], answer: "adapted", tip: "Adapt significa ajustar según el contexto." },
      { prompt: "Aclara el mensaje", phrase: "Let me ___ what I meant by that expression.", options: ["clarify", "tone", "audience"], answer: "clarify", tip: "Clarify significa aclarar." }
    ]
  },
  {
    objective: "Analizar propuestas para ciudades más habitables y sostenibles.",
    vocabulary: ["urban", "infrastructure", "accessible", "pedestrian", "efficient"],
    example: "Efficient public transport would make urban areas more accessible.",
    activities: [
      { prompt: "Evalúa la propuesta", phrase: "More pedestrian areas would ___ traffic in the city centre.", options: ["reduce", "reduction", "be reducing of"], answer: "reduce", tip: "Would + verbo describe un resultado hipotético." },
      { prompt: "Completa el concepto", phrase: "Public spaces should be ___ to people with disabilities.", options: ["accessible", "efficiently access", "urbanised"], answer: "accessible", tip: "Accessible significa accesible." }
    ]
  },
  {
    objective: "Inferir significados, intenciones y emociones no expresadas directamente.",
    vocabulary: ["imply", "suggest", "apparently", "underlying", "interpret"],
    example: "The character never says she is worried, but her behaviour strongly implies it.",
    activities: [
      { prompt: "Identifica la inferencia", phrase: "His silence ___ that he disagreed with the decision.", options: ["suggested", "explained directly", "was saying"], answer: "suggested", tip: "Suggest puede indicar algo de manera indirecta." },
      { prompt: "Expresa una apariencia", phrase: "___, everything was fine, but there was an underlying tension.", options: ["Apparently", "Directly", "Despite of"], answer: "Apparently", tip: "Apparently significa aparentemente." }
    ]
  },
  {
    objective: "Evaluar dilemas y justificar decisiones con criterios claros.",
    vocabulary: ["dilemma", "consequence", "ethical", "justify", "weigh up"],
    example: "Before deciding, we need to weigh up the ethical consequences of each option.",
    activities: [
      { prompt: "Describe el análisis", phrase: "The committee must ___ the risks against the benefits.", options: ["weigh up", "justify to", "consequence"], answer: "weigh up", tip: "Weigh up significa valorar cuidadosamente." },
      { prompt: "Justifica la decisión", phrase: "The choice is difficult to ___ because it affects vulnerable people.", options: ["justify", "ethical", "weighing"], answer: "justify", tip: "Justify significa justificar con razones." }
    ]
  },
  {
    objective: "Interpretar obras de arte y expresar reacciones matizadas.",
    vocabulary: ["striking", "portray", "interpretation", "evoke", "perspective"],
    example: "The striking image evokes a sense of isolation and offers a new perspective on city life.",
    activities: [
      { prompt: "Describe el efecto", phrase: "The painting ___ memories of childhood for many viewers.", options: ["evokes", "portrays to", "interpreting"], answer: "evokes", tip: "Evoke significa provocar un recuerdo o emoción." },
      { prompt: "Explica la representación", phrase: "The sculpture ___ the relationship between humans and nature.", options: ["portrays", "strikes", "perspective of"], answer: "portrays", tip: "Portray significa representar." }
    ]
  },
  {
    objective: "Analizar cómo los medios construyen y enmarcan mensajes.",
    vocabulary: ["bias", "coverage", "frame", "claim", "misleading"],
    example: "The two channels framed the same event differently, revealing a clear bias.",
    activities: [
      { prompt: "Identifica el sesgo", phrase: "The report only presented one side, making its ___ obvious.", options: ["bias", "coverage all", "claiming"], answer: "bias", tip: "Bias significa sesgo." },
      { prompt: "Evalúa la afirmación", phrase: "The headline was ___ because it exaggerated the study's findings.", options: ["misleading", "framed fairly", "coverage"], answer: "misleading", tip: "Misleading significa engañoso." }
    ]
  },
  {
    objective: "Proponer cambios de hábitos sostenibles y valorar su alcance.",
    vocabulary: ["footprint", "consumption", "long-term", "feasible", "commitment"],
    example: "Reducing consumption is feasible, but it requires long-term commitment.",
    activities: [
      { prompt: "Evalúa la viabilidad", phrase: "The proposal is ambitious but entirely ___.", options: ["feasible", "footprint", "committedly"], answer: "feasible", tip: "Feasible significa viable." },
      { prompt: "Completa el resultado", phrase: "Buying less can significantly reduce our environmental ___.", options: ["footprint", "commitment", "long-term"], answer: "footprint", tip: "Environmental footprint es huella ambiental." }
    ]
  },
  {
    objective: "Analizar estilos de liderazgo y su efecto en los equipos.",
    vocabulary: ["empower", "delegate", "accountable", "lead by example", "constructive"],
    example: "Effective leaders empower others while remaining accountable for the final result.",
    activities: [
      { prompt: "Describe el liderazgo", phrase: "A good manager ___ responsibility instead of controlling every detail.", options: ["delegates", "empowers to", "accounts"], answer: "delegates", tip: "Delegate significa asignar responsabilidad." },
      { prompt: "Elige el principio", phrase: "She arrives prepared and treats everyone fairly; she ___.", options: ["leads by example", "constructs leadership", "is delegated by"], answer: "leads by example", tip: "Lead by example es guiar con las propias acciones." }
    ]
  },
  {
    objective: "Explorar futuros hipotéticos mediante la ciencia ficción.",
    vocabulary: ["speculate", "advanced", "artificial", "colonise", "possibility"],
    example: "If humans colonised another planet, they would face entirely new challenges.",
    activities: [
      { prompt: "Construye la hipótesis", phrase: "If robots became conscious, society ___ to redefine responsibility.", options: ["would have", "will had", "has"], answer: "would have", tip: "Second conditional: if + pasado, would + verbo." },
      { prompt: "Expresa una posibilidad", phrase: "The novel ___ about life in a fully automated society.", options: ["speculates", "possibility", "is advanced of"], answer: "speculates", tip: "Speculate about significa plantear posibilidades." }
    ]
  },
  {
    objective: "Construir y defender una postura con evidencia y concesiones.",
    vocabulary: ["maintain", "acknowledge", "evidence", "counterpoint", "convincing"],
    example: "Although I acknowledge the risks, I maintain that the benefits outweigh them.",
    activities: [
      { prompt: "Reconoce la otra postura", phrase: "I ___ that the plan may be expensive; nevertheless, it is necessary.", options: ["acknowledge", "maintain of", "counterpoint"], answer: "acknowledge", tip: "Acknowledge permite reconocer un punto válido." },
      { prompt: "Sostén tu argumento", phrase: "The data provides ___ evidence in favour of the proposal.", options: ["convincing", "convincedly", "maintaining"], answer: "convincing", tip: "Convincing significa convincente." }
    ]
  },
  {
    objective: "Comprender humor, dobles sentidos y expectativas inesperadas.",
    vocabulary: ["punchline", "sarcasm", "wordplay", "ironic", "unexpected"],
    example: "The joke relies on wordplay, so its punchline is difficult to translate.",
    activities: [
      { prompt: "Identifica el recurso", phrase: "The humour comes from two meanings of the same word. It is ___.", options: ["wordplay", "sarcasm only", "a punch"], answer: "wordplay", tip: "Wordplay es juego de palabras." },
      { prompt: "Reconoce la ironía", phrase: "Saying 'Lovely weather!' during a storm is ___.", options: ["ironic", "unexpectedly literal", "punchline"], answer: "ironic", tip: "Irony expresa algo contrario a la situación." }
    ]
  },
  {
    objective: "Explicar cambios sociales y analizar múltiples causas.",
    vocabulary: ["shift", "inequality", "awareness", "factor", "bring about"],
    example: "Greater awareness, together with policy reform, brought about a significant social shift.",
    activities: [
      { prompt: "Expresa el cambio", phrase: "Digital technology has ___ a major shift in how people work.", options: ["brought about", "shifted about", "been factor"], answer: "brought about", tip: "Bring about significa provocar un cambio." },
      { prompt: "Presenta una causa", phrase: "Economic pressure was one important ___ behind the protest.", options: ["factor", "awareness", "inequality to"], answer: "factor", tip: "Factor se usa para una causa entre varias." }
    ]
  },
  {
    objective: "Interpretar mitos y leyendas desde una perspectiva cultural.",
    vocabulary: ["legend", "symbolise", "oral tradition", "ancestor", "moral"],
    example: "Passed down through oral tradition, the legend symbolises courage and loyalty.",
    activities: [
      { prompt: "Explica el símbolo", phrase: "In the legend, the river ___ the passage of time.", options: ["symbolises", "ancestors", "morally"], answer: "symbolises", tip: "Symbolise significa representar una idea." },
      { prompt: "Describe la transmisión", phrase: "The story was passed down through ___.", options: ["oral tradition", "a moral symbol", "ancestorly"], answer: "oral tradition", tip: "Oral tradition transmite historias de forma hablada." }
    ]
  },
  {
    objective: "Evaluar argumentos, detectar supuestos y formular preguntas críticas.",
    vocabulary: ["assumption", "valid", "questionable", "evidence", "logical"],
    example: "The conclusion seems logical, but it depends on a questionable assumption.",
    activities: [
      { prompt: "Detecta el problema", phrase: "The argument assumes everyone has internet access; this ___ is false.", options: ["assumption", "validity", "logic evidence"], answer: "assumption", tip: "Assumption es una idea aceptada sin demostrar." },
      { prompt: "Evalúa la evidencia", phrase: "One personal story is not enough to make the conclusion ___.", options: ["valid", "logical assumption", "questionably"], answer: "valid", tip: "Valid significa válido o bien fundamentado." }
    ]
  },
  {
    objective: "Diseñar y presentar exposiciones claras, persuasivas y memorables.",
    vocabulary: ["hook", "outline", "transition", "visual aid", "takeaway"],
    example: "Begin with a strong hook, use clear transitions and finish with one memorable takeaway.",
    activities: [
      { prompt: "Captura la atención", phrase: "A surprising question can be an effective opening ___.", options: ["hook", "outline", "transitioning"], answer: "hook", tip: "Hook es un recurso inicial que atrae atención." },
      { prompt: "Cierra la presentación", phrase: "The main ___ is that small actions can create major change.", options: ["takeaway", "visual aid", "outline to"], answer: "takeaway", tip: "Takeaway es la idea principal que el público recordará." }
    ]
  },
  {
    objective: "Crear textos narrativos con voz, ritmo y detalles sensoriales.",
    vocabulary: ["vivid", "narrator", "pace", "foreshadow", "sensory detail"],
    example: "The narrator slows the pace and uses vivid sensory details to build tension.",
    activities: [
      { prompt: "Crea una imagen clara", phrase: "The writer uses ___ descriptions of the crowded market.", options: ["vivid", "paced", "narrating"], answer: "vivid", tip: "Vivid describe algo claro e intenso." },
      { prompt: "Anticipa el futuro", phrase: "The strange footprint early in the story ___ the final discovery.", options: ["foreshadows", "paces", "narrator"], answer: "foreshadows", tip: "Foreshadow significa anticipar un evento posterior." }
    ]
  },
  {
    objective: "Preparar entrevistas y convertir respuestas en un reportaje coherente.",
    vocabulary: ["follow-up", "quote", "angle", "feature", "first-hand"],
    example: "A thoughtful follow-up question can produce a powerful first-hand quote.",
    activities: [
      { prompt: "Profundiza la respuesta", phrase: "The journalist asked a ___ question to get more detail.", options: ["follow-up", "first-handed", "angle of"], answer: "follow-up", tip: "Follow-up question amplía una respuesta anterior." },
      { prompt: "Elige la evidencia", phrase: "The report included a direct ___ from the scientist.", options: ["quote", "feature angle", "first handly"], answer: "quote", tip: "Quote es una cita textual." }
    ]
  },
  {
    objective: "Estructurar una charla breve que conecte una historia con una gran idea.",
    vocabulary: ["central idea", "rehearse", "engage", "insight", "call to action"],
    example: "A personal story can engage the audience before you reveal the central idea.",
    activities: [
      { prompt: "Involucra al público", phrase: "The opening story immediately ___ the audience.", options: ["engages", "rehearses", "insights"], answer: "engages", tip: "Engage significa captar e involucrar." },
      { prompt: "Termina con acción", phrase: "The speaker ended with a clear ___ to action.", options: ["call", "central", "rehearsal"], answer: "call", tip: "Call to action invita al público a actuar." }
    ]
  },
  {
    objective: "Integrar las habilidades B2 en una comunicación fluida y argumentada.",
    vocabulary: ["evaluate", "elaborate", "persuade", "nuance", "spontaneously"],
    example: "At B2, I can evaluate ideas, elaborate on my views and respond spontaneously.",
    activities: [
      { prompt: "Matiza tu postura", phrase: "I broadly agree; ___, the proposal needs stronger safeguards.", options: ["nevertheless", "because of", "unless of"], answer: "nevertheless", tip: "Nevertheless introduce un contraste formal." },
      { prompt: "Elige el cierre B2", phrase: "¿Qué frase demuestra comunicación B2?", options: ["I can defend a viewpoint while acknowledging other perspectives.", "I defend viewpoint no others.", "I was perspective tomorrow."], answer: "I can defend a viewpoint while acknowledging other perspectives.", tip: "B2 permite argumentar y reconocer matices." }
    ]
  }
];
