let accords = document.querySelectorAll('.accord');

accords.forEach(accord => {
    accord.addEventListener('click', () => {
        // closing all other accordions
        accords.forEach(otherAccord => {
            if (otherAccord !== accord){
                otherAccord.classList.remove('open')
                
            }
        });
        accord.classList.toggle('open');
    })
});