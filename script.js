// Javascript that alerts the user what they entered into the text boxes.

let fname = document.getElementById("fname").value;
fname = 1;
let lname = document.getElementById("lname").value;

document.getElementById('submitbutton').addEventListener('click', myFunction)

function myFunction () {
  alert('Your name is '+fname+lname);
}
