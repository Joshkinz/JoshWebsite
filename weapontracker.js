let totalTrue = 0;

const HYD_WEPS = [
    {
        id: 'hydCheck',
        clss: 'hydPLD',
        funct: 'clickHydaelyn()',
        src: 'images/icons/tank/PLD.png',
        name: 'Bastard Sword of Divine Light',
    },
    {
        id: 'hydCheck',
        clss: 'hydWAR',
        funct: 'clickHydaelyn()',
        src: 'images/icons/tank/WAR.png',
        name: 'Labrys of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydDRK',
        funct: 'clickHydaelyn()',
        src: 'images/icons/tank/DRK.png',
        name: 'Greatsword of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydGNB',
        funct: 'clickHydaelyn()',
        src: 'images/icons/tank/GNB.png',
        name: 'Gunblade of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydWHM',
        funct: 'clickHydaelyn()',
        src: 'images/icons/healer/WHM.png',
        name: 'Cane of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSCH',
        funct: 'clickHydaelyn()',
        src: 'images/icons/healer/SCH.png',
        name: 'Codex of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydAST',
        funct: 'clickHydaelyn()',
        src: 'images/icons/healer/AST.png',
        name: 'Torquetum of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSGE',
        funct: 'clickHydaelyn()',
        src: 'images/icons/healer/SGE.png',
        name: 'Wings of Divine Light',
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

    const element = document.getElementById("hydaelyn")
    element.appendChild(checkbox);
    element.appendChild(jobIcon);
    element.appendChild(name);
}

function drawHydWeps() {
    HYD_WEPS.forEach(weapon => {
        addWeaponInputRow(weapon.id, weapon.clss, weapon.funct, weapon.src, weapon.name);
    })
    console.log('Clicked!');
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