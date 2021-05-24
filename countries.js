fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "073d5d427bmsh66171dee6e5e823p106db8jsna035b2a3cec4",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
})
.then(
	function(response_world){
		if (response_world.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response_world.status);
        return;
	}
	response_world.json().then(function(dataWorld) {
        console.log(dataWorld);
        document.getElementById("country").innerHTML = dataWorld.countries_stat[0].country_name;
        document.getElementById("confirmed").innerHTML = dataWorld.countries_stat[0].cases;
        document.getElementById("active").innerHTML = dataWorld.countries_stat[0].active_cases;
        document.getElementById("recovered").innerHTML = dataWorld.countries_stat[0].total_recovered;
        document.getElementById("deaths").innerHTML = dataWorld.countries_stat[0].deaths;
		const btn = document.getElementById("searchBtn");
        for(let i=0; i<dataWorld.countries_stat.length; i++) {
            let table = document.getElementById("stateTable");
		    let row = table.insertRow(-1);
		    let state = row.insertCell(0);
		    let confirmed = row.insertCell(1);
		    let active = row.insertCell(2);
		    let deaths = row.insertCell(3);
            let recovered = row.insertCell(4);

            state.innerHTML = dataWorld.countries_stat[i].country_name;
            confirmed.innerHTML = dataWorld.countries_stat[i].cases;
            active.innerHTML = dataWorld.countries_stat[i].active_cases;
            deaths.innerHTML = dataWorld.countries_stat[i].deaths;
            recovered.innerHTML = dataWorld.countries_stat[i].total_recovered;
            // console.log(dataWorld.countries_stat[i].recovered);
        }

        btn.onclick = function() {
            let search = document.getElementById("searchBox").value;
            console.log(search);
            for(let i=0; i<dataWorld.countries_stat.length; i++){
                // console.log(dataWorld.countries_stat[i].country_name);
                if(dataWorld.countries_stat[i].country_name === search){
                    document.getElementById("country").innerHTML = dataWorld.countries_stat[i].country_name;
                    document.getElementById("confirmed").innerHTML = dataWorld.countries_stat[i].cases;
                    document.getElementById("active").innerHTML = dataWorld.countries_stat[i].active_cases;
                    document.getElementById("recovered").innerHTML = dataWorld.countries_stat[i].total_recovered;
                    document.getElementById("deaths").innerHTML = dataWorld.countries_stat[i].deaths;
                }
            }
        }
      });
    }
)
.catch(err => {
	console.error(err);
});