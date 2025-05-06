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
    title.innerText = months[currMonth];

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
};
