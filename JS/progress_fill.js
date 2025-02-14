document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress-fill");

    if (progressBar) {
        function updateProgress(value) {
            progressBar.style.width = `${value}%`;
        }

        updateProgress(30);
    } else {
        console.error("Elemento '.progress-fill' não encontrado!");
    }
});
