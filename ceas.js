const ceas = document.querySelector('#ceas');
let lastAdded=new Date();

let resetWatch=function(){
    lastAdded=new Date();
}



let showTime = function(){

    let today=new Date();
    let hour=today.getHours()-lastAdded.getHours();
    let minutes=today.getMinutes()-lastAdded.getMinutes();
    
    if(hour>=1){
        ceas.innerHTML=`<p>Last added ${hour} hour(s) and
         ${minutes} minute(s) ago</p>`;
    }
    else if(minutes>0){
        ceas.innerHTML=`<p>Last added ${minutes} minute(s) ago</p>`;

    }
    else{
        ceas.innerHTML=`<p>Last added less than a minute ago</p>`;

    }

}
setInterval(function() {

        showTime();
    
}, 6000);