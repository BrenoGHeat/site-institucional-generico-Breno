function handleModal () {
    const buttonHeader = document.querySelector("#showMessageHeader")
    const modalContainer = document.querySelector("#modalController")
    const buttonFAQ = document.querySelector("#showMessageFAQ")

    buttonHeader.addEventListener('click' , () => {
        modalContainer.showModal();
    
    });

    buttonFAQ.addEventListener('click', () => {
        modalContainer.showModal();

});

closeModal()

}

function closeModal () {
    const button= document.querySelector("#closeModal")
    const modalContainer = document.querySelector("#modalController")

    button.addEventListener('click' , () => {
        modalContainer.close()
    })
}

handleModal();