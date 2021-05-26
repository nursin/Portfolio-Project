// Date Act is an app that will allow the user to select attribute classes (gender, age range, and type), then use those attributes to randomly generate a famous character profile, or generate a random not famous profile from multiple attribute classes. should the user select create your own the user will be prompted by a profile form to complete which will store the character profile for use by anyone. should the user search for a character with keywords the profiles will list on the page for the user to click and open profile. then user will be able to save the profile to their account for later use.



// create a object called profile that randomly generates each charactor attribute or character based on the selections from the form


// build each random generator function that will generate each profile or profile attribute in the previous profile object


// build a function that will attached the profile to the DOM


// create each list of attributes to randomly choose from
const NAMES = ['Billy Denbocker', 'Alessandro Mathews', 'Daphne Conley', 'Nikolai Campos', 'Meadow Moreno', 'Diana Ware', 'Gerald Rogers', 'Dallas Gamble', 'Royce Whitney', 'Cailyn Strong', 'Tania Rivera', 'Lucy Contreras', 'Steven Mcpherson', 'Sanai Rasmussen', 'Margaret Blankenship', 'Summer Cardenas', 'Daphne Lawrence', 'Rihanna Petersen', 'Bianca Bradshaw', 'Meredith Mathews', 'Deangelo Floyd', 'Stephen Lee', 'Josephine Wood', 'Jordin Torres', 'Sullivan Lambert', 'Jordin Petty', 'Brylee Henson', 'Yael Orozco', 'Shyla Murillo', 'Camron Gilbert', 'Luka Duarte', 'Shamar Dennis', 'Lailah Raymond', 'Amy Estrada', 'Zoe Gentry', 'Makenzie Trevino', 'Edgar Rush', 'Dorian Gilmore', 'Tiffany Peck', 'Joe Proctor', 'Marlon Mora', 'Kamren Montoya', 'Jazlyn Compton', 'Braxton Trevino', 'Alex Robinson', 'Carter Welch', 'Erica Whitney', 'Autumn Gutierrez', 'Kyler Knox', 'Essence Robbins', 'Gia Dillon', 'Ezra Vance', 'William Alvarez', 'Turner Mayer', 'Natalia Carrillo', 'Sandra Khan', 'Amare Murphy', 'Valentin Dodson', 'Raquel Riley', 'Natalie Brown', 'Ruby Barnes', 'Isabella Mclean', 'Felipe Mills', 'Jordyn Larsen', 'Jessica Salazar', 'Darien Higgins', 'Aaliyah Reeves', 'Anya Valenzuela', 'Brenden Everett', 'Aedan Gonzales', 'Paxton Campbell', 'Lyric Valencia', 'Giana Barr', 'Kenyon Boone', 'Konnor Wheeler', 'Brody Whitney', 'Braeden Robinson', 'Nathen Evans', 'Ishaan Richmond', 'Donald Mcknight', 'Kymani Bell', 'Malik Shaffer', 'Cortez Stevens', 'Jamie Garrett', 'Jalen Sheppard', 'Miranda Knox', 'Abbey Medina', 'Hamza Steele', 'Jay Castillo', 'Muhammad Kelley', 'Denise Hamilton', 'Adolfo Myers', 'Jalen Randolph', 'Francesca Fernandez', 'Solomon Hart', 'Kael Glover', 'John Dalton', 'Rayan Norris', 'Lorenzo Obrien', 'Gauge Sawyer', 'Amaris Pham']



const POSITIVE_ADJECTIVE_LIST = ["Accomplished", "Active", "Adept", "Affectionate", "Agreeable", "Brave", "Bright", "Capable", "Charming", "Considerate", "Courageous", "Creative", "Determined", "Diplomatic", "Energetic", "Engaging", "Expert", "Faithful", "Fearless", "Frank", "Friendly", "Funny", "Generous", "Giving", "Hardworking", "Helpful", "Humorous", "Imaginative", "Kind", "Knowledgeable", "Likable", "Loving", "Loyal", "Marvelous", "Nice", "Optimistic", "Passionate", "Patient", "Persistent", "Philosophical", "Plucky", "Polite", "Powerful", "Proficient", "Romantic", "Self-confident", "Sensible", "Sincere", "Sincere", "Thoughtful", "Warmhearted", "Willing"]

const NEGATIVE_ADJECTIVE_LIST = ['Aggressive', 'Arrogant', 'Boring', 'Careless', 'Cruel', 'Cowardly', 'Deceitful', 'Dishonest', 'Fussy', 'Greedy', 'Grumpy', 'Harsh', 'Impatient', 'Impulsive', 'Jealous', 'Moody', 'Overcritical', 'Rude', 'Selfish', 'Untrustworthy', 'Unhappy', 'aggressive', 'aloof', 'arrogant', 'belligerent', 'big-headed', 'bitchy', 'boring', 'bossy', 'careless', 'clinging', 'compulsive', 'cowardly', 'cruel', 'cunning', 'cynical', 'deceitful', 'detached', 'dishonest', 'dogmatic', 'domineering', 'finicky', 'flirtatious', 'foolish', 'foolhardy', 'fussy', 'greedy', 'grumpy', 'gullible', 'harsh', 'impatient', 'impolite', 'impulsive', 'inconsiderate', 'inconsistent', 'indecisive', 'indiscreet', 'inflexible', 'interfering', 'intolerant', 'irresponsible', 'jealous', 'lazy', 'Machiavellian', 'materialistic', 'mean', 'miserly', 'moody', 'narrow-minded', 'nasty', 'naughty', 'nervous', 'obsessive', 'obstinate', 'overcritical', 'overemotional', 'patronizing', 'perverse', 'pessimistic', 'possessive', 'quarrelsome', 'quick-tempered', 'resentful', 'rude', 'ruthless', 'sarcastic', 'secretive', 'selfish', 'self-centred', 'self-indulgent', 'silly', 'sneaky', 'stingy', 'stubborn', 'stupid', 'superficial', 'timid', 'touchy', 'thoughtless', 'unkind', 'unpredictable', 'unreliable', 'untidy', 'untrustworthy', 'vague', 'vain', 'vengeful', 'vulgar', 'weak-willed']

const BIO = []

const PROFESSION = []


// horoscope should match dob maybe? could be funny
const HOROSCOPE = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

function generateAge() {
  const MIN_AGE = 10;
  const MAX_AGE = 125;
  return Math.floor(Math.random() * (MAX_AGE - MIN_AGE) + MIN_AGE);
}

function generateDOB() {
  // generates date for birthday
  // should match age
}

// create a list of famous profiles or famous attributes to add to a famous character

// build a function to create and store a create your own profile, allow this profile to be used by the attaching to the dom function

// build a function that will allow users to search the current lists of characters by keywords

