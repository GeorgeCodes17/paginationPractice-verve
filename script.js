console.log("JS Loaded")
const pageFileNames = ["index.html", "page-2.html", "page-3.html", "page-4.html"]
const pageButtons = ["page1-btn", "page2-btn", "page3-btn", "page4-btn"]
let getPageIVal = () => {
    if (document.cookie.split(";")[3] === "undefined"){return undefined}
     return document.cookie.split(";")[3].split("=")[1]
}
// check if cookies exist
if (getPageIVal === undefined){document.cookie = "pageI=0"}

document.getElementById(pageButtons[0]).addEventListener("click", function(){
    document.cookie = "pageI=0"
    loadNewPage()
})
document.getElementById(pageButtons[1]).addEventListener("click", function(){
    document.cookie = "pageI=1"
    loadNewPage()
})
document.getElementById(pageButtons[2]).addEventListener("click", function(){
    document.cookie = "pageI=2"
    loadNewPage()
})
document.getElementById(pageButtons[3]).addEventListener("click", function(){
    document.cookie = "pageI=3"
    loadNewPage()
})

function previousPage(){
    pageI = getPageIVal()
    if(pageI !== "0"){
        pageI--
        document.cookie = "pageI=" + pageI
        loadNewPage()
    }
}
function nextPage(){
    pageI = getPageIVal()
    if(pageI !== (pageFileNames.length-1).toString()){
        pageI++
        document.cookie = "pageI=" + pageI
        loadNewPage()
    }
}
function loadNewPage(){
    pageI = getPageIVal()
    let numOfBacksl = 0, i = 0, url=document.URL
    for (let elem of url){
        if (elem === "/"){
            numOfBacksl ++
        }if(numOfBacksl >2){break}
        i++
    }
    console.log(i)
    // i is the index of the element after the root of url
    url = url.slice(0,i)
    let nextPage = pageFileNames[pageI]
    newUrl = url + "/" + nextPage
    console.log(newUrl)
    window.location.replace(newUrl)
    document.cookie = "pageI=" + pageI
    getPageIVal()
}