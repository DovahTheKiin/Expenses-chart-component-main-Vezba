const chartBody = document.querySelectorAll(".chart-body")
const chartSpendings = document.querySelectorAll(".chart-spendings");
const chartDailyAmount = document.querySelectorAll(".daily-amount");
const dayName = document.querySelectorAll(".day-name")
const chart = document.querySelector(".chart")
const jsonButtonWeek1 = document.querySelector(".json-button-week1")
const jsonButtonWeek2 = document.querySelector(".json-button-week2")

fetch("./data.json")
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    for (let i = 0; i < data.length; i++) {
        let info = data[i];
        chartDailyAmount[i].innerHTML = info.amount.toString();
        dayName[i].innerHTML = info.day.toString();
    }
    chartData();
});

jsonButtonWeek1.addEventListener('click', () => {
    fetch("./data.json")
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    for (let i = 0; i < data.length; i++) {
        let info = data[i];
        chartDailyAmount[i].innerHTML = info.amount.toString();
        dayName[i].innerHTML = info.day.toString();
    }
    chartData();
    });
})

jsonButtonWeek2.addEventListener('click', () => {
    fetch("./dataWeek2.json")
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    for (let i = 0; i < data.length; i++) {
        let info = data[i];
        chartDailyAmount[i].innerHTML = info.amount.toString();
        dayName[i].innerHTML = info.day.toString();
    }
    chartData();
    });
})

function chartData() {
    for(let i=0;i<chartBody.length;i++) {
        chartBody[i].addEventListener('mouseover', () =>{
            chartSpendings[i].classList.add('active');
            if(chartBody[i].classList.contains("selected")) {
                chartBody[i].classList.add('hover-color-selected');
            } else {
                chartBody[i].classList.add('hover-color');
            }
        })
        chartBody[i].addEventListener('mouseout', () =>{
            chartSpendings[i].classList.remove('active');
            chartBody[i].classList.remove('hover-color-selected');
            chartBody[i].classList.remove('hover-color');
        })
        let dailyAmountNumber = Number(chartDailyAmount[i].innerHTML);
        const chartBodyHeight = 152.81;
        const topNumber = 35;
        console.log(dailyAmountNumber);
        if(dailyAmountNumber >= 152.81) {
            chartBody[i].style.marginTop = "0px";
            chartSpendings[i].style.top = "-35px";
        } else if (dailyAmountNumber <= 0) {
            chartBody[i].style.marginTop = "152.81px";
            chartSpendings[i].style.top = "117.81px";
        } else {
            let marginNumber = chartBodyHeight - dailyAmountNumber;
            let topNumberResult = marginNumber - topNumber;
            chartBody[i].style.marginTop = marginNumber.toString() + "px";
            chartSpendings[i].style.top = topNumberResult.toString() + "px";
        }
    }
}