let totalTrue = 0;

const HYD_WEPS = [
    {
        id: 'hydCheck',
        clss: 'hydPLD',
        boss: 'HYDAELYN',
        src: 'images/icons/tank/PLD.png',
        name: 'Bastard Sword of Divine Light',
    },
    {
        id: 'hydCheck',
        clss: 'hydWAR',
        boss: 'HYDAELYN',
        src: 'images/icons/tank/WAR.png',
        name: 'Labrys of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydDRK',
        boss: 'HYDAELYN',
        src: 'images/icons/tank/DRK.png',
        name: 'Greatsword of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydGNB',
        boss: 'HYDAELYN',
        src: 'images/icons/tank/GNB.png',
        name: 'Gunblade of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydWHM',
        boss: 'HYDAELYN',
        src: 'images/icons/healer/WHM.png',
        name: 'Cane of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSCH',
        boss: 'HYDAELYN',
        src: 'images/icons/healer/SCH.png',
        name: 'Codex of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydAST',
        boss: 'HYDAELYN',
        src: 'images/icons/healer/AST.png',
        name: 'Torquetum of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSGE',
        boss: 'HYDAELYN',
        src: 'images/icons/healer/SGE.png',
        name: 'Wings of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydMNK',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/MNK.png',
        name: 'Sainti of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydDRG',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/DRG.png',
        name: 'Partisan of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydNIN',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/NIN.png',
        name: 'Daggers of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSAM',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/SAM.png',
        name: 'Blade of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydRPR',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/RPR.png',
        name: 'War Scythe of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydBRD',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/BRD.png',
        name: 'Longbow of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydMCH',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/MCH.png',
        name: 'Pistol of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydDNC',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/DNC.png',
        name: 'Tathlums of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydBLM',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/BLM.png',
        name: 'Rod of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydSMN',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/SMN.png',
        name: 'Grimoire of Divine Light',
    },
    {
        id: 'hydCheck',
        class: 'hydRDM',
        boss: 'HYDAELYN',
        src: 'images/icons/dps/RDM.png',
        name: 'Foil of Divine Light',
    },
]

const END_WEPS = [
    {
        id: 'endCheck',
        clss: 'endPLD',
        boss: 'ENDSINGER',
        src: 'images/icons/tank/PLD.png',
        name: 'Bluefeather Sword',
    },
    {
        id: 'endCheck',
        clss: 'endWAR',
        boss: 'ENDSINGER',
        src: 'images/icons/tank/WAR.png',
        name: 'Bluefeather Axe',
    },
]

const HYDAELYN = {
    id: 'hydCheck',
    class: 'hydPercent',
    name: 'Hydaelyn',
    array: HYD_WEPS,
}

const ENDSINGER = {
    id: 'endCheck',
    class: 'endPercent',
    name: 'Endsinger',
    array: END_WEPS,
}

function updateCount(bossCheck, bossPercent, bossName, arrayName, obtainedName) {
    let percentCount = document.querySelectorAll('input[id=' + bossCheck + ']:checked').length;
    document.getElementById(bossPercent).innerHTML = bossName + " - " + Math.trunc(percentCount / arrayName.length * 100) + "%";
}

function addWeaponInputRow(idName, className, bossName, srcName, wepName, bossID) {
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', idName);
    checkbox.setAttribute('class', className);
    checkbox.setAttribute('onClick', 'updateCount(' + bossName + '.id, ' + bossName + '.class, ' + bossName + '.name, ' + bossName + '.array, ' + bossName + '.obtained)');

    let jobIcon = document.createElement('img');
    jobIcon.setAttribute('id', 'classIcon');
    jobIcon.setAttribute('src', srcName);

    let name = document.createElement('label');
    name.setAttribute('class', 'className');
    name.innerHTML = wepName;

    const element = document.getElementById(bossID)
    element.appendChild(checkbox);
    element.appendChild(jobIcon);
    element.appendChild(name);
}

function drawWeps(boss_weps, bossID) { //Figure out how to make this work with the boss_weps and bossID tags after work
    boss_weps.forEach(weapon => {
        addWeaponInputRow(weapon.id, weapon.clss, weapon.boss, weapon.src, weapon.name, bossID);
    })
}

function pageLoadDrawWeps() {
    drawWeps(HYD_WEPS, 'hydaelyn');
    drawWeps(END_WEPS, 'endsinger')
}