// This file will have all the connections needed to send/receive data from the server.

// The server address, change this to the webserver you want to use
var server = "http://localhost:8080";

// Checks if server is OK, then request server for the JSON array of all parking spots
function getList() {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText)
			displayListOfSpots(this.responseText);
		}
	};
	xhttp.open("GET", server + "/cs3337group3/listParkingSpots", true);
	xhttp.send();
}

/**
 * Send registration JSON to server with XMLHTTPRequest
 * @param userData, the JSON to pass to the server
 * @returns
 * TODO: add a return function, maybe start tracking userID
 */
function sendRegistration(userData) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", server + "/cs3337group3/registration", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			var user = JSON.parse(this.responseText);
			document.cookie="ID=" + user.id;
			document.cookie="CARID=" + user.car;

			window.location.href = "home.html";
		}
	};
	xhttp.send(userData);
}

/**
 * Send login JSON to server with XMLHTTPRequest
 * @param userData, the JSON to pass to the server
 * @returns
 * TODO: add a return function, maybe start tracking userID
 */
function sendLogin(userData) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", server + "/cs3337group3/login", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText);
			var user = JSON.parse(this.responseText);
			document.cookie="ID=" + user.id;
			document.cookie="CARID=" + user.car;

			window.location.href = "home.html";
			console.log("we here");
		}
	};
	xhttp.send(userData);
}

function sendLister(JSON) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", server + "/cs3337/lister", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON);
}