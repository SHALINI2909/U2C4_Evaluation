// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))
console.log(matchArr);

displayData(matchArr)

 document.querySelector("#filterVenue").addEventListener("change",handleFilter)

function handleFilter(){
   // console.log("click")
    var selected = document.getElementById("filterVenue").value;
    console.log(selected)
     var filteredList = matchArr.filter(function(elem){
         return elem.venue==selected;
    })
     console.log(filteredList)
     displayData(filteredList)
}

var favArr = JSON.parse(localStorage.getItem(favArr)) || []

function displayData(data){
    document.querySelector("tbody").innerHTML=null
    data.forEach(function(elem){

var tr = document.createElement("tr")

var td1 = document.createElement("td");
td1.innerText = elem.matchNumber


var td2 = document.createElement("td");
td2.innerText = elem.teamA

var td3 = document.createElement("td");
 td3.innerText = elem.teamB


var td4 = document.createElement("td");
  td4.innerText = elem.date

var td5 = document.createElement("td");
 td5.innerText = elem.venue

var td6 = document.createElement("td");
 td6.innerText = "Add as Favourites";
 td6.style.color = "green";
 td6.style.cursor = "pointer"
td6.addEventListener("click",function(){
    favrtFun(elem)
})

tr.append(td1, td2, td3, td4, td5, td6)
document.querySelector("tbody").append(tr)
    })
}

function favrtFun(elem){
    favArr.push(elem)
    console.log(favArr)
    localStorage.setItem("favourites",JSON.stringify(favArr))
}




