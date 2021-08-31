var x = 0;
var textEffect = "Developer";
var Container = document.getElementById('typing');
function  animate(){
    if(x < textEffect.length){
        Container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 80);
    }
}
animate();

var typed = new Typed('.animate', {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
