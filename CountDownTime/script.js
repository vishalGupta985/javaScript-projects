const endDate = "14 July 2024 10:00 PM";

document.querySelector("[data-endDate]").innerText = endDate;
inputs = document.querySelectorAll("input");

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;

    if(diff < 0) return;
    inputs[0].value = Math.floor((diff / 3600) / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor((diff % 60));
    // // converting in days
    // let days = Math.floor((diff / 3600 ) / 24)
    // console.log(days)
    // // converting in hours
    // let hours = Math.floor((diff / 3600) % 24)
    // console.log(hours)
    // // converting in minutes
    // let minutes = Math.floor((diff / 60) % 60)
    // console.log(minutes);

    // let secends = Math.floor((diff % 60))
    // console.log(secends)
}

clock()

setInterval(() => {
    clock();
}, 1000);