import type { A1LessonContent } from "./a1-course";

export const c1Course: A1LessonContent[] = [
  {
    objective: "Elegir palabras y estructuras según matices precisos de significado.",
    vocabulary: ["subtle", "connotation", "implication", "slightly", "arguably"],
    example: "The two terms are similar, yet their connotations are subtly different.",
    activities: [
      { prompt: "Elige el matiz preciso", phrase: "The policy was ___ effective, though far from transformative.", options: ["moderately", "absolutely", "barely fully"], answer: "moderately", tip: "Moderately expresa un grado medio y matizado." },
      { prompt: "Expresa cautela", phrase: "The novel is ___ the author's most ambitious work.", options: ["arguably", "argument", "without arguing"], answer: "arguably", tip: "Arguably presenta una afirmación debatible con cautela." }
    ]
  },
  {
    objective: "Persuadir combinando credibilidad, emoción y razonamiento.",
    vocabulary: ["compelling", "appeal", "credibility", "rationale", "urge"],
    example: "The speaker established credibility before presenting a compelling rationale for change.",
    activities: [
      { prompt: "Construye credibilidad", phrase: "Her extensive experience lends ___ to the proposal.", options: ["credibility", "appealing", "urge of"], answer: "credibility", tip: "Lend credibility to significa dar credibilidad a." },
      { prompt: "Formula un llamado", phrase: "We strongly ___ policymakers to reconsider the decision.", options: ["urge", "appeal of", "compel that"], answer: "urge", tip: "Urge someone to + verbo es instar a actuar." }
    ]
  },
  {
    objective: "Analizar voz, estilo y recursos en textos literarios.",
    vocabulary: ["narrative voice", "imagery", "motif", "ambiguity", "juxtaposition"],
    example: "The recurring motif of winter reinforces the narrator's emotional isolation.",
    activities: [
      { prompt: "Identifica el recurso", phrase: "Placing images of luxury beside poverty creates a powerful ___.", options: ["juxtaposition", "narrative voice", "ambiguously"], answer: "juxtaposition", tip: "Juxtaposition contrasta elementos colocándolos juntos." },
      { prompt: "Analiza la repetición", phrase: "The repeated image of an open door functions as a ___.", options: ["motif", "voice narration", "imagery only once"], answer: "motif", tip: "Motif es un elemento recurrente con significado." }
    ]
  },
  {
    objective: "Debatir retos globales conectando causas, impactos y responsabilidades.",
    vocabulary: ["interdependent", "far-reaching", "disparity", "collective", "tackle"],
    example: "Because economies are interdependent, local decisions can have far-reaching consequences.",
    activities: [
      { prompt: "Describe el alcance", phrase: "The crisis has ___ implications for food security worldwide.", options: ["far-reaching", "collectively", "interdependence of"], answer: "far-reaching", tip: "Far-reaching significa de amplio alcance." },
      { prompt: "Propón una respuesta", phrase: "No single country can ___ the problem without collective action.", options: ["tackle", "disparity", "reach far"], answer: "tackle", tip: "Tackle a problem significa abordarlo." }
    ]
  },
  {
    objective: "Evaluar dilemas éticos creados por nuevas tecnologías.",
    vocabulary: ["accountability", "consent", "unintended", "trade-off", "oversight"],
    example: "Innovation without adequate oversight may produce serious unintended consequences.",
    activities: [
      { prompt: "Señala la responsabilidad", phrase: "Clear ___ is essential when an automated system causes harm.", options: ["accountability", "consent to", "trade"], answer: "accountability", tip: "Accountability es obligación de responder por los resultados." },
      { prompt: "Describe el equilibrio", phrase: "There is an unavoidable ___ between convenience and privacy.", options: ["trade-off", "oversight", "unintentionally"], answer: "trade-off", tip: "Trade-off es un equilibrio con pérdida y ganancia." }
    ]
  },
  {
    objective: "Analizar lenguaje persuasivo, encuadres y omisiones en medios.",
    vocabulary: ["loaded language", "framing", "omission", "rhetoric", "scrutinise"],
    example: "Scrutinising the article reveals loaded language and several significant omissions.",
    activities: [
      { prompt: "Identifica la manipulación", phrase: "Calling the measure a 'disaster' before presenting evidence is ___.", options: ["loaded language", "neutral framing", "an omission only"], answer: "loaded language", tip: "Loaded language busca provocar una reacción emocional." },
      { prompt: "Examina críticamente", phrase: "Readers should ___ both the claims and what the report leaves out.", options: ["scrutinise", "rhetoric", "frame to"], answer: "scrutinise", tip: "Scrutinise significa examinar minuciosamente." }
    ]
  },
  {
    objective: "Construir narraciones complejas con tiempos, perspectivas y revelaciones.",
    vocabulary: ["flashback", "unreliable narrator", "revelation", "non-linear", "foreshadowing"],
    example: "The non-linear structure gradually reveals that the narrator has withheld crucial information.",
    activities: [
      { prompt: "Analiza la perspectiva", phrase: "We question the story because it is told by an ___ narrator.", options: ["unreliable", "non-linearly", "revealing"], answer: "unreliable", tip: "An unreliable narrator no ofrece una versión totalmente fiable." },
      { prompt: "Identifica el salto temporal", phrase: "The chapter returns to an event from ten years earlier through a ___.", options: ["flashback", "foreshadowing only", "revelation ahead"], answer: "flashback", tip: "Flashback presenta un evento anterior." }
    ]
  },
  {
    objective: "Debatir con precisión, refutar argumentos y reformular posiciones.",
    vocabulary: ["rebut", "premise", "substantiate", "concede", "fallacy"],
    example: "I concede the premise is plausible, but the evidence does not substantiate the conclusion.",
    activities: [
      { prompt: "Reconoce antes de refutar", phrase: "I ___ that costs may rise initially; however, the long-term savings are substantial.", options: ["concede", "rebut", "fallacy"], answer: "concede", tip: "Concede reconoce un punto antes de responder." },
      { prompt: "Exige evidencia", phrase: "The speaker failed to ___ the claim with reliable data.", options: ["substantiate", "premise", "rebuttal of"], answer: "substantiate", tip: "Substantiate significa respaldar con evidencia." }
    ]
  },
  {
    objective: "Gestionar diferencias culturales en comunicación y colaboración.",
    vocabulary: ["rapport", "implicit", "norm", "misinterpret", "culturally sensitive"],
    example: "Building rapport requires sensitivity to both explicit rules and implicit cultural norms.",
    activities: [
      { prompt: "Describe una regla no dicha", phrase: "In some contexts, punctuality is an ___ expectation rather than a stated rule.", options: ["implicit", "culturally", "rapport"], answer: "implicit", tip: "Implicit significa implícito, no expresado directamente." },
      { prompt: "Previene el conflicto", phrase: "A culturally ___ approach reduces the risk of misinterpretation.", options: ["sensitive", "normative rapport", "implicitness"], answer: "sensitive", tip: "Culturally sensitive demuestra respeto y conciencia cultural." }
    ]
  },
  {
    objective: "Desarrollar argumentos rigurosos con premisas y conclusiones coherentes.",
    vocabulary: ["coherent", "premise", "inference", "contradict", "robust"],
    example: "A robust argument requires credible premises and a logically coherent inference.",
    activities: [
      { prompt: "Evalúa la coherencia", phrase: "The conclusion ___ the evidence presented in the previous paragraph.", options: ["contradicts", "infers robust", "premises"], answer: "contradicts", tip: "Contradict significa ser incompatible con otra afirmación." },
      { prompt: "Describe un argumento sólido", phrase: "The study provides a ___ basis for the proposed reform.", options: ["robust", "coherently inference", "premised"], answer: "robust", tip: "Robust significa sólido y resistente a objeciones." }
    ]
  },
  {
    objective: "Usar colocaciones, modismos y expresiones naturales con precisión.",
    vocabulary: ["shed light on", "draw a conclusion", "raise concerns", "take for granted", "by and large"],
    example: "The findings shed light on an issue that society often takes for granted.",
    activities: [
      { prompt: "Elige la colocación", phrase: "The report ___ serious concerns about data privacy.", options: ["raises", "lifts", "makes up"], answer: "raises", tip: "Raise concerns es una colocación natural." },
      { prompt: "Expresa una visión general", phrase: "___, the policy has achieved its main objectives.", options: ["By and large", "Taken granted", "Drawing off"], answer: "By and large", tip: "By and large significa en términos generales." }
    ]
  },
  {
    objective: "Analizar cómo la estructura y la retórica construyen un discurso.",
    vocabulary: ["repetition", "parallelism", "rhetorical question", "cadence", "appeal"],
    example: "The speaker uses parallelism and repetition to create a memorable cadence.",
    activities: [
      { prompt: "Identifica la estructura", phrase: "'We will learn, we will grow, we will succeed' uses ___.", options: ["parallelism", "a rhetorical question", "an omission"], answer: "parallelism", tip: "Parallelism repite una estructura gramatical." },
      { prompt: "Analiza la pregunta", phrase: "'What kind of future do we want?' is a ___ question.", options: ["rhetorical", "cadenced", "repetitive answer"], answer: "rhetorical", tip: "Una rhetorical question busca provocar reflexión." }
    ]
  },
  {
    objective: "Ajustar voz, ritmo y registro para lograr un estilo propio.",
    vocabulary: ["concise", "flow", "register", "distinctive", "refine"],
    example: "Refining sentence rhythm can make an academic argument both concise and distinctive.",
    activities: [
      { prompt: "Mejora el estilo", phrase: "The editor removed repetition to make the paragraph more ___.", options: ["concise", "distinctively long", "registered"], answer: "concise", tip: "Concise significa breve y claro." },
      { prompt: "Ajusta al contexto", phrase: "A formal report requires a different ___ from a personal blog.", options: ["register", "flowing", "refinement to"], answer: "register", tip: "Register es el nivel de formalidad del lenguaje." }
    ]
  },
  {
    objective: "Explicar conceptos abstractos mediante definiciones, analogías y ejemplos.",
    vocabulary: ["notion", "framework", "abstract", "analogy", "conceptualise"],
    example: "An analogy can make an abstract notion easier to conceptualise.",
    activities: [
      { prompt: "Aclara la abstracción", phrase: "The lecturer used an ___ to compare memory to a library.", options: ["analogy", "framework abstract", "notionally"], answer: "analogy", tip: "Analogy explica una idea mediante una comparación." },
      { prompt: "Presenta el marco", phrase: "This theoretical ___ helps us analyse how groups make decisions.", options: ["framework", "notion of abstractly", "conceptual"], answer: "framework", tip: "Framework es un marco conceptual." }
    ]
  },
  {
    objective: "Interpretar ironía, actitud y tono a partir del contexto.",
    vocabulary: ["deadpan", "mocking", "understatement", "sceptical", "tongue-in-cheek"],
    example: "His deadpan delivery makes the apparently serious comment sound tongue-in-cheek.",
    activities: [
      { prompt: "Identifica la minimización", phrase: "Calling a disastrous storm 'a bit of rain' is an ___.", options: ["understatement", "sceptical tone", "deadpan fact"], answer: "understatement", tip: "Understatement presenta algo como menos importante de lo que es." },
      { prompt: "Describe el humor", phrase: "The article's advice is deliberately exaggerated and clearly ___.", options: ["tongue-in-cheek", "mocking to literal", "scepticism"], answer: "tongue-in-cheek", tip: "Tongue-in-cheek indica humor no totalmente serio." }
    ]
  },
  {
    objective: "Investigar, sintetizar fuentes y presentar hallazgos con cautela.",
    vocabulary: ["findings", "methodology", "corroborate", "limitation", "indicate"],
    example: "The findings indicate a trend, although the small sample is a significant limitation.",
    activities: [
      { prompt: "Expresa cautela científica", phrase: "The results ___ a link but do not prove causation.", options: ["indicate", "corroboration", "methodologically"], answer: "indicate", tip: "Indicate sugiere evidencia sin afirmar certeza total." },
      { prompt: "Confirma con otra fuente", phrase: "Researchers used independent data to ___ the original findings.", options: ["corroborate", "limit", "methodology of"], answer: "corroborate", tip: "Corroborate significa confirmar con evidencia adicional." }
    ]
  },
  {
    objective: "Negociar intereses, hacer concesiones y alcanzar acuerdos sostenibles.",
    vocabulary: ["leverage", "concession", "common ground", "non-negotiable", "mutually beneficial"],
    example: "Once both sides identified common ground, they reached a mutually beneficial agreement.",
    activities: [
      { prompt: "Busca coincidencias", phrase: "Before discussing differences, let's establish some ___.", options: ["common ground", "leverage only", "concessional"], answer: "common ground", tip: "Common ground son intereses o ideas compartidos." },
      { prompt: "Describe el acuerdo", phrase: "The final arrangement was ___ beneficial.", options: ["mutually", "non-negotiably", "concession"], answer: "mutually", tip: "Mutually beneficial favorece a ambas partes." }
    ]
  },
  {
    objective: "Escribir ensayos de opinión cohesionados, críticos y convincentes.",
    vocabulary: ["thesis", "counterargument", "cohesion", "qualify", "reiterate"],
    example: "A strong conclusion reiterates the thesis without simply repeating it.",
    activities: [
      { prompt: "Matiza una afirmación", phrase: "The writer ___ the claim by acknowledging important exceptions.", options: ["qualifies", "reiterates exactly", "cohesion"], answer: "qualifies", tip: "Qualify a claim limita o matiza su alcance." },
      { prompt: "Integra la oposición", phrase: "Addressing the main ___ makes the essay more convincing.", options: ["counterargument", "thesis repetition", "cohesively"], answer: "counterargument", tip: "Counterargument es el argumento contrario." }
    ]
  },
  {
    objective: "Crear un proyecto avanzado que integre investigación, análisis y presentación.",
    vocabulary: ["scope", "synthesise", "draft", "peer feedback", "deliverable"],
    example: "After defining the scope, we synthesised our sources and revised the draft using peer feedback.",
    activities: [
      { prompt: "Define el proyecto", phrase: "A clear ___ prevents the investigation from becoming too broad.", options: ["scope", "deliverable feedback", "drafting peer"], answer: "scope", tip: "Scope es el alcance de un proyecto." },
      { prompt: "Integra información", phrase: "The final report must ___ ideas from several reliable sources.", options: ["synthesise", "scope", "peer to"], answer: "synthesise", tip: "Synthesise combina ideas en una nueva comprensión." }
    ]
  },
  {
    objective: "Demostrar dominio C1 en comprensión, precisión y comunicación flexible.",
    vocabulary: ["command", "precision", "flexibility", "sophisticated", "mastery"],
    example: "C1 mastery means communicating complex ideas with precision, flexibility and confidence.",
    activities: [
      { prompt: "Elige la formulación avanzada", phrase: "Her response demonstrated an impressive ___ of nuanced language.", options: ["command", "flexibility to", "precisioning"], answer: "command", tip: "A command of a language significa dominio." },
      { prompt: "Completa la gran misión", phrase: "¿Qué frase refleja un nivel C1?", options: ["I can synthesise complex information and adapt my language precisely.", "I complex information adapt good.", "I was precision language."], answer: "I can synthesise complex information and adapt my language precisely.", tip: "C1 combina complejidad, adaptación y precisión." }
    ]
  }
];
