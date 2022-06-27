let totalTrue = 0;

const HYD_WEPS = [
    {
        id: 'hydCheck',
        clss: 'hydPLD',
        funct: updateHydaelyn,
        src: 'images\icons\tank\PLD.png',
        name: 'Bastard Sword of Divine Light',
    }
]


function addWeaponInputRow(idName, className, functName, srcName, wepName) {
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', idName);
    checkbox.setAttribute('class', className);
    checkbox.setAttribute('onClick', functName);

    let jobIcon = document.createElement('img');
    jobIcon.setAttribute('id', 'classIcon');
    jobIcon.setAttribute('src', srcName);

    let name = document.createElement('label');
    name.setAttribute('class', 'className');
    name.innerHTML = wepName;

    document.body.appendChild('checkbox');
    document.body.appendChild('jobIcon');
    document.body.appendChild('name');
}

function updateCount() {
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    document.getElementById("obtained").innerHTML = "Total Obtained: " + count;

}

function updateHydaelyn() {
    let count = document.querySelectorAll('input[id="hydCheck"]:checked').length;
    document.getElementById("hydPercent").innerHTML = "Hydaelyn -  " + Math.trunc(count / HYD_WEPS.length * 100) + "%";
}

function clickHydaelyn() {
    updateCount();
    updateHydaelyn();
}
