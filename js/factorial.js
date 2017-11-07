
//Select DOM Elements and store in variables
let input = $("#input");
let btn = $("#btn");
let result= $("#result");


//1.button listens for click
//2.convert input value to integer and store in newValue
//3.display factorial value of input
btn.on('click',function(){
$(btn).addClass('animated rubberBand');
let newValue = parseInt(input.val());
result.text("The Factorial of " + input.val() + " is " + factorial(newValue));
});


//This Function takes parameter and gets its factorial value.
function factorial(num){
	let number = num;
	let i = 0;
	let result = 0;

	for (i = num - 1; i >= 1; i--){
    	num = num * i;
	}
result = num;
return result;
}
