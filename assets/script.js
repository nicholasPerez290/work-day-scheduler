var now = moment()
console.log(now);
setInterval(function(){
    now = moment();
    $("#currentDay").text(now.format("dddd, MMMM Do, s"));
},1000);
savei = $('i');
textArea = $('.textarea');
time = $('.hour');
textBox = $('.text-holder');
console.log(time[1])
console.log(now.format('H'));
for(var i = 0; i <= 8; i++){
    var orgIndex = JSON.parse(localStorage.getItem(`index${i}`));
    var orgText = JSON.parse(localStorage.getItem(`text${i}`));
    textArea[i].textContent = orgText
}
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
savei.on('click', function(event){
    var target = event.target
    var index = target.getAttribute('value')
    console.log(index)
    var text = textArea[index].value
    console.log(text)
    localStorage.setItem(`index${index}`,JSON.stringify(index));
    localStorage.setItem(`text${index}`,JSON.stringify(text));
    
})
