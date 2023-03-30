// ************************************carrousel************************************

document.body.onload=function(){
    nbr=4;
    p=0;
    container=document.getElementById("container");
    d=document.getElementById("d");
    g=document.getElementById("g");
    container.style.width=(410*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="";
        div.style.backgroundImage="url('img/im"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}
d.onclick=function(){
    if(p<0)
    p++;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
g.onclick=function(){
    if(p>-nbr+1)
    p--;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
// ************************************popUp************************************




// HTML
/* <button id="myButton">Cliquez ici</button> */


// JavaScript


// const container = document.getElementById("container");
// const card = document.getElementsByClassName("card");
// const popUp = document.createElementByClassName("card");
// popup.innerHTML = "Ceci est une description";
// popup.style.display = "none";
// popup.style.position = "absolute";
// popup.style.top = "50px";
// popup.style.left = "50px";
// popup.style.padding = "10px";
// popup.style.backgroundColor = "#fff";
// popup.style.border = "1px solid #000";
// popup.style.zIndex = "999";
// document.body.appendChild(popup);
// myButton.addEventListener("mouseover", () => {
//   popup.style.display = "block";
// });
// myButton.addEventListener("mouseout", () => {
//   popup.style.display = "none";
// });



// Dans cet exemple, nous avons créé un bouton avec l'ID myButton.
//  Nous avons également créé une div qui contiendra notre
//   popup de description. Nous avons ajouté du contenu à la div en
//    utilisant la propriété innerHTML. Nous avons ensuite défini les
//    styles CSS pour la div en utilisant les propriétés de style
//     JavaScript.















// let  = document.querySelector(".profile");
// let cardContent = document.querySelector(".cardContent");
// profile.addEventListener("click", function() {
//     cardContent.classList.toggle("active")
// })
// cardContent.addEventListener("click", function() {
//     cardContent.classList.toggle("active")
// })










// let popUp = document.querySelectorAll('[cardContent]');

// popupsBtn.forEach((btn) => {
//     btn.addEventListener("click", activePopup);
  
//     function activePopup() {
//       let popupId = btn.getAttribute("data-popup-ref");
//       let popup = document.querySelector(`[data-popup-id='${popupId}']`);
  
//       if (popup !== undefined && popup !== null) {
//         let popupContent = popup.querySelector(".popup-content");
//         let closeBtns = popup.querySelectorAll("[data-dismiss-popup]");
  
//         closeBtns.forEach((btn) => {
//           btn.addEventListener("click", onPopupClose);
//         });
//         popup.addEventListener("click", onPopupClose);
  
//         popupContent.addEventListener("click", (ev) => {
//           ev.stopPropagation();
//         });
  
//         popup.classList.add("active");
//         setTimeout(() => {
//           popupContent.classList.add("active");
//         }, 1);
  
//         function onPopupClose() {
//           setTimeout(() => {
//             popup.classList.remove("active");
//           }, 250);
//           popupContent.classList.remove("active");
//         }
//       }
//     }
//   });