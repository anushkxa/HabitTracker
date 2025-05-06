window.onload = function () {
    let date = new Date();
    console.log(date);

    let currMonth = date.getMonth();
    let currDay = date.getDay();
    let currDate = date.getDate();
    let currYear = date.getFullYear();

    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let title = document.getElementById("title");
    title.innerText = "🌸"+months[currMonth]+"🌸";

    let habitTitle = document.getElementById("habitTitle");
    habitTitle.onclick = function () {
        let habits = prompt("What's your Habit?", habitTitle.innerHTML);
        if (habits.length === 0) {
            habitTitle.innerHTML = "Click to set your habit";
        } else {
            habitTitle.innerHTML = habits
        }
    };

    let daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
    let daysInTheMonth = daysInTheMonthList[currMonth];
    let dayCount = 0;
    let rowCount = 0;
    let days = document.getElementsByClassName("days");
     
    for (let i = 0; i < days.length; i++) {
        let day = days[rowCount].getElementsByClassName("day");
        for (let j = 0; j < day.length; j++) {
            if (dayCount === currDate - 1) {
                day[j].style.color = "rgb(234,1,144)";
                day[j].style.border = "2px solid black";
            }
            if (dayCount < daysInTheMonth) {
                day[j].innerHTML = dayCount + 1;
                day[j].setAttribute("id", "day" + (dayCount + 1));
                dayCount++;
            } else {
                day[j].innerHTML = "";
                day[j].style.backgroundColor = "white";
            }
        }
        rowCount++;
    }
    let daysCompleted=0;
    let completed = new Array(31);
    for(let i=0;i<dayCount;i++){
        let tempString=""+(i+1)+"-"+(currMonth+1)+"-"+currYear;
        console.log(tempString);
        let tempDay=localStorage.getItem(tempString);
        console.log(tempDay);
        if(tempDay==null || tempDay=="false"){
            localStorage.setItem(tempString,'false');
        }else if(tempDay=="true"){
            daysCompleted++;
        }
        totalDays.innerHTML=daysCompleted+"/"+daysInTheMonth;

    }

    for(let i=0;i<currDate; i++){
        let tempString=""+(i+1)+"-"+(currMonth+1)+"-"+currYear;

        let chosenDay=localStorage.getItem(tempString);
        console.log(i+1+":"+chosenDay);
        let chosenDayDiv=document.getElementById("day"+(i+1));
        if(chosenDay==="true"){
            chosenDayDiv.style.color="pink";
        }else if(chosenDay==="false"){
            chosenDayDiv.style.color="black";
        }
    }

    let dayDivs = document.querySelectorAll(".day");

dayDivs.forEach((dayDiv) => {
    dayDiv.onclick = function (e) {
        let num = e.target.innerText;
        if (!num) return;

        let selectedDate = e.target;
        let storageString = `${num}-${currMonth + 1}-${currYear}`;

        if (localStorage.getItem(storageString) === "false") {
            selectedDate.style.backgroundColor = "pink";
            localStorage.setItem(storageString, "true");
            daysCompleted++;
        } else if (localStorage.getItem(storageString) === "true") {
            selectedDate.style.backgroundColor = "white";
            localStorage.setItem(storageString, "false");
            daysCompleted--;
        }

        totalDays.innerHTML = `${daysCompleted}/${dayCount}`;

        if (daysCompleted === currDate) {
            alert("Great progress!");
        }
    };
});

let reset= document.getElementById("resetButton");
reset.onclick = function(){
    for(let i=0;i<dayCount;i++){
        let tempString=""+(i+1)+"-"+(currMonth+1)+"-"+currYear;
        localStorage.setItem(tempString,"false");
        let currDay=document.getElementById("day"+(i+1));
        currDay.style.backgroundColor="white";
    }
    daysCompleted=0;
}


};
