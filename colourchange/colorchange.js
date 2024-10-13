// Generate a random color

const randomcolor=function(){
  const hex = "01234ABCD"
  let color ="#"
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};

const startChangingColor = function(){
  setInterval(changebgcolor, 2000)
  function changebgcolor(){
     document.body.style.backgroundColor=randomcolor();
  }
};

const stopChangingColor = function(){
 
};

document.querySelector("#stop").addEventListener('click',stopChangingColor);

document.querySelector("#start").addEventListener('click',startChangingColor);


console.log(randomcolor);