// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
	//var display_screen = '<div id="display"></div>';
	var display_screen = document.createElement('div');
	display_screen.id = 'display';
	document.getElementById("wrapper").appendChild(display_screen);
	
	for ( var i = 1; i < 13; i++) {
		var btn_number = document.createElement('div');
		btn_number.id = 'button-number';
		document.getElementById("wrapper").appendChild(btn_number);
		
		var number_0 = document.createTextNode(0);
		var operators = ["+","-","*","/"];
		var number_result = document.createTextNode('=');
		
		if ( i == 10 ) {
			for ( j = 0; j < operators.length; j++ ) {
				var number_operator = document.createTextNode(operators[j]);
				btn_number.appendChild(number_operator);
				//onOperatorButtonClick(number_operator);
			}
			onOperatorButtonClick(number_operator);	
		}
		else if ( i == 11 ) {
			btn_number.appendChild(number_0);
			onButtonClick(number_0);
		}
		else if ( i == 12 ) {
			btn_number.appendChild(number_result);
			calculatorResult();
		}
		else {
			var number = document.createTextNode(i);
			btn_number.appendChild(number);
			onButtonClick(number);	
		}
		
		//var number_array = [];
		var isResult = 0;
		var isOperatorChoose = 0;
		
		function onButtonClick(content) {
			btn_number.addEventListener("click", function() {
				console.log('clicked');
				var display_screen_content = content.cloneNode(true);
				if ( isResult == 1 ) {
					display_screen.innerHTML = "";
					isResult = 0;
				}
				display_screen.appendChild(display_screen_content);
				isOperatorChoose = 0;
				//number_array.push(display_screen_content);
			});
		}
		
		var clickCount = 0;
		
		function onOperatorButtonClick(content) {
			btn_number.addEventListener("click", function() {
				if(clickCount > operators.length - 1 || isResult == 1) clickCount = 0;
				//display_screen.innerHTML = (operators[clickCount]);
				var display_screen_content = document.createTextNode(operators[clickCount]);
				if ( isOperatorChoose == 1 ) {
					display_screen.removeChild(display_screen.lastChild);
					isOperatorChoose = 0;
				}
				display_screen.appendChild(display_screen_content);
				isOperatorChoose = 1;
				clickCount++;
				console.log(clickCount);
			});
		}
		
		
		function calculatorResult() {
			btn_number.addEventListener("click", function() {
				display_screen.innerHTML = eval(display_screen.innerHTML.replace(/\d+/g, function(numb){ 
                	return parseInt(numb, 10);
            	}));
				isResult = 1;
			});
		}
	}
	
});

