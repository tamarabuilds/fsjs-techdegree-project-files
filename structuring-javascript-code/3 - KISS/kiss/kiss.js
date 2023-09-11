// Here's a variable holding the number 5
const number = 5;

function randomChoice(item) {
  return Math.floor(Math.random() * item.length);
}

// This function checks to see
// if a number is greater then 10
// if it is it will return true
// if it isn't it will return false
function ten(num) {
  //   check if number is greater than 10
  if (num > 10) {
    return true;
  }
  //   if the number is less than 10
  else {
    return false;
  }
}

console.log(ten(number));

// a function called go to movies
// randomly chooses a movie
// if money is greater than zero, it picks some snacks for you
// then returns a message with your movie and snacks
function goToMovies(money) {
  //   list of movies
  const movies = [
    "Parasite",
    "Green Book",
    "The Shape of Water",
    "Moonlight",
    "Spotlight",
    "Birdman",
    "12 Years a Slave",
    "Argo",
    "The Artist",
    "The Kings Speech",
  ];
  //   randomly choose a movie
  const movieChoice = movies[randomChoice(movies)];

  //   dictionary of snacks and amounts
  const purchasedSnacks = { popcorn: 0, soda: 0, candy: 0 };
  //   make sure you have money first
  if (money > 0) {
    //     while money is greater then zero
    //     keep buying snacks
    while (money > 0) {
      //       if money is greater than 3
      //       purchase popcorn
      if (money >= 3) {
        purchasedSnacks["popcorn"] = purchasedSnacks["popcorn"] + 1;
        money = money - 3;
      }
      //       if money is greater than 2
      //       purchase soda
      if (money >= 2) {
        purchasedSnacks["soda"] = purchasedSnacks["soda"] + 1;
        money = money - 2;
      }
      //       if money is greater than 1
      //       purchase candy
      if (money >= 1) {
        purchasedSnacks["candy"] = purchasedSnacks["candy"] + 1;
        money = money - 1;
      }
    }
  }
  return `You went to see ${movieChoice} and had ${JSON.stringify(
    purchasedSnacks,
    null,
    4
  )}.`;
}

console.log(goToMovies(10));

// list of dictionaries containing some treehouse pets
const pets = [
  { name: "Jethro", animal: "dog", breed: "Australian Shepherd" },
  { name: "Birdie", animal: "dog", breed: "Pointer mix"},
  { name: "Harley", animal: "dog", breed: "Unknown" },
  { name: "Booger", animal: "cat", breed: "Unknown" },
  { name: "Argo", animal: "cat", breed: "Unknown" },
  { name: "Ace", animal: "cat", breed: "Unknown" },
];

// loop through each pet in the list
for (const element of pets) {
  //   loop through each object
  for (const property in element) {
    //     print out the attributes for each pet
    console.log(`${property} : ${element[property]}`);
  }
}
