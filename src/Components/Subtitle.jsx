import React, {useState} from "react";

function Subtitle(){
const [palabra, setPalabra] = useState("");
var speed = 200;
var i = 0;

function typeWriting(){
    if (i < palabra.length){
        document.getElementById("subtitle").innerHTML += palabra.charAt(i);
        i++;
        setTimeout(typeWriting, speed);
    }
}
setTimeout(typeWriting, speed);

    return(
        <div id="subtitle" className="sub-portfolio subtitle display-3 text-white">
            Desarrollo
        </div>
    )

}
export default Subtitle;