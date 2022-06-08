var SELECTION_STORAGE_KEY = 'SELECTION_STORAGE'

jQuery(() => {
    localStorage.clear()
})

function categoryClick(selection){
    localStorage.setItem(SELECTION_STORAGE_KEY, selection)
    window.location.href = '../products'
}