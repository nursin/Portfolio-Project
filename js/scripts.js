// Date Act is an app that will allow the user to select attribute classes (gender, age range, and type), then use those attributes to randomly generate a famous character profile, or generate a random not famous profile from multiple attribute classes. should the user select create your own the user will be prompted by a profile form to complete which will store the character profile for use by anyone. should the user search for a character with keywords the profiles will list on the page for the user to click and open profile. then user will be able to save the profile to their account for later use.
var storageChooseCharForm = [];
var storageCreateOwnCharForm = [];
var storageProfileReadyCard = [];
var VOID_ARRAY_PROFILE_HEADER =[];

var createName;
var createAge;
var createHoroscope;
var createBio;
var createAdjectives;
var createQuirkyFact;
var createProfession;



const generateProfileBtn = document.querySelector('#generateProfileBtn');
const clearProfileBtn = document.querySelector('#restartBtn');
// const saveProfileBtn = document.querySelector('#saveProfileBtn');
const profileHeader = document.querySelector('#profileHeader');
const profileName = document.querySelector('#name');
const profileAge = document.querySelector('#age');
const profileHoroscope = document.querySelector('#horoscope');
const profileType = document.querySelector('#type');
const profileBio = document.querySelector('#bio');
const profileAdjectives = document.querySelector('#adjectives');
const profileQuirkyFact = document.querySelector('#quirky-fact');
const profileProfession = document.querySelector('#profession');
const chooseCharacterForm = document.querySelector('#chooseCharacterForm');
const createOwnCharacterForm = document.querySelector('#createOwnCharacterForm');
const generateCreateOwnProfileBtn = document.querySelector('#generateCreateOwnProfileBtn');
const profileReadyContainer = document.querySelector('#profileReadyContainer');



generateCreateOwnProfileBtn.addEventListener('click', generateCreateOwnProfile);
generateProfileBtn.addEventListener('click', generateProfile);
clearProfileBtn.addEventListener('click', clearProfile);


toggleBtns([restartBtn], false);
removeAllChildNodes(createOwnCharacterForm, storageCreateOwnCharForm);
removeAllChildNodes(profileReadyContainer, storageProfileReadyCard);

// create a object called profile that randomly generates each charactor attribute or character based on the selections from the form
function generateProfile() {
  // get and store form values
  const charGender = document.getElementById('charGender').value;
  const charAge = document.getElementById('charAge').value;
  const charType = document.getElementById('charType').value;

  addRemovedChildNodes(profileReadyContainer, storageProfileReadyCard);

  if (charType == 'famous'){
    // run famous profile
    generateFamousProfile(charAge, charGender);
  } else if (charType == 'notFamous'){
    // run notfamous profile random selection profile
    generateNotFamousProfile(charAge, charGender);
  } else if (charType == 'createYourOwn') {
    // create your own profile form appears
    generateCreateOwnProfileForm();
  } else {
    // if no selection on type run notfamous
    generateNotFamousProfile(charAge, charGender);
  }
  // 
  removeAllChildNodes(chooseCharacterForm, storageChooseCharForm);
  // add a button to save to computer, print, share on social
}

