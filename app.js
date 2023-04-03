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
}
d.onclick=function(){
    if(p<0)
    p++;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
}
g.onclick=function(){
    if(p>-nbr+1)
    p--;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
}

// ************************************popUp************************************

// Je vais continuer à adpater ma popUp à la page Web

// const popup = document.createElement('div');
//     popup.classList.add('popup');

// const boutons = document.querySelectorAll('container button')

// for (let index = 0; index < boutons.length; index++) {
//   const card = boutons[index];
//   console.log(jeu.getAttribute('id'));
//   popUp.addEventListener('click', ()=>{
//       popUp.classList.toggle('.card button');
//       });
// }

// let popUp = document.querySelectorAll('.card button');
// popUp.forEach((element) => {
//     element.addEventListener("click",() => {
//       let div = document.createElement('div');
//       let img = document.createElement('img');
//       let h2 = document.createElement('h2');
//       let p = document.createElement('p');
//       let body = document.querySelector('body');
//       div.append(img);
//       div.append(h2);
//       div.append(p);
//       console.log(div);
//       document.body.appendChild(div);
//     })
//   });

  // Sélectionner tous les boutons "Get more info"

const buttons = document.querySelectorAll('.card button');
const imgTab =document.querySelectorAll('.card img');
// Ajouter un événement de clic à chaque bouton

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    
    // Créer la popup

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popupContent">
        <img src='${imgTab[i].src}'>
        <h2>${this.previousElementSibling.textContent}</h2>
        <p>${this.previousElementSibling.querySelector('.cardContent p').textContent}</p>
        <button class="closeBtn">Close</button>
      </div> `;
    const sections = document.body.querySelectorAll('section');
    let thirdSection = sections[2];
    thirdSection.appendChild(popup);

    // document.body.appendChild(popup);

    console.log(buttons);

    // Ajouter un événement de clic au bouton "Close"

    const closeBtn = popup.querySelector('.closeBtn');
    closeBtn.addEventListener('click', function() {
      popup.remove();
    });
  });
}