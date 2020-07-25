const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');
const mediaWidth = window.matchMedia("(max-width: 376px)");
const creator = document.getElementById("creator");
const legend = document.getElementById('legend');
const body = document.getElementsByTagName('body')[0];

if (mediaWidth.matches) {
    document.addEventListener('click', function(target){
        if (target.target != shareBtn && target.target != shareMenu) {
            shareMenu.style.display = 'none';
            legend.style.backgroundColor = '#fff';
            legend.innerHTML = '';
            legend.appendChild(creator);
            legend.appendChild(shareBtn);
        }
    });
    
    shareBtn.addEventListener('click', function(){
        shareMenu.style.display = 'flex';
        legend.style.backgroundColor = 'hsl(217, 19%, 35%)';
        legend.innerHTML = '';
        legend.appendChild(shareMenu);
    });
} else {
    document.addEventListener('click', function(target){
        if (target.target != shareBtn && target.target != shareMenu) {
            shareMenu.style.display = 'none';
        }
    });
    
    shareBtn.addEventListener('click', function(){
        shareMenu.style.display = 'flex';
    });

}
