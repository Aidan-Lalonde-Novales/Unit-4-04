// Javascript that alerts the user what they entered into the text boxes.

document.getElementById('submitbutton').addEventListener('click', myFunction)

function myFunction () {
  const fname = document.getElementById('fname').value
  const lname = document.getElementById('lname').value
  alert('Your name is ' + fname + ' ' + lname)
}