// create each list of attributes to randomly choose from
const NAMES_MALE = ['Jacob','Michael','Ethan','Joshua','Daniel','Alexander','Anthony','William','Christopher','Matthew','Jayden','Andrew','Joseph','David','Noah','Aiden','James','Ryan','Logan','John','Nathan','Elijah','Christian','Gabriel','Benjamin','Jonathan','Tyler','Samuel','Nicholas','Gavin','Dylan','Jackson','Brandon','Caleb','Mason','Angel','Isaac','Evan','Jack','Kevin','Jose','Isaiah','Luke','Landon','Justin','Lucas','Zachary','Jordan','Robert','Aaron','Brayden','Thomas','Cameron','Hunter','Austin','Adrian','Connor','Owen','Aidan','Jason','Julian','Wyatt','Charles','Luis','Carter','Juan','Chase','Diego','Jeremiah','Brody','Xavier','Adam','Carlos','Sebastian','Liam','Hayden','Nathaniel','Henry','Jesus','Ian','Tristan','Bryan','Sean','Cole','Alex','Eric','Brian','Jaden','Carson','Blake','Ayden','Cooper','Dominic','Brady','Caden','Josiah','Kyle','Colton','Kaden','Eli','Miguel','Antonio','Parker','Steven','Alejandro','Riley','Richard','Timothy','Devin','Jesse','Victor','Jake','Joel','Colin','Kaleb','Bryce','Levi','Oliver','Oscar','Vincent','Ashton','Cody','Micah','Preston','Marcus','Max','Patrick','Seth','Jeremy','Peyton','Nolan','Ivan','Damian','Maxwell','Alan','Kenneth','Jonah','Jorge','Mark','Giovanni','Eduardo','Grant','Collin','Gage','Omar','Emmanuel','Trevor','Edward','Ricardo','Cristian','Nicolas','Kayden','George','Jaxon','Paul','Braden','Elias','Andres','Derek','Garrett','Tanner','Malachi','Conner','Fernando','Cesar','Javier','Miles','Jaiden','Alexis','Leonardo','Santiago','Francisco','Cayden','Shane','Edwin','Hudson','Travis','Bryson','Erick','Jace','Hector','Josue','Peter','Jaylen','Mario','Manuel','Abraham','Grayson','Damien','Kaiden','Spencer','Stephen','Edgar','Wesley','Shawn','Trenton','Jared','Jeffrey','Landen','Johnathan','Bradley','Braxton','Ryder','Camden','Roman','Asher','Brendan','Maddox','Sergio','Israel','Andy','Lincoln','Erik','Donovan','Raymond','Avery','Rylan','Dalton','Harrison','Andre','Martin','Keegan','Marco','Jude','Sawyer','Dakota','Leo','Calvin','Kai','Drake','Troy','Zion','Clayton','Roberto','Zane','Gregory','Tucker','Rafael','Kingston','Dominick','Ezekiel','Griffin','Devon','Drew','Lukas','Johnny','Ty','Pedro','Tyson','Caiden','Mateo','Braylon','Cash','Aden','Chance','Taylor','Marcos','Maximus','Ruben','Emanuel','Simon','Corbin','Brennan','Dillon','Skyler','Myles','Xander','Jaxson','Dawson','Kameron','Kyler','Axel','Colby','Jonas','Joaquin','Payton','Brock','Frank','Enrique','Quinn','Emilio','Malik','Grady','Angelo','Julio','Derrick','Raul','Fabian','Corey','Gerardo','Dante','Ezra','Armando','Allen','Theodore','Gael','Amir','Zander','Adan','Maximilian','Randy','Easton','Dustin','Luca','Phillip','Julius','Charlie','Ronald','Jakob','Cade','Brett','Trent','Silas','Keith','Emiliano','Trey','Jalen','Darius','Lane','Jerry','Jaime','Scott','Graham','Weston','Braydon','Anderson','Rodrigo','Pablo','Saul','Danny','Donald','Elliot','Brayan','Dallas','Lorenzo','Casey','Mitchell','Alberto','Tristen','Rowan','Jayson','Gustavo','Aaden','Amari','Dean','Braeden','Declan','Chris','Ismael','Dane','Louis','Arturo','Brenden','Felix','Jimmy','Cohen','Tony','Holden','Reid','Abel','Bennett','Zackary','Arthur','Nehemiah','Ricky','Esteban','Cruz','Finn','Mauricio','Dennis','Keaton','Albert','Marvin','Mathew','Larry','Moises','Issac','Philip','Quentin','Curtis','Greyson','Jameson','Everett','Jayce','Darren','Elliott','Uriel','Alfredo','Hugo','Alec','Jamari','Marshall','Walter','Judah','Jay','Lance','Beau','Ali','Landyn','Yahir','Phoenix','Nickolas','Kobe','Bryant','Maurice','Russell','Leland','Colten','Reed','Davis','Joe','Ernesto','Desmond','Kade','Reece','Morgan','Ramon','Rocco','Orlando','Ryker','Brodie','Paxton','Jacoby','Douglas','Kristopher','Gary','Lawrence','Izaiah','Solomon','Nikolas','Mekhi','Justice','Tate','Jaydon','Salvador','Shaun','Alvin','Eddie','Kane','Davion','Zachariah','Dorian','Titus','Kellen','Camron','Isiah','Javon','Nasir','Milo','Johan','Byron','Jasper','Jonathon','Chad','Marc','Kelvin','Chandler','Sam','Cory','Deandre','River','Reese','Roger','Quinton','Talon','Romeo','Franklin','Noel','Alijah','Guillermo','Gunner','Damon','Jadon','Emerson','Micheal','Bruce','Terry','Kolton','Melvin','Beckett','Porter','August','Brycen','Dayton','Jamarion','Leonel','Karson','Zayden','Keagan','Carl','Khalil','Cristopher','Nelson','Braiden','Moses','Isaias','Roy','Triston','Walker','Kale','Jermaine','Leon','Rodney','Kristian','Mohamed','Ronan','Pierce','Trace','Warren','Jeffery','Maverick','Cyrus','Quincy','Nathanael','Skylar','Tommy','Conor','Noe','Ezequiel','Demetrius','Jaylin','Kendrick','Frederick','Terrance','Bobby','Jamison','Jon','Rohan','Jett','Kieran','Tobias','Ari','Colt','Gideon','Felipe','Kenny','Wilson','Orion','Kamari','Gunnar','Jessie','Alonzo','Gianni','Omari','Waylon','Malcolm','Emmett','Abram','Julien','London','Tomas','Allan','Terrell','Matteo','Tristin','Jairo','Reginald','Brent','Ahmad','Yandel','Rene','Willie','Boston','Billy','Marlon','Trevon','Aydan','Jamal','Aldo','Ariel','Cason','Braylen','Javion','Joey','Rogelio','Ahmed','Dominik','Brendon','Toby','Kody','Marquis','Ulises','Armani','Adriel','Alfonso','Branden','Will','Craig','Ibrahim','Osvaldo','Wade','Harley','Steve','Davin','Deshawn','Kason','Damion','Jaylon','Jefferson','Aron','Brooks','Darian','Gerald','Rolando','Terrence','Enzo','Kian','Ryland','Barrett','Jaeden','Ben','Bradyn','Giovani','Blaine','Madden','Jerome','Muhammad','Ronnie','Layne','Kolby','Leonard','Vicente','Cale','Alessandro','Zachery','Gavyn','Aydin','Xzavier','Malakai','Raphael','Cannon','Rudy','Asa','Darrell','Giancarlo','Elisha','Junior','Zackery','Alvaro','Lewis','Valentin','Deacon','Jase','Harry','Kendall','Rashad','Finnegan','Mohammed','Ramiro','Cedric','Brennen','Santino','Stanley','Tyrone','Chace','Francis','Johnathon','Teagan','Zechariah','Alonso','Kaeden','Kamden','Gilberto','Ray','Karter','Luciano','Nico','Kole','Aryan','Draven','Jamie','Misael','Lee','Alexzander','Camren','Giovanny','Amare','Rhett','Rhys','Rodolfo','Nash','Markus','Deven','Mohammad','Moshe','Quintin','Dwayne','Memphis','Atticus','Davian','Eugene','Jax','Antoine','Wayne','Randall','Semaj','Uriah','Clark','Aidyn','Jorden','Maxim','Aditya','Lawson','Messiah','Korbin','Sullivan','Freddy','Demarcus','Neil','Brice','King','Davon','Elvis','Ace','Dexter','Heath','Duncan','Jamar','Sincere','Irvin','Remington','Kadin','Soren','Tyree','Damarion','Talan','Adrien','Gilbert','Keenan','Darnell','Adolfo','Tristian','Derick','Isai','Rylee','Gauge','Harold','Kareem','Deangelo','Agustin','Coleman','Zavier','Lamar','Emery','Jaydin','Devan','Jordyn','Mathias','Prince','Sage','Seamus','Jasiah','Efrain','Darryl','Arjun','Mike','Roland','Conrad','Kamron','Hamza','Santos','Frankie','Dominique','Marley','Vance','Dax','Jamir','Kylan','Todd','Maximo','Jabari','Matthias','Haiden','Luka','Marcelo','Keon','Layton','Tyrell','Kash','Raiden','Cullen','Donte','Jovani','Cordell','Kasen','Rory','Alfred','Darwin','Ernest','Bailey','Gaige','Hassan','Jamarcus','Killian','Augustus','Trevin','Zain','Ellis','Rex','Yusuf','Bruno','Jaidyn','Justus','Ronin','Humberto','Jaquan','Josh','Kasey','Winston','Dashawn','Lucian','Matias','Sidney','Ignacio','Nigel','Van','Elian','Finley','Jaron','Addison','Aedan','Braedon','Jadyn','Konner','Zayne','Franco','Niko','Savion','Cristofer','Deon','Krish','Anton','Brogan','Cael','Coby','Kymani','Marcel','Yair','Dale','Bo','Jordon','Samir','Darien','Zaire','Ross','Vaughn','Devyn','Kenyon','Clay','Dario','Ishaan','Jair','Kael','Adonis','Jovanny','Clinton','Rey','Chaim','German','Harper','Nathen','Rigoberto','Sonny','Glenn','Octavio','Blaze','Keshawn','Ralph','Ean','Nikhil','Rayan','Sterling','Branson','Jadiel','Dillan','Jeramiah','Koen','Konnor','Antwan','Houston','Tyrese','Dereon','Leonidas','Zack','Fisher','Jaydan','Quinten','Nick','Urijah','Darion','Jovan','Salvatore','Beckham','Jarrett','Antony','Eden','Makai','Zaiden','Broderick','Camryn','Malaki','Nikolai','Howard','Immanuel','Demarion','Valentino','Jovanni','Ayaan','Ethen','Leandro','Royce','Yael','Yosef','Jean','Marquise','Alden','Leroy','Gaven','Jovany','Tyshawn','Aarav','Kadyn','Milton','Zaid','Kelton','Tripp','Kamren','Slade','Hezekiah','Jakobe','Nathanial','Rishi','Shamar','Geovanni','Pranav','Roderick','Bentley','Clarence','Lyric','Bernard','Carmelo','Denzel','Maximillian','Reynaldo','Cassius','Gordon','Reuben','Samson','Yadiel','Jayvon','Reilly','Sheldon','Abdullah','Jagger','Thaddeus','Case','Kyson','Lamont','Chaz','Makhi','Jan','Marques','Oswaldo','Donavan','Keyon','Kyan','Simeon','Trystan','Andreas','Dangelo','Landin','Reagan','Turner','Arnav','Brenton','Callum','Jayvion','Bridger','Sammy','Deegan','Jaylan','Lennon','Odin','Abdiel','Jerimiah','Eliezer','Bronson','Cornelius','Pierre','Cortez','Baron','Carlo','Carsen','Fletcher','Izayah','Kolten','Damari','Hugh','Jensen','Yurem'];

