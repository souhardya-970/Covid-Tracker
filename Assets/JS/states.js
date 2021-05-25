fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "073d5d427bmsh66171dee6e5e823p106db8jsna035b2a3cec4",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
})
.then(
	function(response){
		if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
	}
	response.json().then(function(data) {
        console.log(data);
		document.getElementById("state").innerHTML = data.state_wise["Andaman and Nicobar Islands"].state;
		document.getElementById("confirmed").innerHTML = data.state_wise["Andaman and Nicobar Islands"].confirmed;
		document.getElementById("active").innerHTML = data.state_wise["Andaman and Nicobar Islands"].active;
		document.getElementById("recovered").innerHTML = data.state_wise["Andaman and Nicobar Islands"].recovered;
		document.getElementById("deaths").innerHTML = data.state_wise["Andaman and Nicobar Islands"].deaths;
		const btn = document.getElementById("select");
		const keyarray = [];
		Object.entries(data.state_wise).forEach(([key, value]) => {
				keyarray.push(`${key}`);
			}
		);
		console.log(keyarray);
		for(let i=0; i<keyarray.length; i++){
			let table = document.getElementById("stateTable");
		    let row = table.insertRow(-1);
		    let state = row.insertCell(0);
		    let confirmed = row.insertCell(1);
		    let active = row.insertCell(2);
			let deaths = row.insertCell(3);
            let recovered = row.insertCell(4);

			state.innerHTML = data.state_wise[keyarray[i]].state;
			confirmed.innerHTML = data.state_wise[keyarray[i]].confirmed;
			active.innerHTML = data.state_wise[keyarray[i]].active;
			deaths.innerHTML = data.state_wise[keyarray[i]].deaths;
			recovered.innerHTML = data.state_wise[keyarray[i]].recovered;
		}
		btn.onclick = function() {
			let selectedOption = selectBox.options[selectBox.selectedIndex];
			const selectedText = selectedOption.text;
			console.log(selectedText);
			document.getElementById("state").innerHTML = data.state_wise[selectedText].state;
			document.getElementById("confirmed").innerHTML = data.state_wise[selectedText].confirmed;
			document.getElementById("active").innerHTML = data.state_wise[selectedText].active;
			document.getElementById("recovered").innerHTML = data.state_wise[selectedText].recovered;
			document.getElementById("deaths").innerHTML = data.state_wise[selectedText].deaths;
		}
      });
    }
)
.catch(err => {
	console.error(err);
});
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    tableTheme = document.getElementById("stateTable");
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       tableTheme.classList="table table-striped table-hover";
   } else {
       setTheme('theme-dark');
       tableTheme.classList="table table-dark table-striped table-hover";
   }
   tableTheme = document.getElementById("stateTable");
}
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();
toggle=document.getElementById("toggle");
toggle.onclick = toggleTheme;