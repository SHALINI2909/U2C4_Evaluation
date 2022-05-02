// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",infoSubmit)
var matchArr = JSON.parse(localStorage.getItem( "schedule")) || []

function infoSubmit(){
    event.preventDefault()


var matchObj = {
   matchNumber: masaiForm.matchNum.value,
   teamA : masaiForm.teamA.value,
   teamB : masaiForm.teamB.value,
   date : masaiForm.date.value,
   venue : masaiForm.venue.value
}

matchArr.push(matchObj)
console.log(matchArr)
localStorage.setItem("schedule", JSON.stringify(matchArr))
window.location.href="matches.html"
}