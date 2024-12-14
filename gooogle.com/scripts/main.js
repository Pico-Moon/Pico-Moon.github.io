var searchwords = document.querySelector("img#searchwords");
var button = document.querySelector("button");

button.harver = function() {
  cursor = "text"
}
button.onclick = function() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
}

searchwords.harver = function() {
  cursor = "text"
}
searchwords.onclick = function() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
}



/*function setUserName() {
  let myName = prompt("Please enter your name.");
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Hello, " + storedName;
}*/



