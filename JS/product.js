function hairBtnClicked(){
    console.log("hello")
    $(".hair-products").removeClass("unsee");
    $(".body-products").addClass("unsee");
    $(".face-products").addClass("unsee");
}

function faceBtnClicked(){
    $(".face-products").removeClass("unsee");
    $(".body-products").addClass("unsee");
    $(".hair-products").addClass("unsee");
}

function bodyBtnClicked(){
    $(".body-products").removeClass("unsee");
    $(".hair-products").addClass("unsee");
    $(".face-products").addClass("unsee");
}