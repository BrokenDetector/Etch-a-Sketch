const create16 = document.getElementById('16x16')
const create32 = document.getElementById('32x32')
const create64 = document.getElementById('64x64')
const container = document.querySelector('.container')
const btn = document.querySelectorAll('button')

create16.addEventListener('click', () => grid(16, 16))
create32.addEventListener('click', () => grid(32, 32))
create64.addEventListener('click', () => grid(64, 64))

// Create grid
function createDivs(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
        let divs = document.createElement('div')
        divs.setAttribute('id', 'divs')
        container.appendChild(divs)
    }
}

function grid(rows, cols) {
    container.innerHTML = ''
    createDivs(rows, cols)
}


