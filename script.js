let url = "https://api.adviceslip.com/advice";


window.onload = function() {
  getAdvice();
};

function getAdvice(){
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    let adviceDiv = document.getElementById("advice");
    let adviceHeading = document.getElementById("advice-heading");    
    adviceDiv.innerHTML = "<q>" + data.slip.advice + "</q>" ;
    adviceHeading.innerHTML = "ADVICE #" + data.slip.id;
  }).catch(function(e) {
    console.log(e);
  });
}

