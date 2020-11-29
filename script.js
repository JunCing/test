const helloElem = document.querySelector("#hello");
const url = "https://script.google.com/macros/s/AKfycbyBxHX0LQEqI1CwdEFCP2uDM37BnBebeVQzzRTQRKG4xD-tYwo/exec?name=Allen&age=29";

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(jsonData) {
		helloElem.innerText = jsonData;
	});