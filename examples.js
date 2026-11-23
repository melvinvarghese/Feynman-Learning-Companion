(() => {
  const examples = [
    ['Why does ice float?', 'Ice takes up more space than the same mass of liquid water. That makes it less dense, so it floats.', ['What does less dense mean?', 'Why does freezing change its volume?', 'What if ice sank instead?']],
    ['Why does metal feel cold?', 'Metal takes heat away from your warm hand faster than wood does. Both can be at the same temperature and still feel different.', ['What is leaving my hand?', 'Why does wood feel warmer?', 'What happens on a hot day?']],
    ['What is opportunity cost?', 'Choosing an hour of television means giving up another use of that hour. Opportunity cost is the best alternative you give up.', ['Can a free choice have a cost?', 'What else could I do with that hour?', 'Does every choice involve a trade-off?']],
    ['Why do shadows move?', 'A shadow forms where an object blocks light. As the Sun appears to move across the sky, the direction of the shadow changes.', ['What is blocking the light?', 'Why are shadows longer near sunset?', 'Could a shadow tell the time?']],
    ['Why does a wet shirt dry?', 'Some water molecules escape from the shirt into the air, even without boiling. Moving air carries that water vapour away.', ['Does water need to boil to escape?', 'Why does wind help?', 'What changes on a humid day?']],
    ['What is an average?', 'Add the values together, then divide by how many there are. The mean shares the total equally, but can hide big differences.', ['Can one big value change it?', 'Does anyone have to equal the average?', 'Would the middle value tell another story?']],
    ['Why wear a seat belt?', 'Your body is moving with the car. When the car stops, your body tends to keep moving. The belt applies a force that slows you down.', ['Am I already moving?', 'What actually slows my body?', 'What happens to a loose bag?']],
    ['How does a plant grow?', 'Plants use sunlight to make sugars from water and carbon dioxide. Those sugars provide material and stored energy for growth.', ['What does sunlight provide?', 'Where does the carbon come from?', 'Why does a plant need air?']],
    ['What is an algorithm?', 'An algorithm is a precise set of steps for a task. Instructions for sorting books by title can be an algorithm too.', ['Must it involve a computer?', 'What makes a step precise?', 'How would I find the smallest number?']],
    ['Why does the Moon change shape?', 'Sunlight lights about half the Moon. As it goes around Earth, we see different amounts of that sunlit half.', ['Is the Moon itself changing?', 'Where is the light coming from?', 'How is an eclipse different?']],
    ['Why does a ship float?', 'A ship pushes water aside. The water pushes upward. A floating ship displaces enough water for that upward force to balance its weight.', ['What pushes the ship upward?', 'Why does its hollow shape matter?', 'Why can a steel nail sink?']],
    ['What is a fraction?', 'A fraction describes equal parts of a whole. Three quarters means three of the four equal parts that make up that whole.', ['Why must the parts be equal?', 'What counts as the whole?', 'Can two fractions mean the same amount?']],
    ['Why does bread rise?', 'Yeast uses sugars and releases carbon dioxide gas. The dough traps bubbles of that gas, making it expand.', ['Where do the bubbles come from?', 'What holds the gas inside?', 'Why does the dough need time?']],
    ['What does interest mean?', 'Interest is a cost of borrowing money, or a payment for lending it. The amount depends on the rate, the time, and how it is calculated.', ['Who is paying whom?', 'Why does time matter?', 'What if interest earns interest?']],
    ['Why do we have seasons?', 'Earth is tilted. When your hemisphere leans toward the Sun, it gets longer days and more direct sunlight, bringing summer.', ['Why do longer days matter?', 'What happens in the other hemisphere?', 'Is distance from the Sun the reason?']],
    ['What is a food chain?', 'A food chain follows energy from one living thing to another as organisms eat and are eaten. Many chains connect into a food web.', ['Where does the energy start?', 'Can one animal eat several things?', 'What happens if one link disappears?']],
    ['Why does salt dissolve?', 'Water molecules attract the charged particles in salt and can pull them apart. The particles spread through the water.', ['Has the salt disappeared?', 'Could I get the salt back?', 'Why can water hold only so much?']],
    ['What is a fair test?', 'To find what causes a change, vary one thing while keeping other relevant conditions alike. Otherwise, several causes may be mixed together.', ['What am I changing?', 'What needs to stay the same?', 'Could something else explain the result?']],
    ['Why do glasses help?', 'Glasses bend incoming light so it focuses more accurately on the back of the eye. A sharper focus gives a clearer image.', ['Where should the light focus?', 'What does the lens change?', 'Why do people need different lenses?']],
    ['What is a metaphor?', 'A metaphor describes one thing as another to help us see a connection. Calling time a river suggests movement, without meaning time is water.', ['What connection does it reveal?', 'Where does the comparison stop?', 'Could another comparison help?']],
    ['Why does a ball bounce?', 'When a ball hits the ground, it changes shape and stores energy briefly. As it springs back, some of that energy sends it upward.', ['Where was the energy stored?', 'Why does each bounce get lower?', 'What changes on a soft surface?']],
    ['What is probability?', 'Probability describes how likely an outcome is. A fair coin has an equal chance of heads or tails, but a few tosses need not split evenly.', ['Does likely mean certain?', 'Can several heads happen in a row?', 'What makes the coin fair?']],
    ['Why does soap clean?', 'Soap molecules have parts that mix with water and parts that attach to grease. They help lift grease into the water so it can rinse away.', ['Why is water alone not enough?', 'What happens to the grease?', 'Does more foam always mean cleaner?']],
    ['What is a map scale?', 'A map scale connects a distance on paper to a distance on the ground. If one centimetre means one kilometre, three centimetres means three kilometres.', ['What does one centimetre represent?', 'What happens if I enlarge the map?', 'Does the map show every detail?']]
  ];
  const key = 'feynman-example-deck-v1';
  let remaining = [];
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(saved) && saved.every(i => Number.isInteger(i) && i >= 0 && i < examples.length) && new Set(saved).size === saved.length) remaining = saved;
  } catch { /* Storage is optional. */ }
  if (!remaining.length) {
    remaining = examples.map((_, i) => i);
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    try {
      const last = Number(localStorage.getItem(key + '-last'));
      if (remaining[remaining.length - 1] === last) [remaining[0], remaining[remaining.length - 1]] = [remaining[remaining.length - 1], remaining[0]];
    } catch { /* Storage is optional. */ }
  }
  const selected = remaining.pop();
  const [topic, explanation, questions] = examples[selected];
  document.querySelector('.example-topic').textContent = topic;
  document.querySelector('.concept-note p').textContent = explanation;
  document.querySelectorAll('.question-note li').forEach((item, i) => { item.textContent = questions[i]; });
  document.querySelector('.note-cluster').setAttribute('aria-label', topic + ' A simple explanation and questions to explore.');
  try {
    localStorage.setItem(key, JSON.stringify(remaining));
    localStorage.setItem(key + '-last', String(selected));
  } catch { /* A fresh random example still works without storage. */ }
})();
