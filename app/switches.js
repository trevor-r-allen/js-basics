// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7

function daysPosition(day, offset) {
    console.log(day + offset)
    switch (day) {
        case "sunday":
          if(offset == true){
            return 7;
          }
          else {
            return 1;
          }
        case "monday":
          if(offset == true){
            return 1;
          }
          else {
            return 2;
          }
        case "tuesday":
          if(offset == true){
            return 2;
          }
          else {
            return 3;
          }
        case "wednesday":
          if(offset == true){
            return 3;
          }
          else {
            return 4;
          }
        case "thursday":
          if(offset == true){
            return 4;
          }
          else {
            return 5;
          }
        case "friday":
          if(offset == true){
            return 5;
          }
          else {
            return 6;
          }
        case "saturday":
          if(offset == true){
            return 6;
          }
          else {
            return 7;
          }
        default:
            return "That's not a day of the week";
    }
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

 function golfScore(score, par) {
    switch(score, par){
        case 0:
            score == 1 || score == par - 3;
            return "Ace"
        case 0:
            score == par - 2;
            return "Eagle"
        case 0:
            score == par - 1;
            return "Birdie"
        case 0:
            score == par;
            return "Par"
        case 0:
            score == par + 1;
            return "Bogie"
        case 0:
            score == par + 2;
            return "Double Bogie"
        case 0:
            score >= par + 3;
            return "Ouch"
    }
 }
 

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
    // output: '-5 Hold'
// Example:
    // output: '2 Bet'

let count = 0

function cardCounter(card) {

}
