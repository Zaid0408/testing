document.getElementById("test").innerHTML = "Hello World";

document.getElementById("test2").innerHTML = "Hello World";

const func= async ()=>{
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    console.log(data);
}