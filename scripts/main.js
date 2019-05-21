var random_number;
var number_of_guesses;

function main()
{
  random_number = getRandomArbitrary(1, 100);
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", guess)
}

function getRandomArbitrary(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function guess(){
  var user_guess = document.getElementById("guess").value;
  var output = document.getElementById("output");
  if (user_guess > random_number){
  output.innerHTML = "Too High!";
  }
  else if (user_guess < random_number){
    output.innerHTML = "Too Low!";
  }
  else {
    output.innerHTML = "Guessed!"
  }

}
