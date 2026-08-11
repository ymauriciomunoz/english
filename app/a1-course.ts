export type Activity = {
  prompt: string;
  phrase: string;
  options: string[];
  answer: string;
  tip: string;
};

export type A1LessonContent = {
  objective: string;
  vocabulary: string[];
  example: string;
  activities: [Activity, Activity];
};

export const a1Course: A1LessonContent[] = [
  {
    objective: "Saludar y despedirte en situaciones sencillas.",
    vocabulary: ["Hello", "Hi", "Good morning", "Goodbye"],
    example: "Hello! My name is Leo. — Hi, Leo!",
    activities: [
      { prompt: "Elige el saludo correcto", phrase: "Son las 8:00 de la mañana.", options: ["Good morning!", "Good night!", "Goodbye!"], answer: "Good morning!", tip: "Morning significa mañana." },
      { prompt: "Completa la conversación", phrase: "— Hello!  — ___!", options: ["Hi", "Thanks", "Blue"], answer: "Hi", tip: "Hi y hello son saludos." }
    ]
  },
  {
    objective: "Decir tu nombre, tu edad y preguntar por otra persona.",
    vocabulary: ["My name is…", "I am…", "How old are you?", "years old"],
    example: "My name is Mia. I am eleven years old.",
    activities: [
      { prompt: "Completa la presentación", phrase: "My ___ is Daniel.", options: ["name", "age", "hello"], answer: "name", tip: "My name is… significa Me llamo…" },
      { prompt: "Elige la pregunta correcta", phrase: "Quieres saber la edad de Alex.", options: ["How old are you?", "What is your color?", "Where is your book?"], answer: "How old are you?", tip: "How old pregunta por la edad." }
    ]
  },
  {
    objective: "Reconocer y usar los colores más comunes.",
    vocabulary: ["red", "blue", "yellow", "green", "purple", "orange"],
    example: "The sun is yellow and the grass is green.",
    activities: [
      { prompt: "Selecciona el color", phrase: "The sky is usually ___.", options: ["blue", "orange", "pink"], answer: "blue", tip: "Sky significa cielo." },
      { prompt: "Traduce la frase", phrase: "Una manzana roja", options: ["a red apple", "a blue apple", "a green banana"], answer: "a red apple", tip: "En inglés el color va antes del objeto." }
    ]
  },
  {
    objective: "Contar y comprender números del 1 al 100.",
    vocabulary: ["one", "ten", "twenty", "fifty", "one hundred"],
    example: "I have twenty stickers.",
    activities: [
      { prompt: "Elige el número correcto", phrase: "Twelve", options: ["12", "20", "2"], answer: "12", tip: "Twelve es doce." },
      { prompt: "Completa la secuencia", phrase: "Twenty, thirty, ___.", options: ["forty", "fourteen", "four"], answer: "forty", tip: "Las decenas terminan normalmente en -ty." }
    ]
  },
  {
    objective: "Presentar a los miembros de tu familia.",
    vocabulary: ["mother", "father", "sister", "brother", "grandmother"],
    example: "This is my sister. Her name is Emma.",
    activities: [
      { prompt: "Identifica al familiar", phrase: "My mother's son is my ___.", options: ["brother", "aunt", "grandmother"], answer: "brother", tip: "Brother significa hermano." },
      { prompt: "Completa la presentación", phrase: "This ___ my father.", options: ["is", "are", "am"], answer: "is", tip: "Usa is con this." }
    ]
  },
  {
    objective: "Nombrar objetos del salón y seguir instrucciones básicas.",
    vocabulary: ["book", "pencil", "desk", "chair", "open", "close"],
    example: "Open your book, please.",
    activities: [
      { prompt: "Sigue la instrucción", phrase: "Open your book.", options: ["Abre tu libro.", "Cierra tu cuaderno.", "Toma tu lápiz."], answer: "Abre tu libro.", tip: "Open significa abrir." },
      { prompt: "Elige el objeto", phrase: "You write with a ___.", options: ["pencil", "chair", "desk"], answer: "pencil", tip: "Pencil significa lápiz." }
    ]
  },
  {
    objective: "Hablar de los días y organizar actividades semanales.",
    vocabulary: ["Monday", "Tuesday", "Wednesday", "Saturday", "Sunday"],
    example: "I play soccer on Saturday.",
    activities: [
      { prompt: "Completa la secuencia", phrase: "Monday, Tuesday, ___.", options: ["Wednesday", "Friday", "Sunday"], answer: "Wednesday", tip: "Wednesday es miércoles." },
      { prompt: "Elige la preposición", phrase: "I study English ___ Monday.", options: ["on", "in", "at"], answer: "on", tip: "Usa on con días de la semana." }
    ]
  },
  {
    objective: "Describir las acciones principales de tu rutina.",
    vocabulary: ["wake up", "have breakfast", "go to school", "do homework", "go to bed"],
    example: "I wake up at seven o'clock.",
    activities: [
      { prompt: "Elige la traducción correcta", phrase: "I have breakfast at seven.", options: ["Desayuno a las siete.", "Ceno a las siete.", "Voy a clase a las siete."], answer: "Desayuno a las siete.", tip: "Have breakfast significa desayunar." },
      { prompt: "Ordena la rutina", phrase: "Antes de ir a la escuela, I ___.", options: ["wake up", "go to bed", "do homework at night"], answer: "wake up", tip: "Wake up significa despertar." }
    ]
  },
  {
    objective: "Hablar de alimentos y expresar gustos.",
    vocabulary: ["bread", "rice", "fruit", "I like", "I don't like"],
    example: "I like strawberries, but I don't like onions.",
    activities: [
      { prompt: "Completa la frase", phrase: "I ___ bananas. They are delicious!", options: ["like", "don't like", "am"], answer: "like", tip: "Like se usa para expresar gustos." },
      { prompt: "Elige la categoría", phrase: "Apple, banana and orange are ___.", options: ["fruit", "drinks", "vegetables"], answer: "fruit", tip: "Fruit significa fruta." }
    ]
  },
  {
    objective: "Describir animales usando can y can't.",
    vocabulary: ["dog", "bird", "fish", "can fly", "can swim"],
    example: "A bird can fly, but a fish can't fly.",
    activities: [
      { prompt: "Completa la habilidad", phrase: "A fish can ___.", options: ["swim", "fly", "read"], answer: "swim", tip: "Swim significa nadar." },
      { prompt: "Elige la frase verdadera", phrase: "¿Qué puede hacer un pájaro?", options: ["A bird can fly.", "A bird can drive.", "A bird can read."], answer: "A bird can fly.", tip: "Can expresa una habilidad." }
    ]
  },
  {
    objective: "Nombrar habitaciones y ubicar objetos en casa.",
    vocabulary: ["kitchen", "bedroom", "bathroom", "living room", "in"],
    example: "The sofa is in the living room.",
    activities: [
      { prompt: "Elige la habitación", phrase: "The bed is in the ___.", options: ["bedroom", "kitchen", "garden"], answer: "bedroom", tip: "Bedroom significa habitación." },
      { prompt: "Completa la ubicación", phrase: "The fridge is ___ the kitchen.", options: ["in", "on", "can"], answer: "in", tip: "In significa dentro de." }
    ]
  },
  {
    objective: "Describir lo que llevas puesto.",
    vocabulary: ["T-shirt", "trousers", "shoes", "hat", "wearing"],
    example: "I am wearing a blue T-shirt.",
    activities: [
      { prompt: "Completa la descripción", phrase: "She is ___ a red hat.", options: ["wearing", "eating", "playing"], answer: "wearing", tip: "Wearing significa llevando puesto." },
      { prompt: "Elige la prenda", phrase: "You wear these on your feet.", options: ["shoes", "hat", "T-shirt"], answer: "shoes", tip: "Feet significa pies." }
    ]
  },
  {
    objective: "Describir el clima y elegir actividades apropiadas.",
    vocabulary: ["sunny", "rainy", "cloudy", "windy", "cold"],
    example: "It is sunny today. Let's go to the park!",
    activities: [
      { prompt: "Identifica el clima", phrase: "Necesitas un paraguas.", options: ["It is rainy.", "It is sunny.", "It is hot."], answer: "It is rainy.", tip: "Rainy significa lluvioso." },
      { prompt: "Completa la pregunta", phrase: "What is the ___ like today?", options: ["weather", "shirt", "breakfast"], answer: "weather", tip: "Weather significa clima." }
    ]
  },
  {
    objective: "Nombrar partes del cuerpo y describir rasgos sencillos.",
    vocabulary: ["head", "eyes", "ears", "hands", "feet"],
    example: "I have two eyes and two ears.",
    activities: [
      { prompt: "Elige la parte del cuerpo", phrase: "We listen with our ___.", options: ["ears", "eyes", "hands"], answer: "ears", tip: "Ears significa orejas." },
      { prompt: "Completa la frase", phrase: "I have ten fingers on my ___.", options: ["hands", "head", "feet"], answer: "hands", tip: "Hands significa manos." }
    ]
  },
  {
    objective: "Hablar sobre las actividades que disfrutas.",
    vocabulary: ["read", "draw", "dance", "play games", "ride a bike"],
    example: "I love to draw after school.",
    activities: [
      { prompt: "Identifica el pasatiempo", phrase: "I use colors and paper. I like to ___.", options: ["draw", "swim", "cook"], answer: "draw", tip: "Draw significa dibujar." },
      { prompt: "Completa la frase", phrase: "My hobby ___ reading comics.", options: ["is", "are", "am"], answer: "is", tip: "Hobby es singular, por eso usamos is." }
    ]
  },
  {
    objective: "Describir actividades que están ocurriendo ahora.",
    vocabulary: ["running", "playing", "sitting", "jumping", "now"],
    example: "The children are playing in the park.",
    activities: [
      { prompt: "Completa la acción", phrase: "Look! The dog is ___.", options: ["running", "run", "runs yesterday"], answer: "running", tip: "Is + verbo-ing describe una acción actual." },
      { prompt: "Elige la frase correcta", phrase: "Ellos están jugando ahora.", options: ["They are playing now.", "They play yesterday.", "They is playing now."], answer: "They are playing now.", tip: "Con they usamos are." }
    ]
  },
  {
    objective: "Preguntar y decir la hora.",
    vocabulary: ["o'clock", "half past", "morning", "afternoon", "What time…?"],
    example: "What time is it? — It's three o'clock.",
    activities: [
      { prompt: "Elige la hora", phrase: "It's half past four.", options: ["4:30", "4:00", "3:30"], answer: "4:30", tip: "Half past significa y media." },
      { prompt: "Completa la pregunta", phrase: "___ time do you go to school?", options: ["What", "Who", "How many"], answer: "What", tip: "What time pregunta a qué hora." }
    ]
  },
  {
    objective: "Identificar lugares de la ciudad y decir dónde están.",
    vocabulary: ["school", "library", "hospital", "park", "next to"],
    example: "The library is next to the park.",
    activities: [
      { prompt: "Elige el lugar", phrase: "You can borrow books at the ___.", options: ["library", "hospital", "bakery"], answer: "library", tip: "Borrow significa pedir prestado." },
      { prompt: "Completa la ubicación", phrase: "The park is ___ to the school.", options: ["next", "under", "can"], answer: "next", tip: "Next to significa al lado de." }
    ]
  },
  {
    objective: "Expresar planes sencillos con going to.",
    vocabulary: ["weekend", "visit", "watch", "play", "going to"],
    example: "I am going to visit my grandmother on Sunday.",
    activities: [
      { prompt: "Completa el plan", phrase: "We are going to ___ a movie.", options: ["watch", "watched", "watching"], answer: "watch", tip: "Después de going to usamos el verbo base." },
      { prompt: "Elige la frase correcta", phrase: "Voy a jugar fútbol.", options: ["I am going to play soccer.", "I going play soccer.", "I am play soccer yesterday."], answer: "I am going to play soccer.", tip: "I am going to + verbo expresa un plan." }
    ]
  },
  {
    objective: "Integrar todo A1 en una conversación completa.",
    vocabulary: ["introduce", "describe", "ask", "answer", "great job"],
    example: "Hi! I'm Sam. I'm twelve and I love music. What do you like?",
    activities: [
      { prompt: "Completa la presentación final", phrase: "Hi! My name ___ Ana and I ___ eleven.", options: ["is / am", "am / is", "are / is"], answer: "is / am", tip: "My name is… pero I am…" },
      { prompt: "Elige la conversación correcta", phrase: "— What do you like?", options: ["— I like music and games.", "— I am Monday.", "— It is twelve years."], answer: "— I like music and games.", tip: "I like… expresa gustos." }
    ]
  }
];
