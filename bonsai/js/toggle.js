function toggle() {
    var p1 = document.getElementById('1');
    var p2 = document.getElementById('2');

    if (p1.style.display == "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }

    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}
document.getElementById('1').style.display = "block";