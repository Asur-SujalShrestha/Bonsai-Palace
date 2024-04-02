var images = ['../images/aayusha.jpg', '../images/sujalportfolio1.jpg', '../images/rahul.jpg', '../images/me.jpg', '../images/shubham.jpg', '../images/saiyam.jpg']
var x = 0;
var imgs = document.getElementById('img');
setInterval(slider, 3000);

// console.log("The variable imgs contains: "+imgs)

function slider() {
    if (x < images.length) {
        x = x + 1;
    }
    else {
        x = 1;
    }
    imgs.innerHTML = "<img src=" + images[x - 1] + " style='height: 500px; object-fit: cover;' >";
}
