// Javascript that alerts the user what they entered into the text boxes.

document.getElementById('submitbutton').addEventListener('click', myFunction)

function myFunction () {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  alert('Your name is '+fname+' '+lname);
}
