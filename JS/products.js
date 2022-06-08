var SELECTION_STORAGE_KEY = 'SELECTION_STORAGE'

let hideCategory = ['hair', 'face', 'body']
let showCategory = new Array() 
let productsData

jQuery(() => {
    updateData()
    handleSelection(getSelecttedcategory())
})

function updateData(){
    $.getJSON("../Assets/productsdata.json", data => {
        productsData = data
    }).done(() => {
        Object.entries(productsData).forEach(
            productData => {
                productUpdater(productData[0], productData[1])
            }
        )
    })
}

function productUpdater(category, products){
    products.forEach(product => {
            $("." + category + "-products").append(`
                <div class="product">
                    <img src="../Assets/Products/`+ product["picture"] +`" alt="product-image">
                    <div class="product-description">
                        <p>` + product["name"] +`</p>
                        <br>
                        <div onclick="gotoProduct('`+ category +`', '`+ product["name"] +`')">
                            See More »
                        </div>
                    </div>
                </div>
            `)
        }
    )
}

function getSelecttedcategory(){
    let selection = localStorage.getItem(SELECTION_STORAGE_KEY)
    if(selection == null){
        return hideCategory[0]
    } else {
        return selection
    }
}

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
    $('.product-lists').css('visibility', 'hidden')
    hideCategory.forEach(category => {
        $("." + category + "-products").addClass("hide")
    })
    showCategory.forEach(category => {
        $("." + category + "-products").removeClass("hide")
    })
    $('.product-lists').css('visibility', 'visible')
}

function resetArray(){
    hideCategory.push(showCategory[0])
    showCategory.pop()
}

function gotoProduct(category, productName){

}