const NAMES_FEMALE = ['Emma','Isabella','Emily','Madison','Ava','Olivia','Sophia','Abigail','Elizabeth','Chloe','Samantha','Addison','Natalie','Mia','Alexis','Alyssa','Hannah','Ashley','Ella','Sarah','Grace','Taylor','Brianna','Lily','Hailey','Anna','Victoria','Kayla','Lillian','Lauren','Kaylee','Allison','Savannah','Nevaeh','Gabriella','Sofia','Makayla','Avery','Riley','Julia','Leah','Aubrey','Jasmine','Audrey','Katherine','Morgan','Brooklyn','Destiny','Sydney','Alexa','Kylie','Brooke','Kaitlyn','Evelyn','Layla','Madeline','Kimberly','Zoe','Jessica','Peyton','Alexandra','Claire','Madelyn','Maria','Mackenzie','Arianna','Jocelyn','Amelia','Angelina','Trinity','Andrea','Maya','Valeria','Sophie','Rachel','Vanessa','Aaliyah','Mariah','Gabrielle','Katelyn','Ariana','Bailey','Camila','Jennifer','Melanie','Gianna','Charlotte','Paige','Autumn','Payton','Faith','Sara','Isabelle','Caroline','Genesis','Isabel','Mary','Zoey','Gracie','Megan','Haley','Mya','Michelle','Molly','Stephanie','Nicole','Jenna','Natalia','Sadie','Jada','Serenity','Lucy','Ruby','Eva','Kennedy','Rylee','Jayla','Naomi','Rebecca','Lydia','Daniela','Bella','Keira','Adriana','Lilly','Hayden','Miley','Katie','Jade','Jordan','Gabriela','Amy','Angela','Melissa','Valerie','Giselle','Diana','Amanda','Kate','Laila','Reagan','Jordyn','Kylee','Danielle','Briana','Marley','Leslie','Kendall','Catherine','Liliana','Mckenzie','Jacqueline','Ashlyn','Reese','Marissa','London','Juliana','Shelby','Cheyenne','Angel','Daisy','Makenzie','Miranda','Erin','Amber','Alana','Ellie','Breanna','Ana','Mikayla','Summer','Piper','Adrianna','Jillian','Sierra','Jayden','Sienna','Alicia','Lila','Margaret','Alivia','Brooklynn','Karen','Violet','Sabrina','Stella','Aniyah','Annabelle','Alexandria','Kathryn','Skylar','Aliyah','Delilah','Julianna','Kelsey','Khloe','Carly','Amaya','Mariana','Christina','Alondra','Tessa','Eliana','Bianca','Jazmin','Clara','Vivian','Josephine','Delaney','Scarlett','Elena','Cadence','Alexia','Maggie','Laura','Nora','Ariel','Elise','Nadia','Mckenna','Chelsea','Lyla','Alaina','Jasmin','Hope','Leila','Caitlyn','Cassidy','Makenna','Allie','Izabella','Eden','Callie','Haylee','Caitlin','Kendra','Karina','Kyra','Kayleigh','Addyson','Kiara','Jazmine','Karla','Camryn','Alina','Lola','Kyla','Kelly','Fatima','Tiffany','Kira','Crystal','Mallory','Esmeralda','Alejandra','Eleanor','Angelica','Jayda','Abby','Kara','Veronica','Carmen','Jamie','Ryleigh','Valentina','Allyson','Dakota','Kamryn','Courtney','Cecilia','Madeleine','Aniya','Alison','Esther','Heaven','Aubree','Lindsey','Leilani','Nina','Melody','Macy','Ashlynn','Joanna','Cassandra','Alayna','Kaydence','Madilyn','Aurora','Heidi','Emerson','Kimora','Madalyn','Erica','Josie','Katelynn','Guadalupe','Harper','Ivy','Lexi','Camille','Savanna','Dulce','Daniella','Lucia','Emely','Joselyn','Kiley','Kailey','Miriam','Cynthia','Rihanna','Georgia','Rylie','Harmony','Kiera','Kyleigh','Monica','Bethany','Kaylie','Cameron','Teagan','Cora','Brynn','Ciara','Genevieve','Alice','Maddison','Eliza','Tatiana','Jaelyn','Erika','Ximena','April','Marely','Julie','Danica','Presley','Brielle','Julissa','Angie','Iris','Brenda','Hazel','Rose','Malia','Shayla','Fiona','Phoebe','Nayeli','Paola','Kaelyn','Selena','Audrina','Rebekah','Carolina','Janiyah','Michaela','Penelope','Janiya','Anastasia','Adeline','Ruth','Sasha','Denise','Holly','Madisyn','Hanna','Tatum','Marlee','Nataly','Helen','Janelle','Lizbeth','Serena','Anya','Jaslene','Kaylin','Jazlyn','Nancy','Lindsay','Desiree','Hayley','Itzel','Imani','Madelynn','Asia','Kadence','Madyson','Talia','Jane','Kayden','Annie','Amari','Bridget','Raegan','Jadyn','Celeste','Jimena','Luna','Yasmin','Emilia','Annika','Estrella','Sarai','Lacey','Ayla','Alessandra','Willow','Nyla','Dayana','Lilah','Lilliana','Natasha','Hadley','Harley','Priscilla','Claudia','Allisson','Baylee','Brenna','Brittany','Skyler','Fernanda','Danna','Melany','Cali','Lia','Macie','Lyric','Logan','Gloria','Lana','Mylee','Cindy','Lilian','Amira','Anahi','Alissa','Anaya','Lena','Ainsley','Sandra','Noelle','Marisol','Meredith','Kailyn','Lesly','Johanna','Diamond','Evangeline','Juliet','Kathleen','Meghan','Paisley','Athena','Hailee','Rosa','Wendy','Emilee','Sage','Alanna','Elaina','Cara','Nia','Paris','Casey','Dana','Emery','Rowan','Aubrie','Kaitlin','Jaden','Kenzie','Kiana','Viviana','Norah','Lauryn','Perla','Amiyah','Alyson','Rachael','Shannon','Aileen','Miracle','Lillie','Danika','Heather','Kassidy','Taryn','Tori','Francesca','Kristen','Amya','Elle','Kristina','Cheyanne','Haylie','Patricia','Anne','Samara','Skye','Kali','America','Lexie','Parker','Halle','Londyn','Abbigail','Linda','Hallie','Saniya','Bryanna','Bailee','Jaylynn','Mckayla','Quinn','Jaelynn','Jaida','Caylee','Jaiden','Melina','Abril','Sidney','Kassandra','Elisabeth','Adalyn','Kaylynn','Mercedes','Yesenia','Elliana','Brylee','Dylan','Isabela','Ryan','Ashlee','Daphne','Kenya','Marina','Christine','Mikaela','Kaitlynn','Justice','Saniyah','Jaliyah','Ingrid','Marie','Natalee','Joy','Juliette','Simone','Adelaide','Krystal','Kennedi','Mila','Tamia','Addisyn','Aylin','Dayanara','Sylvia','Clarissa','Maritza','Virginia','Braelyn','Jolie','Jaidyn','Kinsley','Kirsten','Laney','Marilyn','Whitney','Janessa','Raquel','Anika','Kamila','Aria','Rubi','Adelyn','Amara','Ayanna','Teresa','Zariah','Kaleigh','Amani','Carla','Yareli','Gwendolyn','Paulina','Nathalie','Annabella','Jaylin','Tabitha','Deanna','Madalynn','Journey','Aiyana','Skyla','Yaretzi','Ada','Liana','Karlee','Jenny','Myla','Cristina','Myah','Lisa','Tania','Isis','Jayleen','Jordin','Arely','Azul','Helena','Aryanna','Jaqueline','Lucille','Destinee','Martha','Zoie','Arielle','Liberty','Marlene','Elisa','Isla','Noemi','Raven','Jessie','Aleah','Kailee','Kaliyah','Lilyana','Haven','Tara','Giana','Camilla','Maliyah','Irene','Carley','Maeve','Lea','Macey','Sharon','Alisha','Marisa','Jaylene','Kaya','Scarlet','Siena','Adyson','Maia','Shiloh','Tiana','Jaycee','Gisselle','Yazmin','Eve','Shyanne','Arabella','Sherlyn','Sariah','Amiya','Kiersten','Madilynn','Shania','Aleena','Finley','Kinley','Kaia','Aliya','Taliyah','Pamela','Yoselin','Ellen','Carlie','Monserrat','Jakayla','Reyna','Yaritza','Carolyn','Clare','Lorelei','Paula','Zaria','Gracelyn','Kasey','Regan','Alena','Angelique','Regina','Britney','Emilie','Mariam','Jaylee','Julianne','Greta','Elyse','Lainey','Kallie','Felicity','Zion','Aspen','Carlee','Annalise','Iliana','Larissa','Akira','Sonia','Catalina','Phoenix','Joslyn','Anabelle','Mollie','Susan','Judith','Destiney','Hillary','Janet','Katrina','Mareli','Ansley','Kaylyn','Alexus','Gia','Maci','Elsa','Stacy','Kaylen','Carissa','Haleigh','Lorena','Jazlynn','Milagros','Luz','Leanna','Renee','Shaniya','Charlie','Abbie','Cailyn','Cherish','Elsie','Jazmyn','Elaine','Emmalee','Luciana','Dahlia','Jamya','Belinda','Mariyah','Chaya','Dayami','Rhianna','Yadira','Aryana','Rosemary','Armani','Cecelia','Celia','Barbara','Cristal','Eileen','Rayna','Campbell','Amina','Aisha','Amirah','Ally','Araceli','Averie','Mayra','Sanaa','Patience','Leyla','Selah','Zara','Chanel','Kaiya','Keyla','Miah','Aimee','Giovanna','Amelie','Kelsie','Alisson','Angeline','Dominique','Adrienne','Brisa','Cierra','Paloma','Isabell','Precious','Alma','Charity','Jacquelyn','Janae','Frances','Shyla','Janiah','Kierra','Karlie','Annabel','Jacey','Karissa','Jaylah','Xiomara','Edith','Marianna','Damaris','Deborah','Jaylyn','Evelin','Mara','Olive','Ayana','India','Kendal','Kayley','Tamara','Briley','Charlee','Nylah','Abbey','Moriah','Saige','Savanah','Giada','Hana','Lizeth','Matilda','Ann','Jazlene','Gillian','Beatrice','Ireland','Karly','Mylie','Yasmine','Ashly','Kenna','Maleah','Corinne','Keely','Tanya','Tianna','Adalynn','Ryann','Salma','Areli','Karma','Shyann','Kaley','Theresa','Evie','Gina','Roselyn','Kaila','Jaylen','Natalya','Meadow','Rayne','Aliza','Yuliana','June','Lilianna','Nathaly','Ali','Alisa','Aracely','Belen','Tess','Jocelynn','Litzy','Makena','Abagail','Giuliana','Joyce','Libby','Lillianna','Thalia','Tia','Sarahi','Zaniyah','Kristin','Lorelai','Mattie','Taniya','Jaslyn','Gemma','Valery','Lailah','Mckinley','Micah','Deja','Frida','Brynlee','Jewel','Krista','Mira','Yamilet','Adison','Carina','Karli','Magdalena','Stephany','Charlize','Raelynn','Aliana','Cassie','Mina','Karley','Shirley','Marlie','Alani','Taniyah','Cloe','Sanai','Lina','Nola','Anabella','Dalia','Raina','Mariela','Ariella','Bria','Kamari','Monique','Ashleigh','Reina','Alia','Ashanti','Lara','Lilia','Justine','Leia','Maribel','Abigayle','Tiara','Alannah','Princess','Sydnee','Kamora','Paityn','Payten','Naima','Gretchen','Heidy','Nyasia','Livia','Marin','Shaylee','Maryjane','Laci','Nathalia','Azaria','Anabel','Chasity','Emmy','Izabelle','Denisse','Emelia','Mireya','Shea','Amiah','Dixie','Maren','Averi','Esperanza','Micaela','Selina','Alyvia','Chana','Avah','Donna','Kaylah','Ashtyn','Karsyn','Makaila','Shayna','Essence','Leticia','Miya','Rory','Desirae','Kianna','Laurel','Neveah','Amaris','Hadassah','Dania','Hailie','Jamiya','Kathy','Laylah','Riya','Diya','Carleigh','Iyana','Kenley','Sloane','Elianna'];

