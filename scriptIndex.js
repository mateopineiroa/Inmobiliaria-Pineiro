var Landing = await fetch('./data/Landing.json')
                      .then(response => response.json())
                      .then(data => (data))
                      .catch(error => ("error"));

console.log(Landing)


const Title = document.getElementById("title") 
console.log(Landing.inicioSlogan)
/* Title.innerText = Landing.inicioSlogan */