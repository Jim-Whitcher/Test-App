const demo = document.getElementById("demo");   // print into paragraph
const amps = document.getElementById("Amplifier");
const amp1 = document.getElementById("amp1");
const ohm8 = document.getElementById("ohm8");
const ohm4 = document.getElementById("ohm4");
const ampCh = document.getElementById("ampCh");
const math = document.getElementById("math");



var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/Jim-Whitcher/Amp---Speaker-Calculator/main/amplifiers.json');
ourRequest.onload = function getData() {
    
    ampData = JSON.parse(ourRequest.responseText); // ourData contains the json objects from the xmlrequest text data
    console.log(ourRequest.responseText); // returns text
    console.log(ampData);  // returns json objects 
    console.log(ampData[0]["Amp Model"]); // returns item 1, parameter "Amp Model" 
    renderHTML(ampData);

};

ourRequest.send();

function renderHTML(data){  // ourData var is called into this function, called on load

    console.log(data);

    for (i = 0; i < data.length; i++) {

        let html = `<option value="${i}">${data[i]["Amp Model"]}</option>`; // `string ${variable}'
        console.log(html);
        amps.insertAdjacentHTML("beforeend", html);


    }
}


function ampSelect(){  //called by dropdown select

    let x = amps.value; 
    console.log(x);

    let ohm8Val = ampData[x]["8 ohm Watts (W)"];
    let ohm4Val = ampData[x]["4 ohm Watts (W)"];
    let ampChVal = ampData[x]["Amp Channels"];

    ohm8.innerHTML = "8 ohm Watts : " + ohm8Val;
    ohm4.innerHTML = "4 ohm Watts : " + ohm4Val;
    ampCh.innerHTML = "Amp Channels : " + ampChVal;

    console.log(ohm8Val, ohm4Val);

    
        
}

