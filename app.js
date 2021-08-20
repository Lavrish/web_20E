const btn = document.querySelector('#clickMe');
const block = document.querySelector('.color');
const titleName = document.querySelector('h1 > span');

const changeDivBackground = () => {
    block.classList.toggle('red');
    block.classList.toggle('green');

    titleName.innerText = 'Inna';

}

// btn.onclick = changeDivBackground;

btn.addEventListener('click', (event)=>{
    console.log( event );
    changeDivBackground();
})

// const onClickHandler = (event) => {
//     console.log( event )
//     changeDivBackground()
// }
//
// btn.addEventListener('click', onClickHandler)

