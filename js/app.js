
const modalWindow = document.getElementById('modalWindow')
const modalWindowWrapper = document.getElementById('modalWindowWrapper')

modalWindowWrapper.addEventListener('click', event => {
    // const playBtn = document.getElementById('playVideoBtn')
    const modalBackdrop = document.getElementById('modalBackdrop')
    const playBtn = event.target.closest('.play-btn')
    console.log(playBtn);
    if (playBtn){
        openModal();
    }
    else if(event.target === modalBackdrop){
        closeModal();
        console.log(modalBackdrop);
    }
})
document.addEventListener('keyup', event => {
    if (event.key === 'Escape'){
        closeModal();
    }
})

function openModal() {
    document.body.classList.add('show-modal')
}


function closeModal() {
    document.body.classList.remove('show-modal')
}