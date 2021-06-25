// current time
var now = moment()
console.log(now);
// self updating time
setInterval(function(){
    now = moment();
    $("#currentDay").text(now.format("dddd, MMMM Do"));
},1000);
// saving our save icons and textareas into arrys with corresponding index
savei = $('i');
textArea = $('.textarea'); 
textBox = $('.text-holder');
console.log(now.format('H'));
// displaying saved notes
for(var i = 0; i <= 8; i++){
    var orgIndex = JSON.parse(localStorage.getItem(`index${i}`));
    var orgText = JSON.parse(localStorage.getItem(`text${i}`));
    textArea[i].textContent = orgText
}
// using hour value of moment to decide witch to apply past present and future class
for(var i = 0; i < 24; i++){
    if(i > 8){

    }
    else if((now.format('H') - 9) > i){
        var currentHour = textBox[i];
        console.log(currentHour);
        currentHour.setAttribute('class','past');
    }
    else if((now.format('H')-9) == i){
        var currentHour = textBox[i];
        console.log(currentHour);
        currentHour.setAttribute('class','present');
    }
    else if((now.format('H')-9) < i){
        var currentHour = textBox[i];
        console.log(currentHour);
        currentHour.setAttribute('class','future');
    }
}
// saving input to local storage
savei.on('click', function(event){
    var target = event.target
    var index = target.getAttribute('value')
    console.log(index)
    var text = textArea[index].value
    console.log(text)
    localStorage.setItem(`index${index}`,JSON.stringify(index));
    localStorage.setItem(`text${index}`,JSON.stringify(text));
    
})