const LAST_NAMES = ['Smith','Johnson','Williams','Brown','Jones','Miller','Davis','Garcia','Rodriguez','Wilson','Martinez','Anderson','Taylor','Thomas','Hernandez','Moore','Martin','Jackson','Thompson','White','Lopez','Lee','Gonzalez','Harris','Clark','Lewis','Robinson','Walker','Perez','Hall','Young','Allen','Sanchez','Wright','King','Scott','Green','Baker','Adams','Nelson','Hill','Ramirez','Campbell','Mitchell','Roberts','Carter','Phillips','Evans','Turner','Torres','Parker','Collins','Edwards','Stewart','Flores','Morris','Nguyen','Murphy','Rivera','Cook','Rogers','Morgan','Peterson','Cooper','Reed','Bailey','Bell','Gomez','Kelly','Howard','Ward','Cox','Diaz','Richardson','Wood','Watson','Brooks','Bennett','Gray','James','Reyes','Cruz','Hughes','Price','Myers','Long','Foster','Sanders','Ross','Morales','Powell','Sullivan','Russell','Ortiz','Jenkins','Gutierrez','Perry','Butler','Barnes','Fisher','Henderson','Coleman','Simmons','Patterson','Jordan','Reynolds','Hamilton','Graham','Kim','Gonzales','Alexander','Ramos','Wallace','Griffin','West','Cole','Hayes','Chavez','Gibson','Bryant','Ellis','Stevens','Murray','Ford','Marshall','Owens','Mcdonald','Harrison','Ruiz','Kennedy','Wells','Alvarez','Woods','Mendoza','Castillo','Olson','Webb','Washington','Tucker','Freeman','Burns','Henry','Vasquez','Snyder','Simpson','Crawford','Jimenez','Porter','Mason','Shaw','Gordon','Wagner','Hunter','Romero','Hicks','Dixon','Hunt','Palmer','Robertson','Black','Holmes','Stone','Meyer','Boyd','Mills','Warren','Fox','Rose','Rice','Moreno','Schmidt','Patel','Ferguson','Nichols','Herrera','Medina','Ryan','Fernandez','Weaver','Daniels','Stephens','Gardner','Payne','Kelley','Dunn','Pierce','Arnold','Tran','Spencer','Peters','Hawkins','Grant','Hansen','Castro','Hoffman','Hart','Elliott','Cunningham','Knight','Bradley','Carroll','Hudson','Duncan','Armstrong','Berry','Andrews','Johnston','Ray','Lane','Riley','Carpenter','Perkins','Aguilar','Silva','Richards','Willis','Matthews','Chapman','Lawrence','Garza','Vargas','Watkins','Wheeler','Larson','Carlson','Harper','George','Greene','Burke','Guzman','Morrison','Munoz','Jacobs','Obrien','Lawson','Franklin','Lynch','Bishop','Carr','Salazar','Austin','Mendez','Gilbert','Jensen','Williamson','Montgomery','Harvey','Oliver','Howell','Dean','Hanson','Weber','Garrett','Sims','Burton','Fuller','Soto','Mccoy','Welch','Chen','Schultz','Walters','Reid','Fields','Walsh','Little','Fowler','Bowman','Davidson','May','Day','Schneider','Newman','Brewer','Lucas','Holland','Wong','Banks','Santos','Curtis','Pearson','Delgado','Valdez','Pena','Rios','Douglas','Sandoval','Barrett','Hopkins','Keller','Guerrero','Stanley','Bates','Alvarado','Beck','Ortega','Wade','Estrada','Contreras','Barnett','Caldwell','Santiago','Lambert','Powers','Chambers','Nunez','Craig','Leonard','Lowe','Rhodes','Byrd','Gregory','Shelton','Frazier','Becker','Maldonado','Fleming','Vega','Sutton','Cohen','Jennings','Parks','Mcdaniel','Watts','Barker','Norris','Vaughn','Vazquez','Holt','Schwartz','Steele','Benson','Neal','Dominguez','Horton','Terry','Wolfe','Hale','Lyons','Graves','Haynes','Miles','Park','Warner','Padilla','Bush','Thornton','Mccarthy','Mann','Zimmerman','Erickson','Fletcher','Mckinney','Page','Dawson','Joseph','Marquez','Reeves','Klein','Espinoza','Baldwin','Moran','Love','Robbins','Higgins','Ball','Cortez','Le','Griffith','Bowen','Sharp','Cummings','Ramsey','Hardy','Swanson','Barber','Acosta','Luna','Chandler','Blair','Daniel','Cross','Simon','Dennis','Oconnor','Quinn','Gross','Navarro','Moss','Fitzgerald','Doyle','Mclaughlin','Rojas','Rodgers','Stevenson','Singh','Yang','Figueroa','Harmon','Newton','Paul','Manning','Garner','Mcgee','Reese','Francis','Burgess','Adkins','Goodman','Curry','Brady','Christensen','Potter','Walton','Goodwin','Mullins','Molina','Webster','Fischer','Campos','Avila','Sherman','Todd','Chang','Blake','Malone','Wolf','Hodges','Juarez','Gill','Farmer','Hines','Gallagher','Duran','Hubbard','Cannon','Miranda','Wang','Saunders','Tate','Mack','Hammond','Carrillo','Townsend','Wise','Ingram','Barton','Mejia','Ayala','Schroeder','Hampton','Rowe','Parsons','Frank','Waters','Strickland','Osborne','Maxwell','Chan','Deleon','Norman','Harrington','Casey','Patton','Logan','Bowers','Mueller','Glover','Floyd','Hartman','Buchanan','Cobb','French','Kramer','Mccormick','Clarke','Tyler','Gibbs','Moody','Conner','Sparks','Mcguire','Leon','Bauer','Norton','Pope','Flynn','Hogan','Robles','Salinas','Yates','Lindsey','Lloyd','Marsh','Mcbride','Owen','Solis','Pham','Lang','Pratt','Lara','Brock','Ballard','Trujillo','Shaffer','Drake','Roman','Aguirre','Morton','Stokes','Lamb','Pacheco','Patrick','Cochran','Shepherd','Cain','Burnett','Hess','Li','Cervantes','Olsen','Briggs','Ochoa','Cabrera','Velasquez','Montoya','Roth','Meyers','Cardenas','Fuentes','Weiss','Hoover','Wilkins','Nicholson','Underwood','Short','Carson','Morrow','Colon','Holloway','Summers','Bryan','Petersen','Mckenzie','Serrano','Wilcox','Carey','Clayton','Poole','Calderon','Gallegos','Greer','Rivas','Guerra','Decker','Collier','Wall','Whitaker','Bass','Flowers','Davenport','Conley','Houston','Huff','Copeland','Hood','Monroe','Massey','Roberson','Combs','Franco','Larsen','Pittman','Randall','Skinner','Wilkinson','Kirby','Cameron','Bridges','Anthony','Richard','Kirk','Bruce','Singleton','Mathis','Bradford','Boone','Abbott','Charles','Allison','Sweeney','Atkinson','Horn','Jefferson','Rosales','York','Christian','Phelps','Farrell','Castaneda','Nash','Dickerson','Bond','Wyatt','Foley','Chase','Gates','Vincent','Mathews','Hodge','Garrison','Trevino','Villarreal','Heath','Dalton','Valencia','Callahan','Hensley','Atkins','Huffman','Roy','Boyer','Shields','Lin','Hancock','Grimes','Glenn','Cline','Delacruz','Camacho','Dillon','Parrish','Oneill','Melton','Booth','Kane','Berg','Harrell','Pitts','Savage','Wiggins','Brennan','Salas','Marks','Russo','Sawyer','Baxter','Golden','Hutchinson','Liu','Walter','Mcdowell','Wiley','Rich','Humphrey','Johns','Koch','Suarez','Hobbs','Beard','Gilmore','Ibarra','Keith','Macias','Khan','Andrade','Ware','Stephenson','Henson','Wilkerson','Dyer','Mcclure','Blackwell','Mercado','Tanner','Eaton','Clay','Barron','Beasley','Oneal','Preston','Small','Wu','Zamora','Macdonald','Vance','Snow','Mcclain','Stafford','Orozco','Barry','English','Shannon','Kline','Jacobson','Woodard','Huang','Kemp','Mosley','Prince','Merritt','Hurst','Villanueva','Roach','Nolan','Lam','Yoder','Mccullough','Lester','Santana','Valenzuela','Winters','Barrera','Leach','Orr','Berger','Mckee','Strong','Conway','Stein','Whitehead','Bullock','Escobar','Knox','Meadows','Solomon','Velez','Odonnell','Kerr','Stout','Blankenship','Browning','Kent','Lozano','Bartlett','Pruitt','Buck','Barr','Gaines','Durham','Gentry','Mcintyre','Sloan','Melendez','Rocha','Herman','Sexton','Moon','Hendricks','Rangel','Stark','Lowery','Hardin','Hull','Sellers','Ellison','Calhoun','Gillespie','Mora','Knapp','Mccall','Morse','Dorsey','Weeks','Nielsen','Livingston','Leblanc','Mclean','Bradshaw','Glass','Middleton','Buckley','Schaefer','Frost','Howe','House','Mcintosh','Ho','Pennington','Reilly','Hebert','Mcfarland','Hickman','Noble','Spears','Conrad','Arias','Galvan','Velazquez','Huynh','Frederick','Randolph','Cantu','Fitzpatrick','Mahoney','Peck','Villa','Michael','Donovan','Mcconnell','Walls','Boyle','Mayer','Zuniga','Giles','Pineda','Pace','Hurley','Mays','Mcmillan','Crosby','Ayers','Case','Bentley','Shepard','Everett','Pugh','David','Mcmahon','Dunlap','Bender','Hahn','Harding','Acevedo','Raymond','Blackburn','Duffy','Landry','Dougherty','Bautista','Shah','Potts','Arroyo','Valentine','Meza','Gould','Vaughan','Fry','Rush','Avery','Herring','Dodson','Clements','Sampson','Tapia','Bean','Lynn','Crane','Farley','Cisneros','Benton','Ashley','Mckay','Finley','Best','Blevins','Friedman','Moses','Sosa','Blanchard','Huber','Frye','Krueger','Bernard','Rosario','Rubio','Mullen','Benjamin','Haley','Chung','Moyer','Choi','Horne','Yu','Woodward','Ali','Nixon','Hayden','Rivers','Estes','Mccarty','Richmond','Stuart','Maynard','Brandt','Oconnell','Hanna','Sanford','Sheppard','Church','Burch','Levy','Rasmussen','Coffey','Ponce','Faulkner','Donaldson','Schmitt','Novak','Costa','Montes','Booker','Cordova','Waller','Arellano','Maddox','Mata','Bonilla','Stanton','Compton','Kaufman','Dudley','Mcpherson','Beltran','Dickson','Mccann','Villegas','Proctor','Hester','Cantrell','Daugherty','Cherry','Bray','Davila','Rowland','Levine','Madden','Spence','Good','Irwin','Werner','Krause','Petty','Whitney','Baird','Hooper','Pollard','Zavala','Jarvis','Holden','Haas','Hendrix','Mcgrath','Bird','Lucero','Terrell','Riggs','Joyce','Mercer','Rollins','Galloway','Duke','Odom','Andersen','Downs','Hatfield','Benitez','Archer','Huerta','Travis','Mcneil','Hinton','Zhang','Hays','Mayo','Fritz','Branch','Mooney','Ewing','Ritter','Esparza','Frey','Braun','Gay','Riddle','Haney','Kaiser','Holder','Chaney','Mcknight','Gamble','Vang','Cooley','Carney','Cowan','Forbes','Ferrell','Davies','Barajas','Shea','Osborn','Bright','Cuevas','Bolton','Murillo','Lutz','Duarte','Kidd','Key','Cooke'];

