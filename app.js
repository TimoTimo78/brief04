// ************************************carrousel************************************

document.body.onload=function(){
    nbr=8;
    p=0;
    container=document.getElementById("container");
    d=document.getElementById("d");
    g=document.getElementById("g");
    container.style.width=(250*nbr)+"px";
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
    container.style.transform="translate("+p*200+"px)";
    container.style.transition="all 0.2s ease";
    afficherMasquer();
}
g.onclick=function(){
    if(p>-nbr+1)
    p--;
    container.style.transform="translate("+p*200+"px)";
    container.style.transition="all 0.2s ease";
    afficherMasquer();
}

