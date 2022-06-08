var SELECTION_STORAGE_KEY = 'SELECTION_STORAGE'

let hideCategory = ['hair', 'face', 'body']
let showCategory = new Array() 

jQuery(() => {
    $('.product-lists').css('visibility', 'visible')
    handleSelection(localStorage.getItem(SELECTION_STORAGE_KEY))
})

function categoryButtonClicked(category){
    localStorage.setItem(SELECTION_STORAGE_KEY, category)
    handleSelection(category)
}

function handleSelection(selection){
    changeArray(selection)
    manageDisplay()
    resetArray()
}

function changeArray(selection){
    hideCategory.splice(hideCategory.indexOf(selection), 1)
    showCategory.push(selection)
}

function manageDisplay(){
    hideCategory.forEach(category => {
        $("." + category + "-products").addClass("unsee")
    })
    showCategory.forEach(category => {
        $("." + category + "-products").removeClass("unsee")
    })
}

function resetArray(){
    hideCategory.push(showCategory[0])
    showCategory.pop()
}