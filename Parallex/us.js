const track = document.getElementById("imagess");

window.onmousedown=e=>{
    track.dataset.mouseDownAt = e.clientX;
 }

 window.onmouseup=()=>{
    track.dataset.mouseDownAt="0";
    track.dataset.pervPercentage=
 }

 window.onmousemove=e=>{
    if(track.dataset.mouseDownAt=="0") return;      
    const mouseDelta=parseFloat(track.dataset.mouseDownAt)-e.clientX,
        maxDelta=window.innerwidth/2;
    const percentage=(mouseDelta/maxDelta)* -100,
        nextPercentage=parseFloat(track.dataset.pervPercentage)+percentage ;
    
    track.style.transform='translate(${nextPercentage}%,-50%)';
 }