// Define the App
var calkizyApp = angular.module('calkizyApp', []);

// Define the Controller
calkizyApp.controller('calkizyController', calkizyController);

// Define the main function of the Controller
function calkizyController ( $scope ) {
	var vm = $scope;

	// global variables
	vm.userInput = '';
	vm.result = 0;

	// Show input/output values on screen
	vm.display = function ( btnInput ) {
		vm.userInput += btnInput;
		console.log('userInput = ' + vm.userInput);
	}

	// Perform main computation
	vm.compute = function ( ) {
		vm.result += eval(vm.userInput);
		vm.userInput = vm.result;
		vm.result = 0;
	}

	// Perform power computation
	vm.power = function ( exponent ) {
		// Validation
		// -- Check if user entered base value
		if ( vm.userInput == '' ) {
			alert('Please enter the base value first to proceed! Waiting for your response...');
		}
		else {
			var base = vm.userInput;
			vm.userInput = Math.pow(base, exponent);
		}
	}

	// Clear one string at a time from the screen (backspace)
	vm.backspace = function ( ) {
		var size = vm.userInput.length - 1;
		vm.userInput = vm.userInput.substring(0, size);
	}

	// Clear everything from the screen
	vm.clear = function ( ) {
		vm.result = 0;
		vm.userInput = '';
	}
}