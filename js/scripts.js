// Date Act is an app that will allow the user to select attribute classes (gender, age range, and type), then use those attributes to randomly generate a famous character profile, or generate a random not famous profile from multiple attribute classes. should the user select create your own the user will be prompted by a profile form to complete which will store the character profile for use by anyone. should the user search for a character with keywords the profiles will list on the page for the user to click and open profile. then user will be able to save the profile to their account for later use.
const generateProfileBtn = document.querySelector('#generateProfileBtn');
const clearProfileBtn = document.querySelector('#clearBtn');
const saveProfileBtn = document.querySelector('#saveProfileBtn');
const profileHeader = document.querySelector('#profileHeader');
const profileName = document.querySelector('#name');
const profileAge = document.querySelector('#age');
const profileHoroscope = document.querySelector('#horoscope');
const profileType = document.querySelector('#type');
const profileBio = document.querySelector('#bio');
const profileAdjectives = document.querySelector('#adjectives');
const profileQuirkyFact = document.querySelector('#quirky-fact');
const profileProfession = document.querySelector('#profession');

generateProfileBtn.addEventListener('click', generateProfile);
clearProfileBtn.addEventListener('click', clearProfile);

toggleBtns([clearBtn, saveProfileBtn], false);

// create a object called profile that randomly generates each charactor attribute or character based on the selections from the form
function generateProfile() {
  // Profile header
  profileHeader.innerText = 'Character profile ready:';
  profileHeader.appendChild(document.createElement("hr"));
  // NAME
  profileName.innerText = (`Name: ${NAMES[Math.floor(Math.random()*NAMES.length)]}`);
  // AGE
  profileAge.innerText = (`Age: ${generateAge()}`);
  // HOROSCOPE
  profileHoroscope.innerText = (`Horoscope: ${HOROSCOPE[Math.floor(Math.random()*HOROSCOPE.length)]}`);
  // TYPE
  profileType.innerText = ('Type: Not Famous'); // select option value here
  // BIO
  profileBio.innerText = (`Bio: ${generateBIO()}`);
  //ADJECTIVES
  profileAdjectives.innerText = (`Adjectives: ${POSITIVE_ADJECTIVE_LIST[Math.floor(Math.random()*POSITIVE_ADJECTIVE_LIST.length)]}/${NEGATIVE_ADJECTIVE_LIST[Math.floor(Math.random()*NEGATIVE_ADJECTIVE_LIST.length)]}`);
  // QUIRKY_FACT
  profileQuirkyFact.innerText = (`Quirky fact: ${QUIRKY_FACT[Math.floor(Math.random()*QUIRKY_FACT.length)]}`);
  // PROFESSION
  profileProfession.innerText = (`Profession: ${PROFESSION[Math.floor(Math.random()*PROFESSION.length)]}`);

  toggleBtns([clearBtn, saveProfileBtn], true);

}


// build each random generator function that will generate each profile or profile attribute in the previous profile object


// build a function that will attached the profile to the DOM


// create each list of attributes to randomly choose from
const NAMES_MALE = [];
const NAMES_FEMALE = [];

