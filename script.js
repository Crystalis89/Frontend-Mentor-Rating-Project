const submitbutton = document.getElementById('submitbutton')

submitbutton.addEventListener("click", (event) => {
    const userrating = document.getElementById('userrating')
    const ratingform = document.getElementById('ratingform')
    const thankyoupanel = document.getElementById('thankyoupanel')
    const radiobuttons = document.getElementsByClassName('radio')

    for (const button of radiobuttons) {
        if (button.checked === true) {
            ratingform.style.display = 'none'
            thankyoupanel.style.display = 'flex'
            userrating.textContent = `You selected ${button.value} out of 5`

            return
        }
    }

    alert("Please select a rating before click Submit.")

});