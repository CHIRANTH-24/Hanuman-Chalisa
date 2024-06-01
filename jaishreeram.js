var hc = document.getElementById('HanumanChalisa');
var noc = document.getElementById('NumberOfTimes');
const maxCount = 108;
var playCount = 0;
hc.addEventListener('ended',function(){
    playCount++;
    if(playCount < maxCount){
        hc.play();
    }
    noc.innerHTML = `${playCount}`;
});
hc.play().catch(error => {
    console.log('Audio was prevented',error);
})