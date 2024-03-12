const demo = document.getElementById("demo");   // print into paragraph
const amps = document.getElementById("Amplifier");
const amp1 = document.getElementById("amp1");
const ohm8 = document.getElementById("ohm8");
const ohm4 = document.getElementById("ohm4");
const ampCh = document.getElementById("ampCh");
const math = document.getElementById("math");


async function getDataFromSite() { //get amp json data
    const response = await fetch("https://raw.githubusercontent.com/Jim-Whitcher/Amp---Speaker-Calculator/main/amplifiers.json");
    const data = await response.json();
    // console.log(data)
    return data
}

async function getData() { //get amp json data
    const response = await fetch("amplifiers.json");
    const data = await response.json();
    // console.log(data)
    return data
}

renderHTML()

async function renderHTML(){  //populate list

    const data = await getData() //get data

    for (i = 0; i < data.length; i++) {

        let html = `<option value="${i}">${data[i]["Amp Model"]}</option>`; // `string ${variable}'
        console.log(html);
        amps.insertAdjacentHTML("beforeend", html);

    }
}

async function ampSelect(){  //called by dropdown select

    const data = await getData() //get data
    let x = amps.value; 
    console.log(x);

    let ohm8Val = data[x]["8 ohm Watts (W)"];
    let ohm4Val = data[x]["4 ohm Watts (W)"];
    let ampChVal = data[x]["Amp Channels"];

    ohm8.innerHTML = "8 ohm Watts : " + ohm8Val;
    ohm4.innerHTML = "4 ohm Watts : " + ohm4Val;
    ampCh.innerHTML = "Amp Channels : " + ampChVal;

    console.log(ohm8Val, ohm4Val);

}
