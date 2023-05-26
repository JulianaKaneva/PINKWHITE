let btn0 = document.querySelector('.btn0');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let el0 = document.querySelector('.tech1');
let el1 = document.querySelector('.tech2');
let el2 = document.querySelector('.tech3');
let el3 = document.querySelector('.tech4');
let el4 = document.querySelector('.tech5');

btn0.addEventListener('click', function () {
    el0.scrollIntoView({ behavior: "smooth"});
});
btn1.addEventListener('click', function () {
    el1.scrollIntoView({ behavior: "smooth"});
});
btn2.addEventListener('click', function () {
    el2.scrollIntoView({ behavior: "smooth"});
});
btn3.addEventListener('click', function () {
    el3.scrollIntoView({ behavior: "smooth"});
});
btn4.addEventListener('click', function () {
    el4.scrollIntoView({ behavior: "smooth"});
});



function buyCloth(id){
	let el = document.getElementById(id);

	if(el.style.color == 'rgb(255, 255, 255)'){
		el.style.color = 'rgb(255, 128, 189)';

	}
	else{
		el.style.color = 'rgb(255, 255, 255)';
	}
}

function buyAcces(id){
	let el = document.getElementById(id);

	if(el.style.color == 'rgb(255, 194, 239)'){
		el.style.color = 'rgb(255, 128, 189)';
	}
	else{
		el.style.color = 'rgb(255, 194, 239)';
	}
}
