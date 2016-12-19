app.controller("TestCtrl", function($rootScope){
	var selectedEl = document.querySelector(".btn__selected"),
		testEl = document.getElementById("test"),
		checkBtn = document.getElementById("check");
	
	selectedEl.classList.remove("btn__selected");
	testEl.classList.add("btn__selected");
	checkBtn.disabled = false;
});