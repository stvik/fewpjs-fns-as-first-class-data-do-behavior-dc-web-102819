/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
let hour = time.split(':')
hour = parseInt(hour[0])

if (hour < 12) {
	return "Good Morning"
} else if (hour < 17 ) {
	return "Good Afternoon"
} else {
	return "Good Evening"
}



}

/* Write your implementation of displayMessage() */
 
function displayMessage(m) {
  document.getElementById("greeting").innerText = m;
}


