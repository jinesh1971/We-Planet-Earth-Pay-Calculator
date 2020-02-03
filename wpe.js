var intake1 = document.querySelector("#value1");
var intake2 = document.querySelector("#value2");
var intake3 = document.querySelector("#value3");
var intake4 = document.querySelector("#value4");
var intake5 = document.querySelector("#value5");
var totalDonations = document.querySelector("#totalDonations");
var amount = document.querySelector("#amount");

var sum = 0;

//parseFloat adds two values together
intake1.addEventListener("change",function(){
	
	intake1 = this.value;
	console.log(intake1);
	totalDonations.textContent = parseFloat(intake1);
	sum = parseFloat(intake1 * 1.75);
	if(sum <= 18)
	{
		amount.textContent = 18;
	}
	else{
		amount.textContent = sum;
	}
});

intake2.addEventListener("change",function(){

	intake2 = this.value;
	console.log(intake2);
	totalDonations.textContent = parseFloat(intake1) + parseFloat(intake2);
	sum = parseFloat(intake2 * 2) + parseFloat(intake1 * 1.75);
	if(sum <= 18)
	{
		amount.textContent = 18;
	}
	else{
		amount.textContent = sum;
	}
});

intake3.addEventListener("change",function(){
	intake3 = this.value;
	console.log(intake3);
	totalDonations.textContent = parseFloat(intake1) + parseFloat(intake2) + parseFloat(intake3);
	sum = parseFloat(intake3 * 2.25)+parseFloat(intake2 * 2) + parseFloat(intake1 * 1.75);
	if(sum <= 18)
	{
		amount.textContent = 18;
	}
	else{
		amount.textContent = sum;
	}
});

intake4.addEventListener("change",function(){
	intake4 = this.value;
	console.log(intake4);
	totalDonations.textContent = parseFloat(intake1) + parseFloat(intake2) + parseFloat(intake3) + parseFloat(intake4);
    sum =  parseFloat(intake4 * 2.5)+ parseFloat(intake3 * 2.25) + parseFloat(intake2 * 2) + parseFloat(intake1 * 1.75);
	if(sum <= 18)
	{
		amount.textContent = 18;
	}
	else{
		amount.textContent = sum;
	}
});

intake5.addEventListener("change",function(){
	intake5 = this.value;
	console.log(intake5);
	totalDonations.textContent = parseFloat(intake1) + parseFloat(intake2) + parseFloat(intake3) + parseFloat(intake4) + parseFloat(intake5); 
    sum = parseFloat(intake5 * 3) + parseFloat(intake4 * 3) + parseFloat(intake3 * 2.25) + parseFloat(intake2 * 2) + parseFloat(intake1 * 1.75);
	if(sum <= 18)
	{
		amount.textContent = 18;
	}
	else{
		amount.textContent = sum;
	}
});















