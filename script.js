let imgIndex = 2;
showImg(imgIndex);

function plusImg(n) {
    showImg(imgIndex += n)
}

function currentImg(n) {
    showImg(imgIndex = n)
}

function showImg(n) {
    let i;
    let imgs = document.querySelectorAll("img")
    if (n > imgs.length) {imgIndex = 1}
    if (n < 1) {imgIndex = imgs.length}
    for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";
    }
    imgs[imgIndex - 1].style.display = "block";
}

const prev = document.querySelector(".prev")
prev.addEventListener("click", () => {
    plusImg(-1)
})

const next = document.querySelector(".next")
next.addEventListener("click", () => {
    plusImg(1)
})