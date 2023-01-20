let btnNumber = document.querySelectorAll(".calc_number");
let calc_screen = document.querySelector(".calc-screen");
let clear = document.getElementById("calc-clear");
let result = "";
let arrayString = [];

clear.onclick = ()=>{
	result = "";
	arrayString = [];
	calc_screen.innerHTML = "";
}
function calculate(e){
	let number = result.replace(",", ".");
	result = "";

	if (e==="=") {
		arrayString.push(number);
		let total = eval(arrayString.join(""));

		calc_screen.innerHTML = total || "0";
		
	}else {
		arrayString.push(number);
		arrayString.push(e); 
	}
}

btnNumber.forEach((item)=>{
	item.onclick = (e)=> {
		let text = e.target.innerText;
		if (result.length<=15) {
			result += text;
		}
		if (result.length >= 8) {
			calc_screen.style.fontSize = "25px";
		}
		calc_screen.innerHTML = result.replace(",", ".");
	}
})