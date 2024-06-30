document.addEventListener("DOMContentLoaded", () => {
    let list_number = []
    var sum = 0
    var check = false;
    var seconds = 0
    var minutes = 0
    var hours = 0



    for (let i = 0; i<25; i++){
        let row_number = []
        for (let n = 0; n<25; n++){
            number = Math.floor(Math.random()*9)
            sum = sum + number
            row_number.push(number)
        }
        list_number.push(row_number)
    }

    for (let i = 0; i<25; i++){
        for (let n = 0; n<25; n++){
            document.getElementById("row-"+(i+1).toString()+"-col-"+(n+1).toString()).innerHTML = list_number[i][n]
        }
    }


    var stopwatch = setInterval(()=>{
        
        seconds += 1
        minutes = Math.floor(seconds / 60)
        hours = Math.floor(minutes/60)
        console.log(minutes)
        let seconds_display = seconds - minutes*60
        let minutes_display = minutes - hours*60

        if (seconds_display < 10){
            document.getElementById("second").innerHTML = "0"+seconds_display.toString()
        }
        else {
            document.getElementById("second").innerHTML = seconds_display
        }

        if (minutes_display < 10){
            document.getElementById("minute").innerHTML = "0"+minutes_display.toString()
        }
        else {
            document.getElementById("minute").innerHTML = minutes_display
        }

        if (hours < 10){
            document.getElementById("hour").innerHTML = "0"+hours.toString()
        }
        else {
            document.getElementById("hour").innerHTML = hours
        }

    }, 1000)
    



    console.log(sum)
    console.log(list_number)
    document.querySelector("button").onclick = () => {
    if (document.querySelector("input").value != ""){
        if (document.querySelector("input").value == sum){
            console.log("yes")
            document.getElementById("result").innerHTML = "CORRECT"
            document.getElementById("result").style.color = "green"
            clearInterval(stopwatch)

        }
        else {
            document.getElementById("result").innerHTML = "WRONG"
            document.getElementById("result").style.color = "red"
        }   

        document.querySelector("input").value = ""
    }
    else{
        document.getElementById("result").innerHTML = "Please Fill in the blank"
    }
        
    }
    
})