const NAMES = ['Billy Denbocker', 'Alessandro Mathews', 'Daphne Conley', 'Nikolai Campos', 'Meadow Moreno', 'Diana Ware', 'Gerald Rogers', 'Dallas Gamble', 'Royce Whitney', 'Cailyn Strong', 'Tania Rivera', 'Lucy Contreras', 'Steven Mcpherson', 'Sanai Rasmussen', 'Margaret Blankenship', 'Summer Cardenas', 'Daphne Lawrence', 'Rihanna Petersen', 'Bianca Bradshaw', 'Meredith Mathews', 'Deangelo Floyd', 'Stephen Lee', 'Josephine Wood', 'Jordin Torres', 'Sullivan Lambert', 'Jordin Petty', 'Brylee Henson', 'Yael Orozco', 'Shyla Murillo', 'Camron Gilbert', 'Luka Duarte', 'Shamar Dennis', 'Lailah Raymond', 'Amy Estrada', 'Zoe Gentry', 'Makenzie Trevino', 'Edgar Rush', 'Dorian Gilmore', 'Tiffany Peck', 'Joe Proctor', 'Marlon Mora', 'Kamren Montoya', 'Jazlyn Compton', 'Braxton Trevino', 'Alex Robinson', 'Carter Welch', 'Erica Whitney', 'Autumn Gutierrez', 'Kyler Knox', 'Essence Robbins', 'Gia Dillon', 'Ezra Vance', 'William Alvarez', 'Turner Mayer', 'Natalia Carrillo', 'Sandra Khan', 'Amare Murphy', 'Valentin Dodson', 'Raquel Riley', 'Natalie Brown', 'Ruby Barnes', 'Isabella Mclean', 'Felipe Mills', 'Jordyn Larsen', 'Jessica Salazar', 'Darien Higgins', 'Aaliyah Reeves', 'Anya Valenzuela', 'Brenden Everett', 'Aedan Gonzales', 'Paxton Campbell', 'Lyric Valencia', 'Giana Barr', 'Kenyon Boone', 'Konnor Wheeler', 'Brody Whitney', 'Braeden Robinson', 'Nathen Evans', 'Ishaan Richmond', 'Donald Mcknight', 'Kymani Bell', 'Malik Shaffer', 'Cortez Stevens', 'Jamie Garrett', 'Jalen Sheppard', 'Miranda Knox', 'Abbey Medina', 'Hamza Steele', 'Jay Castillo', 'Muhammad Kelley', 'Denise Hamilton', 'Adolfo Myers', 'Jalen Randolph', 'Francesca Fernandez', 'Solomon Hart', 'Kael Glover', 'John Dalton', 'Rayan Norris', 'Lorenzo Obrien', 'Gauge Sawyer', 'Amaris Pham'];

const POSITIVE_ADJECTIVE_LIST = ["Accomplished", "Active", "Adept", "Affectionate", "Agreeable", "Brave", "Bright", "Capable", "Charming", "Considerate", "Courageous", "Creative", "Determined", "Diplomatic", "Energetic", "Engaging", "Expert", "Faithful", "Fearless", "Frank", "Friendly", "Funny", "Generous", "Giving", "Hardworking", "Helpful", "Humorous", "Imaginative", "Kind", "Knowledgeable", "Likable", "Loving", "Loyal", "Marvelous", "Nice", "Optimistic", "Passionate", "Patient", "Persistent", "Philosophical", "Plucky", "Polite", "Powerful", "Proficient", "Romantic", "Self-confident", "Sensible", "Sincere", "Sincere", "Thoughtful", "Warmhearted", "Willing"];

const NEGATIVE_ADJECTIVE_LIST = ['Aggressive', 'Arrogant', 'Boring', 'Careless', 'Cruel', 'Cowardly', 'Deceitful', 'Dishonest', 'Fussy', 'Greedy', 'Grumpy', 'Harsh', 'Impatient', 'Impulsive', 'Jealous', 'Moody', 'Overcritical', 'Rude', 'Selfish', 'Untrustworthy', 'Unhappy', 'aggressive', 'aloof', 'arrogant', 'belligerent', 'big-headed', 'bitchy', 'boring', 'bossy', 'careless', 'clinging', 'compulsive', 'cowardly', 'cruel', 'cunning', 'cynical', 'deceitful', 'detached', 'dishonest', 'dogmatic', 'domineering', 'finicky', 'flirtatious', 'foolish', 'foolhardy', 'fussy', 'greedy', 'grumpy', 'gullible', 'harsh', 'impatient', 'impolite', 'impulsive', 'inconsiderate', 'inconsistent', 'indecisive', 'indiscreet', 'inflexible', 'interfering', 'intolerant', 'irresponsible', 'jealous', 'lazy', 'Machiavellian', 'materialistic', 'mean', 'miserly', 'moody', 'narrow-minded', 'nasty', 'naughty', 'nervous', 'obsessive', 'obstinate', 'overcritical', 'overemotional', 'patronizing', 'perverse', 'pessimistic', 'possessive', 'quarrelsome', 'quick-tempered', 'resentful', 'rude', 'ruthless', 'sarcastic', 'secretive', 'selfish', 'self-centred', 'self-indulgent', 'silly', 'sneaky', 'stingy', 'stubborn', 'stupid', 'superficial', 'timid', 'touchy', 'thoughtless', 'unkind', 'unpredictable', 'unreliable', 'untidy', 'untrustworthy', 'vague', 'vain', 'vengeful', 'vulgar', 'weak-willed'];

