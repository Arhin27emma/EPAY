let clicked = false
function menus() {

    let show = document.querySelector(".show");
    let close = document.querySelector(".close");
    let open = document.querySelector(".open");

    if (!clicked) {
        clicked = true;
        show.style.display = "block";
        close.style.display = "block";
        open.style.display = "none";
    }
    else{
        clicked = false;
        show.style.display = "none";
        close.style.display = "none";
        open.style.display = "block";
    }
    
}
