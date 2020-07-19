// JavaScript Document
var carName= 0;
var carSeats= 0;
var carPrice= 0;
var carType = 0;
var ClientName = "";
var ClientLastName = "";
var ClientEmail = "";
var ClientAge = 0;
var ClientCellphone = 0;
var extrasOutput = [];
var cost = 0;





function updateCars() {
	carPrice=this.dataset.price;
	carName = this.dataset.name;
	carSeats = this.dataset.seats;
	carType = this.dataset.type;


	window.scrollTo(0, document.getElementById("carDetails").offsetTop - 40);
	document.getElementById("carName").innerHTML=carName;
	document.getElementById("seatOutput").innerHTML=carSeats;
	document.getElementById("PriceOutput").innerHTML=carPrice;
	document.getElementById("TypeOutput").innerHTML=carType;

}





function extrasList() {
	var extras = document.getElementsByClassName("addCheck");
	cost = Number(0);
	extrasOutput = [];
	for (i = 0; i < extras.length; i++) {
		if (extras[i].checked) {
			extrasOutput.push(extras[i].dataset.name);
			cost += Number(extras[i].dataset.price);
			alert(cost)
		}
		extrasOutput.innerHTML = cost;
	}
}
function information() {
	ClientName = document.getElementById('firstNameInput').value;
	ClientLastName = document.getElementById('lastNameInput').value;
	ClientAge = document.getElementById('ageInput').value;
	ClientEmail = document.getElementById('emailInput').value;
	ClientCellphone = document.getElementById('cellphoneInput').value;
	alert(ClientName + " " + ClientLastName + " " + ClientAge + " " + ClientEmail + " " + ClientCellphone);
}


var carInputs = document.getElementsByClassName('card');
for (var i = 0; i < carInputs.length; i++) {
	carInputs[i].addEventListener('click', updateCars);
}
var extrasClicked = document.getElementsByClassName('addCheck');
for (var i = 0; i < extrasClicked.length; i++) {
	extrasClicked[i].addEventListener('click', extrasList)
}
