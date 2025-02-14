document.addEventListener("DOMContentLoaded", function () {

    const progressBars = document.querySelectorAll(".progress-fill");

    const progressValues = [10, 80]; 

    progressBars.forEach((bar, index) => {
        bar.style.width = `${progressValues[index]}%`;
    });
});