const UNISEX_NAMES = ['Avery', 'Riley', 'Peyton', 'Logan', 'Taylor', 'Ryan', 'Jordan', 'Cameron', 'Blake', 'Skylar', 'Emerson', 'Phoenix', 'Hunter', 'Amari', 'River', 'Casey', 'Tatum', 'Alex', 'Addison', 'Tyler', 'Avery', 'Riley', 'Peyton', 'Logan', 'Taylor', 'Ryan', 'Jordan', 'Cameron', 'Blake', 'Skylar', 'Emerson', 'Phoenix', 'Hunter', 'Amari', 'River', 'Casey', 'Tatum', 'Alex', 'Addison', 'Tyler', 'Landry', 'Azariah', 'Oakley', 'Lennon', 'Charlie', 'Skyler', 'Dakota', 'Armani', 'Phoenix', 'Justice', 'Casey', 'Emory', 'Remy', 'Emerson', 'Amari', 'Hayden', 'River', 'Milan', 'Tatum', 'Jessie', 'Finley', 'Riley', 'Rowan', 'Sage', 'Jamie', 'Rory', 'Harley', 'Leighton', 'Peyton', 'Dallas', 'Remington', 'Quinn', 'Alexis', 'Sawyer', 'Kamryn', 'Parker', 'Avery', 'Eden', 'Lyric', 'Elliot', 'Elliott', 'Reese', 'Zion', 'Rylan', 'Jordan', 'Angel', 'Taylor', 'Emery', 'Payton', 'Teagan', 'Marley', 'Morgan', 'London', 'Ariel', 'Karter', 'Kendall', 'Kai', 'Blake', 'Jordyn', 'Rylee', 'Skylar', 'Kayden', 'Dylan', 'Cameron', 'Micah', 'Reagan', 'Ryan', 'Logan', 'Jayden', 'Hunter', 'Harper', 'Carter'];

