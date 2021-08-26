const loadText = document.getElementsByClassName("loading-text")[0];
const bg = document.getElementsByClassName("bg")[0];

let load = 0;
// eslint-disable-next-line no-use-before-define
const int = setInterval(blurring, 30);

// eslint-disable-next-line max-len
const scale = (num, inMin, inMax, outMin, outMax) => ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

function blurring() {
    load += 1;

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
