///////////////Menu Items (MVP)///////////////////
//Instructions found in Notes.txt file

const latte = { name: 'Cafe Latte', price: 4, category: 'Drinks' };
const burger = { name: 'Burger', price: 18, category: 'Lunch' };
const breakfastBurrito = {
  name: 'Breakfast Burrito',
  price: 16,
  category: 'Breakfast',
};

// ------------Task 1a ----------------------------------------------------------------------------

function createMenuItem(name, price, category) {
  return {
    name,
    price,
    category,
  };
}

// ------------Task 1b ----------------------------------------------------------------------------

console.log(createMenuItem('Pizza', 12, 'Lunch'));
console.log(createMenuItem('Soda', 2, 'Drink'));
console.log(createMenuItem('Salad', 9, 'Lunch'));

// ------------Task 2 ----------------------------------------------------------------------------

burger.calcDiscount = function (person) {
  if (person === 'student' || person === 'teacher') {
    return this.price * 0.75;
  }
  return this.price * 0.9;
};

///////////////Reviews (MVP)///////////////////

const reviews = [
  {
    name: 'Daniela',
    rating: 5,
    feedback: 'Beautiful atmosphere and wonderful vegan options!',
  },
  {
    name: 'Jack',
    rating: 3,
    feedback:
      'A little too hipster for my taste, but the burger was decent, if overpriced',
  },
  { name: 'Miranda', rating: 4, feedback: 'fun trivia and cool vibes' },
  {
    name: 'Wen',
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: 'Brett',
    rating: 3,
    feedback:
      'great selection of snacks and a nice cafe area to get work done during the day.',
  },
  {
    name: 'Julius',
    rating: 2,
    feedback:
      'I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.',
  },
  {
    name: 'Lauren',
    rating: 4,
    feedback:
      'Absolutely love that they have karaoke Fridays! Food and drink selection is okay.',
  },
  { name: 'Reyna', rating: 3.5, feedback: '' },
];

// ------------Task 4 ----------------------------------------------------------------------------

console.log(reviews[5].feedback);

// ------------Task 5 ----------------------------------------------------------------------------

const myReview = {
  name: 'Nestor',
  rating: 5,
  feedback: 'The food was very good!',
};
//Unsure whether this should be pushed into reviews array?
reviews.push(myReview);

// ------------Task 6 ----------------------------------------------------------------------------

for (let i = 0; i < reviews.length; i++) {
  if (reviews[i].name === 'Reyna') {
    reviews[i].feedback =
      'this place is chill with really cool people, great for getting work done on weekdays';
  }
}

console.log(reviews);

// ------------Task 7 ----------------------------------------------------------------------------

function getReviewByIndex(reviews, index) {
  const capturedObj = reviews[index];
  return `${capturedObj.name} gave the restaurant a ${capturedObj.rating} star review and their feedback was: ${capturedObj.feedback}`;
}

// ------------Task 8 ----------------------------------------------------------------------------

function getLastReview(arr) {
  const lastReview = arr[arr.length - 1];
  return `${lastReview.name} gave the restaurant a ${lastReview.rating}, and their feedback was: ${lastReview.feedback}`;
}

// ------------Stretch 1 ----------------------------------------------------------------------------

function getReviewByRating(reviews, rating) {
  const filteredReviews = [];
  for (let i = 0; i < reviews.length; i++) {
    let Userrating = Math.floor(reviews[i].rating);
    if (Userrating === rating) {
      filteredReviews.push(reviews[i]);
    }
  }
  return filteredReviews;
}

// ------------Task 2 ----------------------------------------------------------------------------

function getLongReviews(arr) {
  let longReviews = [];

  for (let i = 0; i < arr.length; i++) {
    let wordCount = arr[i].feedback.split(' ').length;
    if (wordCount > 15) {
      longReviews.push(arr[i]);
    }
  }
  return longReviews;
}

// ------------Task 3 ----------------------------------------------------------------------------

function carMaker(odometer) {
  return {
    odometer,
    drive: function (distance) {
      this.odometer = this.odometer + distance;
      return this.odometer;
    },
  };
}
