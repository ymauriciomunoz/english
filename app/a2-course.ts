import type { A1LessonContent } from "./a1-course";

export const a2Course: A1LessonContent[] = [
  {
    objective: "Contar un viaje reciente usando el pasado simple.",
    vocabulary: ["travelled", "visited", "stayed", "saw", "last summer"],
    example: "Last summer, I travelled to the coast and stayed near the beach.",
    activities: [
      { prompt: "Completa el recuerdo", phrase: "Last year, we ___ Cartagena.", options: ["visited", "visit", "visiting"], answer: "visited", tip: "Usa el pasado simple para una acción terminada." },
      { prompt: "Elige el pasado correcto", phrase: "I ___ many beautiful places on my trip.", options: ["saw", "see", "seen"], answer: "saw", tip: "Saw es el pasado irregular de see." }
    ]
  },
  {
    objective: "Narrar una historia breve en orden cronológico.",
    vocabulary: ["first", "then", "after that", "finally", "suddenly"],
    example: "First, we got on the bus. Then, it suddenly started to rain.",
    activities: [
      { prompt: "Elige el conector inicial", phrase: "___, I opened the mysterious box.", options: ["First", "Finally", "Yesterday night"], answer: "First", tip: "First presenta la primera acción." },
      { prompt: "Termina la historia", phrase: "We found the puppy and, ___, took it home.", options: ["finally", "first", "because of"], answer: "finally", tip: "Finally introduce el último evento." }
    ]
  },
  {
    objective: "Preguntar precios, elegir productos y comprar con cortesía.",
    vocabulary: ["How much…?", "cheap", "expensive", "size", "I'd like"],
    example: "How much is this T-shirt? — It's fifteen dollars.",
    activities: [
      { prompt: "Pregunta por el precio", phrase: "Quieres saber cuánto cuestan unos zapatos.", options: ["How much are these shoes?", "How many shoes are these?", "Where shoes?"], answer: "How much are these shoes?", tip: "Usa How much para preguntar el precio." },
      { prompt: "Compra con cortesía", phrase: "___ the blue backpack, please.", options: ["I'd like", "I liking", "I can to"], answer: "I'd like", tip: "I'd like es una forma cortés de pedir algo." }
    ]
  },
  {
    objective: "Pedir y explicar direcciones dentro de una ciudad.",
    vocabulary: ["turn left", "turn right", "go straight", "across from", "corner"],
    example: "Go straight and turn left at the corner. The bank is across from the park.",
    activities: [
      { prompt: "Sigue la dirección", phrase: "Go straight and ___ right at the bank.", options: ["turn", "go", "crossing"], answer: "turn", tip: "Turn right significa gira a la derecha." },
      { prompt: "Ubica el lugar", phrase: "The cinema is ___ from the library.", options: ["across", "under", "between of"], answer: "across", tip: "Across from significa enfrente de." }
    ]
  },
  {
    objective: "Expresar planes e intenciones para el futuro.",
    vocabulary: ["going to", "next week", "plan", "hope", "probably"],
    example: "I'm going to start a photography course next week.",
    activities: [
      { prompt: "Completa el plan", phrase: "She is going to ___ her cousins tomorrow.", options: ["visit", "visited", "visiting"], answer: "visit", tip: "Después de going to usamos el verbo base." },
      { prompt: "Elige la intención", phrase: "Tenemos un plan para el sábado.", options: ["We are going to camp on Saturday.", "We camped next Saturday.", "We going camp Saturday."], answer: "We are going to camp on Saturday.", tip: "Be going to expresa planes ya decididos." }
    ]
  },
  {
    objective: "Describir la personalidad y las cualidades de tus amistades.",
    vocabulary: ["friendly", "funny", "helpful", "shy", "kind"],
    example: "My best friend is funny and kind. She always helps me.",
    activities: [
      { prompt: "Identifica la cualidad", phrase: "Tom always helps other people. He is ___.", options: ["helpful", "shy", "noisy"], answer: "helpful", tip: "Helpful describe a alguien dispuesto a ayudar." },
      { prompt: "Completa la descripción", phrase: "Sara makes everyone laugh because she is very ___.", options: ["funny", "quietly", "help"], answer: "funny", tip: "Funny significa divertido o gracioso." }
    ]
  },
  {
    objective: "Hablar de deportes, habilidades y frecuencia de práctica.",
    vocabulary: ["team", "train", "often", "well", "competition"],
    example: "I train twice a week, and I can swim quite well.",
    activities: [
      { prompt: "Describe una habilidad", phrase: "Mia can play tennis very ___.", options: ["well", "good", "bestly"], answer: "well", tip: "Well describe cómo se realiza una acción." },
      { prompt: "Expresa frecuencia", phrase: "I ___ go running after school, about four days a week.", options: ["often", "never", "yesterday"], answer: "often", tip: "Often significa frecuentemente." }
    ]
  },
  {
    objective: "Explicar síntomas y dar consejos sencillos de salud.",
    vocabulary: ["headache", "sore throat", "rest", "should", "medicine"],
    example: "I have a headache. — You should rest and drink some water.",
    activities: [
      { prompt: "Da un buen consejo", phrase: "I have a sore throat.", options: ["You should drink warm tea.", "You should run for hours.", "You shouldn't sleep."], answer: "You should drink warm tea.", tip: "Should se usa para dar consejos." },
      { prompt: "Completa el síntoma", phrase: "My head hurts. I have a ___.", options: ["headache", "toothbrush", "medicine"], answer: "headache", tip: "Headache significa dolor de cabeza." }
    ]
  },
  {
    objective: "Describir cómo utilizas la tecnología en tu vida diaria.",
    vocabulary: ["download", "upload", "search", "message", "screen time"],
    example: "I use my tablet to search for information and message my friends.",
    activities: [
      { prompt: "Elige la acción digital", phrase: "I need to ___ this photo to my class website.", options: ["upload", "turn left", "wear"], answer: "upload", tip: "Upload significa subir un archivo a internet." },
      { prompt: "Completa el propósito", phrase: "She uses the internet ___ learn new things.", options: ["to", "for to", "because to"], answer: "to", tip: "To + verbo puede expresar propósito." }
    ]
  },
  {
    objective: "Pedir comida y conversar educadamente en un restaurante.",
    vocabulary: ["menu", "order", "starter", "main course", "bill"],
    example: "I'd like the vegetable soup and grilled chicken, please.",
    activities: [
      { prompt: "Haz tu pedido", phrase: "___ like a glass of orange juice, please.", options: ["I'd", "I'm", "I can"], answer: "I'd", tip: "I'd like es una forma educada de pedir." },
      { prompt: "Pide la cuenta", phrase: "Después de comer, dices:", options: ["Can we have the bill, please?", "Where is the menu yesterday?", "I bill the food."], answer: "Can we have the bill, please?", tip: "Bill significa cuenta del restaurante." }
    ]
  },
  {
    objective: "Hablar sobre música y expresar opiniones sobre artistas.",
    vocabulary: ["song", "band", "concert", "voice", "lyrics"],
    example: "I love this band's songs because the lyrics are meaningful.",
    activities: [
      { prompt: "Expresa tu opinión", phrase: "This singer has an amazing ___.", options: ["voice", "concert", "instrumental"], answer: "voice", tip: "Voice significa voz." },
      { prompt: "Explica una preferencia", phrase: "I like this song ___ it has a great rhythm.", options: ["because", "but", "than"], answer: "because", tip: "Because introduce el motivo." }
    ]
  },
  {
    objective: "Describir paisajes, animales y características del mundo natural.",
    vocabulary: ["forest", "ocean", "mountain", "wildlife", "deep"],
    example: "The Pacific Ocean is larger and deeper than the Arctic Ocean.",
    activities: [
      { prompt: "Elige el paisaje", phrase: "A place with many trees and wild animals is a ___.", options: ["forest", "deserted", "river"], answer: "forest", tip: "Forest significa bosque." },
      { prompt: "Completa la comparación", phrase: "The ocean is ___ than this lake.", options: ["deeper", "more deep", "deepest than"], answer: "deeper", tip: "Con adjetivos cortos usamos -er + than." }
    ]
  },
  {
    objective: "Comparar opciones y explicar cuál prefieres.",
    vocabulary: ["better", "worse", "more useful", "cheaper", "prefer"],
    example: "I prefer the blue bike because it is cheaper and more comfortable.",
    activities: [
      { prompt: "Completa la comparación", phrase: "This laptop is ___ useful than the old one.", options: ["more", "most", "much"], answer: "more", tip: "Usa more con adjetivos largos." },
      { prompt: "Elige la preferencia", phrase: "¿Cuál frase explica una elección?", options: ["I prefer this one because it's cheaper.", "This one prefer cheaper.", "I cheaper because one."], answer: "I prefer this one because it's cheaper.", tip: "Prefer + objeto expresa una elección." }
    ]
  },
  {
    objective: "Comprender normas, obligaciones y consejos.",
    vocabulary: ["must", "mustn't", "have to", "should", "allowed"],
    example: "You must wear a helmet, but you don't have to bring your own.",
    activities: [
      { prompt: "Expresa una prohibición", phrase: "You ___ use your phone during the exam.", options: ["mustn't", "should", "have"], answer: "mustn't", tip: "Mustn't significa que algo está prohibido." },
      { prompt: "Expresa una obligación", phrase: "Students ___ arrive before eight o'clock.", options: ["have to", "might to", "shouldn't to"], answer: "have to", tip: "Have to expresa una obligación externa." }
    ]
  },
  {
    objective: "Hablar de experiencias usando ever, never y present perfect.",
    vocabulary: ["ever", "never", "already", "yet", "been"],
    example: "Have you ever been to another country? — No, I haven't.",
    activities: [
      { prompt: "Pregunta por una experiencia", phrase: "___ you ever ridden a horse?", options: ["Have", "Did", "Are"], answer: "Have", tip: "Have you ever…? pregunta por experiencias de vida." },
      { prompt: "Expresa algo que nunca ocurrió", phrase: "I have ___ tried sushi.", options: ["never", "ever", "yet did"], answer: "never", tip: "Never significa nunca." }
    ]
  },
  {
    objective: "Moverte con confianza por un aeropuerto.",
    vocabulary: ["passport", "boarding pass", "gate", "luggage", "flight"],
    example: "Show your passport and boarding pass at gate twelve.",
    activities: [
      { prompt: "Elige el documento", phrase: "You need this document to travel to another country.", options: ["passport", "menu", "receipt"], answer: "passport", tip: "Passport significa pasaporte." },
      { prompt: "Ubica tu vuelo", phrase: "Our flight leaves from ___ 18.", options: ["gate", "luggage", "seatbelt"], answer: "gate", tip: "Gate es la puerta de embarque." }
    ]
  },
  {
    objective: "Describir celebraciones, tradiciones y preparativos.",
    vocabulary: ["decorate", "invite", "celebrate", "gift", "traditional"],
    example: "We decorated the house and invited our friends to celebrate.",
    activities: [
      { prompt: "Completa la preparación", phrase: "We are going to ___ the room with balloons.", options: ["decorate", "celebrated", "invitation"], answer: "decorate", tip: "Decorate significa decorar." },
      { prompt: "Elige la acción pasada", phrase: "Yesterday, she ___ all her friends to the party.", options: ["invited", "invite", "inviting"], answer: "invited", tip: "Invited es el pasado regular de invite." }
    ]
  },
  {
    objective: "Hablar de profesiones, habilidades y metas laborales.",
    vocabulary: ["engineer", "designer", "scientist", "skills", "career"],
    example: "I'd like to be an engineer because I enjoy solving problems.",
    activities: [
      { prompt: "Identifica la profesión", phrase: "This person studies nature and does experiments.", options: ["scientist", "cashier", "pilot"], answer: "scientist", tip: "Scientist significa científico o científica." },
      { prompt: "Expresa una meta", phrase: "I ___ to become a game designer one day.", options: ["would like", "am liking", "liked tomorrow"], answer: "would like", tip: "Would like to expresa un deseo." }
    ]
  },
  {
    objective: "Combinar acciones largas y breves en historias del pasado.",
    vocabulary: ["while", "when", "was walking", "were playing", "happened"],
    example: "I was walking home when I found a lost kitten.",
    activities: [
      { prompt: "Completa la acción en progreso", phrase: "We ___ playing when the lights went out.", options: ["were", "was", "did"], answer: "were", tip: "Con we usamos were + verbo-ing." },
      { prompt: "Conecta los eventos", phrase: "I was doing my homework ___ the phone rang.", options: ["when", "while of", "then because"], answer: "when", tip: "When introduce la acción breve que interrumpe." }
    ]
  },
  {
    objective: "Integrar las habilidades A2 en una conversación y una historia.",
    vocabulary: ["experience", "opinion", "advice", "plan", "achievement"],
    example: "I've learned a lot this year, and I'm going to keep practising.",
    activities: [
      { prompt: "Completa tu experiencia", phrase: "I have ___ finished my A2 learning journey.", options: ["just", "yesterday did", "ever to"], answer: "just", tip: "Have just + participio indica algo recién terminado." },
      { prompt: "Elige el mensaje final", phrase: "¿Qué frase combina logro y plan?", options: ["I've improved, and I'm going to continue learning.", "I improve yesterday tomorrow.", "I've going continue."], answer: "I've improved, and I'm going to continue learning.", tip: "Present perfect resume el logro y going to expresa el plan." }
    ]
  }
];
