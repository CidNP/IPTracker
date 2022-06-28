const buttonhehe = document.querySelector(".button-hehe");
const ipDisplay= document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const ispDisplay= document.querySelector(".isp-hehe");
const timeDisplay= document.querySelector(".time-hehe");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details")

buttonhehe.addEventListener("click", () => {
    loader.style.display ="flex";
    details.style.display = "none";
    
    axios.get("https://ipapi.co/json").then(response => {
        loader.style.display ="none";
        details.style.display= "block";
        ipDisplay.textContent = 'IP: '+ response.data.ip;
        locationDisplay.textContent= 'Location: '+response.data.city+','+ response.data.region+','+ response.data.country_name;
        ispDisplay.textContent = 'ISP Name: '+ response.data.org;
        timeDisplay.textContent = 'Timezone: '+ response.data.timezone;
    });

});

