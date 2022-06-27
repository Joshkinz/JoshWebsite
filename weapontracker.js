let totalTrue = 0;

const HYD_WEPS = 19;

function updateCount() {
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    document.getElementById("obtained").innerHTML = "Total Obtained: " + count;

}

function updateHydaelyn() {
    let count = document.querySelectorAll('input[id="hydCheck"]:checked').length;
    document.getElementById("hydPercent").innerHTML = "Hydaelyn -  " + Math.trunc(count / HYD_WEPS * 100) + "%";
}

function clickHydaelyn() {
    updateCount();
    updateHydaelyn();
}