const POSITIVE_ADJECTIVE_LIST = ['Accomplished', 'Active', 'Adept', 'Affectionate', 'Agreeable', 'Brave', 'Bright', 'Capable', 'Charming', 'Considerate', 'Courageous', 'Creative', 'Determined', 'Diplomatic', 'Energetic', 'Engaging', 'Expert', 'Faithful', 'Fearless', 'Frank', 'Friendly', 'Funny', 'Generous', 'Giving', 'Hardworking', 'Helpful', 'Humorous', 'Imaginative', 'Kind', 'Knowledgeable', 'Likable', 'Loving', 'Loyal', 'Marvelous', 'Nice', 'Optimistic', 'Passionate', 'Patient', 'Persistent', 'Philosophical', 'Plucky', 'Polite', 'Powerful', 'Proficient', 'Romantic', 'Self-confident', 'Sensible', 'Sincere', 'Sincere', 'Thoughtful', 'Warmhearted', 'Willing'];

const NEGATIVE_ADJECTIVE_LIST = ['Aggressive', 'Arrogant', 'Boring', 'Careless', 'Cruel', 'Cowardly', 'Deceitful', 'Dishonest', 'Fussy', 'Greedy', 'Grumpy', 'Harsh', 'Impatient', 'Impulsive', 'Jealous', 'Moody', 'Overcritical', 'Rude', 'Selfish', 'Untrustworthy', 'Unhappy', 'aggressive', 'aloof', 'arrogant', 'belligerent', 'big-headed', 'bitchy', 'boring', 'bossy', 'careless', 'clinging', 'compulsive', 'cowardly', 'cruel', 'cunning', 'cynical', 'deceitful', 'detached', 'dishonest', 'dogmatic', 'domineering', 'finicky', 'flirtatious', 'foolish', 'foolhardy', 'fussy', 'greedy', 'grumpy', 'gullible', 'harsh', 'impatient', 'impolite', 'impulsive', 'inconsiderate', 'inconsistent', 'indecisive', 'indiscreet', 'inflexible', 'interfering', 'intolerant', 'irresponsible', 'jealous', 'lazy', 'Machiavellian', 'materialistic', 'mean', 'miserly', 'moody', 'narrow-minded', 'nasty', 'naughty', 'nervous', 'obsessive', 'obstinate', 'overcritical', 'overemotional', 'patronizing', 'perverse', 'pessimistic', 'possessive', 'quarrelsome', 'quick-tempered', 'resentful', 'rude', 'ruthless', 'sarcastic', 'secretive', 'selfish', 'self-centred', 'self-indulgent', 'silly', 'sneaky', 'stingy', 'stubborn', 'stupid', 'superficial', 'timid', 'touchy', 'thoughtless', 'unkind', 'unpredictable', 'unreliable', 'untidy', 'untrustworthy', 'vague', 'vain', 'vengeful', 'vulgar', 'weak-willed'];

