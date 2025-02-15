document.addEventListener("DOMContentLoaded", function () {

    const progressBars = document.querySelectorAll(".progress-fill");

    const progressValues = [70, 10, 35, 90, 10, 100,20]; 

    progressBars.forEach((bar, index) => {
        bar.style.width = `${progressValues[index]}%`;
    });
});