const PROFESSION = ['Accountant', 'Actor', 'Administrator', 'Aerospace Engineer', 'Agricultural Engineer', 'Anthropologist', 'Architect', 'Astronomer', 'Auditor', 'Banking Analyst', 'Bartender', 'Biologist', 'Blacksmiths', 'Broker', 'Buyer', 'Carpenter', 'Chef', 'Chemist', 'Childcare Worker', 'Civil Engineer', 'Clergy', 'Computer Scientist', 'Conservation Worker', 'Construction Worker', 'Cook', 'Cosmetologist', 'Craftsperson', 'Customer Experience Design', 'Data Analyst', 'Data Scientist', 'Dental Assistant', 'Development Manager', 'Ecommerce Seller', 'Electrical Engineer', 'Emergency Medical Technician', 'Engineer', 'Environmental Engineer', 'Epidemiologist', 'Event Planner', 'Farmer', 'Financial Analyst', 'Financial Manager', 'Fishery Worker', 'Flight Attendant', 'Forestry Worker', 'Game Designer', 'General Manager', 'Government Worker', 'Health Educator', 'Hotel Manager', 'Import/Export Specialist', 'Information Design', 'Information Technology Manager', 'Interpreter', 'Laboratory Technician', 'Landscape Architect', 'Lawyer', 'Librarian', 'Logistics Engineer', 'Manicurists', 'Manufacturing Worker', 'Mathematician', 'Medical Administration', 'Medical Technician', 'Mental Health Counselor', 'Miner', 'Nanny', 'Nurse', 'Occupational Therapist', 'Operations Analyst', 'Optometrist', 'Personal Care Aid', 'Photographer', 'Physicist', 'Plumber', 'Politician', 'Product Design', 'Professor', 'Project Manager', 'Property Manager', 'Purchasing Manager', 'Quality Control Analyst', 'Reporter', 'Restaurant Manager', 'Robotics Engineer', 'Sales Manager', 'Scientist', 'Service Manager', 'Small Business Owner', 'Sociologist', 'Software Developer', 'Space Scientist', 'Steel Worker', 'Supervisor', 'Surveyor', 'Systems Analyst', 'Teacher', 'Technical Writer', 'Technology Architect', 'Tour Guide', 'Transportation Engineer', 'Tutor', 'Veterinarian', 'Waiter', 'Wind Energy Engineer', 'Zoologist', 'vengeful', 'vulgar', 'weak-willed', 'Accountant', 'Actuary', 'Advertising Manager', 'Agent', 'Air Traffic Controller', 'Archeologist', 'Art Director', 'Athlete', 'Baker', 'Barista', 'Bioinformatics Scientist', 'Biomedical Engineer', 'Board Member', 'Business Analyst', 'Captain naval', 'Cashier', 'Chemical Engineer', 'Chief Executive', 'Choreographer', 'Cleaner', 'Compliance Manager', 'Concierge', 'Construction Manager', 'Consultant', 'Copywriter', 'Courier', 'Curator', 'Customer Service', 'Data Architect', 'Database Administrator', 'Dentist', 'Director', 'Economist', 'Electrician', 'Energy Engineer', 'Entrepreneur', 'Environmental Science', 'Equipment Operator', 'Executive Management', 'Fashion Designer', 'Financial Controller', 'Firefighter', 'Fitness Trainer', 'Floral Designer', 'Funeral Attendant', 'Gardener', 'Geographer', 'Hair Stylist', 'Homemaker', 'Human Resources', 'Industrial Design', 'Information Scientist', 'Installation & Maintenance', 'Journalist', 'Laborer', 'Landscaping', 'Legal Secretary', 'Lifeguard', 'Management Consultant', 'Manufacturing Engineer', 'Marketing Analyst', 'Mechanical Engineer', 'Medical Assistant', 'Medical Technologist', 'Midwife', 'Musician', 'Network Administrator', 'Occupational Health & Safety', 'Office Clerk', 'Operations Manager', 'Performance Artist', 'Pharmacist', 'Physician', 'Pilot', 'Police Officer', 'Producer', 'Production Manager', 'Program Manager', 'Promotion Manager', 'Public Relations', 'Quality Assurance Manager', 'Railroad Engineer', 'Researcher', 'Rigger', 'Sales Engineer', 'Salesperson', 'Service Attendant', 'Shop Salesperson', 'Social Worker', 'Software Architect', 'Solar Energy Technician', 'Statistician', 'Stonemason', 'Surgeon', 'System Administrator', 'Tailor', 'Technical Support', 'Technician', 'Testing Engineer', 'Translator', 'Truck Driver', 'Urban Design', 'Visual Designer', 'Web Developer', 'Writer'];