const PROFESSION = ['Accountant', 'Actor', 'Administrator', 'Aerospace Engineer', 'Agricultural Engineer', 'Anthropologist', 'Architect', 'Astronomer', 'Auditor', 'Banking Analyst', 'Bartender', 'Biologist', 'Blacksmiths', 'Broker', 'Buyer', 'Carpenter', 'Chef', 'Chemist', 'Childcare Worker', 'Civil Engineer', 'Clergy', 'Computer Scientist', 'Conservation Worker', 'Construction Worker', 'Cook', 'Cosmetologist', 'Craftsperson', 'Customer Experience Design', 'Data Analyst', 'Data Scientist', 'Dental Assistant', 'Development Manager', 'Ecommerce Seller', 'Electrical Engineer', 'Emergency Medical Technician', 'Engineer', 'Environmental Engineer', 'Epidemiologist', 'Event Planner', 'Farmer', 'Financial Analyst', 'Financial Manager', 'Fishery Worker', 'Flight Attendant', 'Forestry Worker', 'Game Designer', 'General Manager', 'Government Worker', 'Health Educator', 'Hotel Manager', 'Import/Export Specialist', 'Information Design', 'Information Technology Manager', 'Interpreter', 'Laboratory Technician', 'Landscape Architect', 'Lawyer', 'Librarian', 'Logistics Engineer', 'Manicurists', 'Manufacturing Worker', 'Mathematician', 'Medical Administration', 'Medical Technician', 'Mental Health Counselor', 'Miner', 'Nanny', 'Nurse', 'Occupational Therapist', 'Operations Analyst', 'Optometrist', 'Personal Care Aid', 'Photographer', 'Physicist', 'Plumber', 'Politician', 'Product Design', 'Professor', 'Project Manager', 'Property Manager', 'Purchasing Manager', 'Quality Control Analyst', 'Reporter', 'Restaurant Manager', 'Robotics Engineer', 'Sales Manager', 'Scientist', 'Service Manager', 'Small Business Owner', 'Sociologist', 'Software Developer', 'Space Scientist', 'Steel Worker', 'Supervisor', 'Surveyor', 'Systems Analyst', 'Teacher', 'Technical Writer', 'Technology Architect', 'Tour Guide', 'Transportation Engineer', 'Tutor', 'Veterinarian', 'Waiter', 'Wind Energy Engineer', 'Zoologist', 'vengeful', 'vulgar', 'weak-willed', 'Accountant', 'Actuary', 'Advertising Manager', 'Agent', 'Air Traffic Controller', 'Archeologist', 'Art Director', 'Athlete', 'Baker', 'Barista', 'Bioinformatics Scientist', 'Biomedical Engineer', 'Board Member', 'Business Analyst', 'Captain naval', 'Cashier', 'Chemical Engineer', 'Chief Executive', 'Choreographer', 'Cleaner', 'Compliance Manager', 'Concierge', 'Construction Manager', 'Consultant', 'Copywriter', 'Courier', 'Curator', 'Customer Service', 'Data Architect', 'Database Administrator', 'Dentist', 'Director', 'Economist', 'Electrician', 'Energy Engineer', 'Entrepreneur', 'Environmental Science', 'Equipment Operator', 'Executive Management', 'Fashion Designer', 'Financial Controller', 'Firefighter', 'Fitness Trainer', 'Floral Designer', 'Funeral Attendant', 'Gardener', 'Geographer', 'Hair Stylist', 'Homemaker', 'Human Resources', 'Industrial Design', 'Information Scientist', 'Installation & Maintenance', 'Journalist', 'Laborer', 'Landscaping', 'Legal Secretary', 'Lifeguard', 'Management Consultant', 'Manufacturing Engineer', 'Marketing Analyst', 'Mechanical Engineer', 'Medical Assistant', 'Medical Technologist', 'Midwife', 'Musician', 'Network Administrator', 'Occupational Health & Safety', 'Office Clerk', 'Operations Manager', 'Performance Artist', 'Pharmacist', 'Physician', 'Pilot', 'Police Officer', 'Producer', 'Production Manager', 'Program Manager', 'Promotion Manager', 'Public Relations', 'Quality Assurance Manager', 'Railroad Engineer', 'Researcher', 'Rigger', 'Sales Engineer', 'Salesperson', 'Service Attendant', 'Shop Salesperson', 'Social Worker', 'Software Architect', 'Solar Energy Technician', 'Statistician', 'Stonemason', 'Surgeon', 'System Administrator', 'Tailor', 'Technical Support', 'Technician', 'Testing Engineer', 'Translator', 'Truck Driver', 'Urban Design', 'Visual Designer', 'Web Developer', 'Writer'];

const HOROSCOPE = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const QUIRKY_FACT = ['I make babies cry for good luck', 'I sleep with one eye open', 'I turn dead bodies into ocean reefs', 'I ride a flying bicycle', 'I have a 916 pound padlock', 'I poop most of what I eat'];

// famous people array
const FAMOUS_FEMALES = [['Michelle Obama', '57', 'Capricorn', 'Michelle Obama is a lawyer and writer who was the first lady of the United States from 2009 to 2017. She is the wife of the 44th U.S. president, Barack Obama. As first lady, Michelle focused her attention on social issues such as poverty, healthy living and education. She loved the idea that she can continue to learn, grow, and change for the rest of her life.', 'Classy/Hard working', 'She has also seen The Brady Bunch so many times, she memorized the scripts of each episode.', 'Lawyer, Writer'], ['Kim Kardashian', '40', 'Libra', 'Kim Kardashian catapulted into fame when a scandalous video showcasing her sexual exploits with former boyfriend, rapper Ray J., was leaked online. Since then she has been able to capitalize on her fame with her curvaceous style, a hit reality TV show, and a string of workout DVDs. In 2006, she opened the boutique D-A-S-H with her sisters, Kourtney and Khloé. In 2014 she famously married rapper Kanye West.', 'Sweet/Smart', 'She doesn’t fear bees and would even hold and play with them when she was younger. Plus, she’s never been stung.', 'Media personality, Socialite, Model']];

const FAMOUS_MALES = [['Barack Obama', '59', 'Leo', 'Barack Obama was the 44th president of the United States and the first African American commander-in-chief. He served two terms, in 2008 and 2012. The son of parents from Kenya and Kansas, Obama was born and raised in Hawaii. He graduated from Columbia University and Harvard Law School, where he was president of the Harvard Law Review. After serving on the Illinois State Senate, he was elected a U.S. senator representing Illinois in 2004. He and wife Michelle Obama have two daughters, Malia and Sasha. ', 'Intelligent/Change', 'Obama was the eighth U.S. president in history who was known to be left-handed.', 'Politician, Lawyer, Author']];

const FAMOUS_UNISEX = [['Elton John', '74', 'Aries', 'Barack Obama was the 44th president of the United States and the first African American commander-in-chief. He served two terms, in 2008 and 2012. The son of parents from Kenya and Kansas, Obama was born and raised in Hawaii. He graduated from Columbia University and Harvard Law School, where he was president of the Harvard Law Review. After serving on the Illinois State Senate, he was elected a U.S. senator representing Illinois in 2004. He and wife Michelle Obama have two daughters, Malia and Sasha. ', 'Intelligent/Change', 'Obama was the eighth U.S. president in history who was known to be left-handed.', 'Singer, Songwriter, Pianist']];

function generateFamousProfile(charAge, charGender) {
  // make array of famous profiles and pull one randomly when called
  var gender;
  
  if (charGender == 'male') {
    gender = FAMOUS_MALES;
  } else if (charGender == 'female') {
    gender = FAMOUS_FEMALES;
  } else if (charGender == 'androgen' || charGender == 'neutral') {
    gender = FAMOUS_UNISEX;
  } else {
    const GENDER_LIST = [FAMOUS_MALES, FAMOUS_FEMALES, FAMOUS_UNISEX];
    gender = GENDER_LIST[Math.floor(Math.random()*GENDER_LIST.length)];
  } 
  
  randomFamousPerson = Math.floor(Math.random()*gender.length);
  // Profile header
  profileHeader.innerText = 'Character profile ready:';
  // NAME
  profileName.innerHTML = "<strong>Name:</strong> " + gender[randomFamousPerson][0];
  // AGE
  profileAge.innerHTML = "<strong>Age:</strong> " + gender[randomFamousPerson][1];
  // HOROSCOPE
  profileHoroscope.innerHTML = "<strong>Horoscope:</strong> " + gender[randomFamousPerson][2];
  // TYPE
  profileType.innerHTML = "<strong>Type:</strong> Famous"; // select option value here
  // BIO
  profileBio.innerHTML = "<strong>Bio:</strong> " + gender[randomFamousPerson][3];
  //ADJECTIVES
  profileAdjectives.innerHTML = "<strong>Adjectives:</strong> " + gender[randomFamousPerson][4];
  // QUIRKY_FACT
  profileQuirkyFact.innerHTML = "<strong>Quirky fact:</strong> " + gender[randomFamousPerson][5];
  // PROFESSION
  profileProfession.innerHTML = "<strong>Profession:</strong> " + gender[randomFamousPerson][6];  

  toggleBtns([restartBtn], true);
}

