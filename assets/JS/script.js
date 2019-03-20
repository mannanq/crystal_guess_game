$(document).ready(function() {
  // generate the random number
  // initialize a score variable and set it to 0
  // intialize win and loss and set them both to 0
  // initialize a score tally for an inidividual game
  // generate a random number for each crystal everytime (value for each crystal)
  // add event listeer to each crystal
  // when a crystal is clicked, it's value is added to the individual score tally
  // if the total score from clicking crystals matches the random number generated in the beginning, user wins. So win++
  // otherwise, user loses loss++
  // Both cases, individual scoer resets to 0
  //  new random number is generated
  // crystals get new values

  // define the variables
  var randomNumber, wins, losses, score, randomValue;

  // generate a random number initially
  randomNumber = Math.floor(Math.random() * 99 + 1);

  // set initial values for the global variables
  wins = 0;
  losses = 0;
  score = 0;

  // insert the random number generated into the random number Div

  $('.randomNumDiv').html(randomNumber);
  $('.scoreTallyDiv').html(score);

  // generate random values for a crystal
  function crystalValues() {
    return Math.floor(Math.random() * 20);
  }

  // event listener 'click' for a crystal (I have given all the crystals the class of 'crystal')
  $('.crystal').on('click', function() {
    // figure out the id of the crystal just clicked (I have named them according to their colors i.e. red, yellow etc)
    var color = $(this).attr('id');

    // now check the id agianst the conditions (?)
    if (color === 'red') {
      // If a red crystal was clicked, generate a value for it and alert to user
      randomValue = crystalValues();
      alert(randomValue);

      // Add crystal value to the global score tally
      score += randomValue;
    } else if (color === 'blue') {
      // Same as above

      randomValue = crystalValues();

      alert(randomValue);
      score += randomValue;
    } else if (color === 'yellow') {
      // Same as above

      randomValue = crystalValues();
      alert(randomValue);
      score += randomValue;
    } else if (color === 'green') {
      // Same as above

      randomValue = crystalValues();
      alert(randomValue);
      score += randomValue;
    }

    // Show current global score tally
    $('.scoreTallyDiv').html(score);

    //Check these win/loss conditions of the game

    if (score > randomNumber) {
      // If total score generates is > randomNumber, losses++
      losses++;

      $('#loss').html(losses);

      // Reset the global score tally to 0
      score = 0;

      //  And show it in the scoreTallyDiv
      $('.scoreTallyDiv').html(0);

      // generate the new random number
      randomNumber = Math.floor(Math.random() * 99 + 1);

      //  And show it in the random number div
      $('.randomNumDiv').html(randomNumber);
    } else if (score == randomNumber) {
      // Same as above, except win gets incremented now!

      wins++;
      $('#win').html(wins);
      score = 0;
      document.querySelector('.scoreTallyDiv').innerHTML = score;
      randomNumber = Math.floor(Math.random() * 99 + 1);
      $('.randomNumDiv').html(randomNumber);
    }

    //console.log(score);
  });

  // console.log(score);
  // console.log(wins);
  // console.log(losses);
});
