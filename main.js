let navDesktop = document.querySelector(".navDesktop");
let navMobile = document.querySelector(".mobileNav");
let logo = document.querySelector(".logo p");
let logo2 = document.querySelector(".mobileNav h1");
let sochial = document.querySelectorAll("i");
let humburger = document.querySelector(".bars");
let closee = document.querySelector(".close");
let listNav = document.querySelector(".listNav");
let aboutImg = document.querySelector(".AboutImg");
let send = document.getElementById("send");
let inputs = document.querySelectorAll("input");
let certificate = document.getElementById("Certicates");
window.addEventListener("scroll",()=>{
if(window.pageYOffset >35){
navDesktop.style.background = 'darkorange';
navMobile.style.background = 'darkorange';
listNav.style.background = 'darkorange';
logo.style.color = '#fff';
logo2.style.color = "#fff";
sochial.forEach(i=>{
    i.style.color = '#fff';
})
}else{
navDesktop.style.background = 'none';
navMobile.style.background = 'rgb(61, 59, 59)';
listNav.style.background = 'rgb(61, 59, 59)';
logo.style.color = 'darkorange';
logo2.style.color = "darkorange";

sochial.forEach(i=>{
    i.style.color = 'darkorange';
})
}
})
humburger.onclick = ()=>{
listNav.style.top = '0'
closee.style.display = 'block'
humburger.style.display = 'none'
}
closee.onclick = ()=>{
listNav.style.top = '-250px'
closee.style.display = 'none'
humburger.style.display = 'block'
}
let images = ["a1.png","a33.png","a4.png","a5.png"];
setInterval(()=>{
    aboutImg.innerHTML = `<img src="images/${images[ Math.floor(Math.random()* 4) ]}">`
},3000)

send.onclick = ()=>{
if(inputs.forEach(input=>{input.value !== ''}))
{
inputs.forEach(input=>{input.value == ''})
}
}

certificate.onclick = ()=>{
document.querySelector(".certeficate").style.display = 'block'
certificate.style.display = 'none'
document.querySelector(".hide").style.display = 'block'
}
document.querySelector(".hide").onclick = ()=>{
    document.querySelector(".certeficate").style.display = 'none'
    certificate.style.display = 'block'
    document.querySelector(".hide").style.display = 'none'
}