new Chart(document.getElementById("chart1"),{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
data:[5,8,3,12,7,14,10],
borderColor:"#6c5ce7"
}]
},
options:{responsive:true}
})

new Chart(document.getElementById("chart2"),{
type:"bar",
data:{
labels:["Tasks","Projects","Notes","Events"],
datasets:[{
data:[14,3,8,5],
backgroundColor:["#6c5ce7","#00cec9","#fdcb6e","#a29bfe"]
}]
},
options:{responsive:true}
})