function generateNotFamousProfile(charAge, charGender) {
  // Profile header
  profileHeader.innerText = 'Character profile ready:';
  // NAME
  profileName.innerHTML = "<strong>Name:</strong> " + generateName(charGender);
  // AGE
  profileAge.innerHTML = "<strong>Age:</strong> " + generateAge(charAge);
  // HOROSCOPE
  profileHoroscope.innerHTML = "<strong>Horoscope:</strong> " + HOROSCOPE[Math.floor(Math.random()*HOROSCOPE.length)];
  // TYPE
  profileType.innerHTML = "<strong>Type:</strong> Not Famous"; // select option value here
  // BIO
  profileBio.innerHTML = "<strong>Bio:</strong> " + generateBIO();
  //ADJECTIVES
  profileAdjectives.innerHTML = "<strong>Adjectives:</strong> " + POSITIVE_ADJECTIVE_LIST[Math.floor(Math.random()*POSITIVE_ADJECTIVE_LIST.length)] + "/" + NEGATIVE_ADJECTIVE_LIST[Math.floor(Math.random()*NEGATIVE_ADJECTIVE_LIST.length)];
  // QUIRKY_FACT
  profileQuirkyFact.innerHTML = "<strong>Quirky fact:</strong> " + QUIRKY_FACT[Math.floor(Math.random()*QUIRKY_FACT.length)];
  // PROFESSION
  profileProfession.innerHTML = "<strong>Profession:</strong> " + PROFESSION[Math.floor(Math.random()*PROFESSION.length)];  

  toggleBtns([restartBtn], true);
}

function generateCreateOwnProfileForm() {
  // create form with profile fields blank, when submitted will return to 
  // profile page with character features
  addRemovedChildNodes(createOwnCharacterForm, storageCreateOwnCharForm);
  removeAllChildNodes(profileReadyContainer, storageProfileReadyCard);

}

function generateCreateOwnProfile() {
  
  createName = document.getElementById('createName').value;
  createAge = document.getElementById('createAge').value;
  createHoroscope = document.getElementById('createHoroscope').value;
  createBio = document.getElementById('createBio').value;
  createAdjectives = document.getElementById('createAdjectives').value;
  createQuirkyFact = document.getElementById('createQuirkyFact').value;
  createProfession = document.getElementById('createProfession').value;

  removeAllChildNodes(createOwnCharacterForm, storageCreateOwnCharForm);
  addRemovedChildNodes(profileReadyContainer, storageProfileReadyCard);


  //*** this needs to be changed to the values entered into the createownform ***
  // Profile header
  profileHeader.innerText = 'Character profile ready:';
  // NAME
  profileName.innerHTML = "<strong>Name:</strong> " + createName;
  // AGE
  profileAge.innerHTML = "<strong>Age:</strong> " + createAge;
  // HOROSCOPE
  profileHoroscope.innerHTML = "<strong>Horoscope:</strong> " + createHoroscope;
  // TYPE
  profileType.innerHTML = "<strong>Type:</strong> Create Your Own"; // select option value here
  // BIO
  profileBio.innerHTML = "<strong>Bio:</strong> " + createBio;
  //ADJECTIVES
  profileAdjectives.innerHTML = "<strong>Adjectives:</strong> " + createAdjectives;
  // QUIRKY_FACT
  profileQuirkyFact.innerHTML = "<strong>Quirky fact:</strong> " + createQuirkyFact;
  // PROFESSION
  profileProfession.innerHTML = "<strong>Profession:</strong> " + createProfession;  
  
  toggleBtns([restartBtn], true);
}

function generateName(gender) {
  if (gender == 'male') {
    return NAMES_MALE[Math.floor(Math.random()*NAMES_MALE.length)] + ' ' + LAST_NAMES[Math.floor(Math.random()*LAST_NAMES.length)];
  } else if (gender == 'female') {
    return NAMES_FEMALE[Math.floor(Math.random()*NAMES_FEMALE.length)] + ' ' + LAST_NAMES[Math.floor(Math.random()*LAST_NAMES.length)];
  } else {
    return UNISEX_NAMES[Math.floor(Math.random()*UNISEX_NAMES.length)] + ' ' + LAST_NAMES[Math.floor(Math.random()*LAST_NAMES.length)];
  }
}
function generateAge(ageRange) {
  if (ageRange == '10-18') {
    return Math.floor(Math.random() * (18 - 10) + 10);
  } else if (ageRange == '19-29'){
    return Math.floor(Math.random() * (29 - 19) + 19);
  } else if (ageRange == '30-39'){
    return Math.floor(Math.random() * (39 - 30) + 30);
  } else if (ageRange == '40-49'){
    return Math.floor(Math.random() * (49 - 40) + 40);
  } else if (ageRange == '50-59'){
    return Math.floor(Math.random() * (59 - 50) + 50);
  } else if (ageRange == '59+'){
    return Math.floor(Math.random() * (125 - 59) + 59);
  } else {
    return Math.floor(Math.random() * (125 - 10) + 10);
  }
}

function generateBIO() {
  const GREW_UP_IN = ['small', 'large', 'jungle'];
  const LIKES = ['cats', 'dogs', 'tigers', 'peanuts', 'cilantro'];
  const OWNS_A = ['house', 'cat', 'dog', 'robot', 'boat', 'hospital', 'business'];
  const PLAYS = ['baseball', 'basketball', 'football', 'video games'];
  const BIGGEST_ACHIEVEMENT = ['ate a biscuit', 'ran a marathon', 'won a superbowl ring', 'have a baby'];
  const ULTIMATE_GOAL = ['be a dancer', 'fly a plane', 'have a baby', 'eat 60 pizzas', 'beat a guinness world record'];
  const ASPIRE_TO_BE = ['a bunny', 'hit man', 'gardener'];

  return "Grew up in a " + GREW_UP_IN[Math.floor(Math.random()*GREW_UP_IN.length)] + " town. Likes " + LIKES[Math.floor(Math.random()*LIKES.length)] + ". Owns a " + OWNS_A[Math.floor(Math.random()*OWNS_A.length)] + ". Plays " + PLAYS[Math.floor(Math.random()*PLAYS.length)] + ". Biggest achievement is " + BIGGEST_ACHIEVEMENT[Math.floor(Math.random()*BIGGEST_ACHIEVEMENT.length)] + ". My ultimate goal is to " + ULTIMATE_GOAL[Math.floor(Math.random()*ULTIMATE_GOAL.length)] + ". Aspire to be " + ASPIRE_TO_BE[Math.floor(Math.random()*ASPIRE_TO_BE.length)] + ".";
  // 'Movies','TV','Religion','Music','Sports','Books','Politics'
}

function clearProfile() {
  profileHeader.innerText = '';
  removeAllChildNodes(profileHeader, VOID_ARRAY_PROFILE_HEADER);
  profileName.innerText = '';
  profileAge.innerText = '';
  profileType.innerText = '';
  profileHoroscope.innerText = '';
  profileBio.innerText = '';
  profileAdjectives.innerText = '';
  profileQuirkyFact.innerText = '';
  profileProfession.innerText = '';

  toggleBtns([restartBtn], false);
  addRemovedChildNodes(chooseCharacterForm, storageChooseCharForm);
  removeAllChildNodes(profileReadyContainer, storageProfileReadyCard);
}

function toggleBtns(btnsArray, on) { 
  for (btn = 0; btn < btnsArray.length; btn++) {
      if (on) {
          btnsArray[btn].style.display = "inline-block"; 
      } else {
          btnsArray[btn].style.display = "none";
      }
  }
}

function toggleContainer() {
  // maybe write a toggle container function
}

function removeAllChildNodes(parent, storageArray) {
  while (parent.firstChild) {
      element = parent.removeChild(parent.firstChild);
      storageArray.push(element);
  }
}

function addRemovedChildNodes(parent, storageArray) {
  while (storageArray.length > 0) {
    element = storageArray.shift();
    parent.appendChild(element);
  }
}

// build a function to create and store a create your own profile

// build a function that will allow users to search the current lists of characters by keywords