// horoscope should match dob maybe? could be funny
const HOROSCOPE = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const QUIRKY_FACT = ['I make babies cry for good luck', 'I sleep with one eye open', 'I turn dead bodies into ocean reefs', 'I ride a flying bicycle', 'I haul my vacuum cleaner around with a horse', 'I have a 916 pound padlock', 'I poop most of what I eat'];

function generateAge() {
  const MIN_AGE = 10;
  const MAX_AGE = 125;
  return Math.floor(Math.random() * (MAX_AGE - MIN_AGE) + MIN_AGE);
}

function generateBIO() {
  const GREW_UP_IN = ['small', 'large', 'jungle'];
  const LIKES = ['cats', 'dogs', 'tigers', 'peanuts', 'cilantro'];
  const OWNS_A = ['house', 'cat', 'dog', 'robot', 'boat', 'hospital', 'business'];
  const PLAYS = ['baseball', 'basketball', 'football', 'video games'];
  const BIGGEST_ACHIEVEMENT = ['ate a biscuit', 'ran a marathon', 'won a superbowl ring', 'have a baby'];
  const ULTIMATE_GOAL = ['be a dancer', 'fly a plane', 'have a baby', 'eat 60 pizzas', 'beat a guinness world record'];
  const ASPIRE_TO_BE = ['a bunny', 'hit man', 'gardener'];

  return string = `Grew up in a ${GREW_UP_IN[Math.floor(Math.random()*GREW_UP_IN.length)]} town. Likes ${LIKES[Math.floor(Math.random()*LIKES.length)]}. Owns a ${OWNS_A[Math.floor(Math.random()*OWNS_A.length)]}. Plays ${PLAYS[Math.floor(Math.random()*PLAYS.length)]}. Biggest achievement is ${BIGGEST_ACHIEVEMENT[Math.floor(Math.random()*BIGGEST_ACHIEVEMENT.length)]}. My ultimate goal is to ${ULTIMATE_GOAL[Math.floor(Math.random()*ULTIMATE_GOAL.length)]}. Aspire to be ${ASPIRE_TO_BE[Math.floor(Math.random()*ASPIRE_TO_BE.length)]}.`;
  // 'Movies','TV','Religion','Music','Sports','Books','Politics'
}

function clearProfile() {
  profileHeader.innerText = '';
  removeAllChildNodes(profileHeader);
  profileName.innerText = '';
  profileAge.innerText = '';
  profileType.innerText = '';
  profileHoroscope.innerText = '';
  profileBio.innerText = '';
  profileAdjectives.innerText = '';
  profileQuirkyFact.innerText = '';
  profileProfession.innerText = '';

  toggleBtns([clearBtn, saveProfileBtn], false);
}

function toggleBtns(btnsArray, on) { 
  for (let btn = 0; btn < btnsArray.length; btn++) {
      if (on) {
          btnsArray[btn].style.display = "inline-block"; 
      } else {
          btnsArray[btn].style.display = "none";
      }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// create a list of famous profiles or famous attributes to add to a famous character

// build a function to create and store a create your own profile, allow this profile to be used by the attaching to the dom function

// build a function that will allow users to search the current lists of characters by keywords

