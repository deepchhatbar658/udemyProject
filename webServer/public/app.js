    const messageOne= document.querySelector('#message-1')
    const messageTwo= document.querySelector('#message-2')

    const formData = document.querySelector('form')
    const loc = document.querySelector('input')
    formData.addEventListener('submit',(e)=>{
        const searchTerm =loc.value
        e.preventDefault()
        fetch(`http://localhost:3000/weather?address=${searchTerm}`)
    .then((response) => {
         response.json()
        .then((data) => {
        console.log(data);
        if(data.error){
            messageTwo.textContent=data.error
        }else{

            messageOne.textContent=data.data
        }

    })
})
})