var SELECTION_STORAGE_KEY = 'SELECTION_STORAGE'

jQuery(() => {
    handleSelection(localStorage.getItem(SELECTION_STORAGE_KEY))
})

function handleSelection(selection){
    switch(selection){
        case "hair":
            hairBtnClicked()
            break
        case "face":
            faceBtnClicked()
            break
        case "body":
            bodyBtnClicked()
            break
        default:
            bodyBtnClicked()
            break
    }
}

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