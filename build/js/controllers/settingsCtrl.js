app.controller("SettingsCtrl", function($rootScope){	
	var selectedEl = document.querySelector(".btn__selected"),
		settingsEl = document.getElementById("settings"),
		checkBtn = document.getElementById("check");
	
	selectedEl.classList.remove("btn__selected");
	settingsEl.classList.add("btn__selected");
	checkBtn.disabled = true;
});