const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-completed");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn")
let position = 0;
let barWidth = 0;

const nextProgress = () => {
    prevBtn.removeAttribute("disabled", "")
    prevBtn.classList.remove("disabled")
    barWidth += 33.3;
    position += 1;
    progressBar.style.width = `${barWidth}%`;

    circles[position].classList.add("filled")

    if(position === 3){
        nextBtn.setAttribute("disabled", "")
        nextBtn.classList.add("disabled")
    }
}

const prevProgress = () => {
    nextBtn.removeAttribute("disabled", "")
    nextBtn.classList.remove("disabled")
    barWidth -= 33.3;
    progressBar.style.width = `${barWidth}%`;
    circles[position].classList.remove("filled")

    position -= 1;
    if(position === 0){
        prevBtn.setAttribute("disabled", "")
        prevBtn.classList.add("disabled")
    }
}

nextBtn.addEventListener("click", nextProgress)
prevBtn.addEventListener("click", prevProgress)