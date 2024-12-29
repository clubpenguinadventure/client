document.addEventListener('DOMContentLoaded', function(){
    const protocol = window.location.protocol;  // This gets "http:" or "https:"
    const url = `${protocol}//localhost:3000/users/create`;
    document.getElementsByClassName('create-button')[0].addEventListener("click", () => {
        const username = document.getElementById('input-username').value;
        const email = document.getElementById('input-email').value;
        const password = document.getElementById('input-password').value;
        const captcha = document.getElementById('hcaptcha');
        console.log(email);
        const data = JSON.stringify({ 
            username: username, 
            email: email,
            password: password,
        });
        fetch(url , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: data
            
        }).then(data => {
            console.log("Success:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
    
    
});

