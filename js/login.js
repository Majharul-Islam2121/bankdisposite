document.getElementById('btn-submit').addEventListener('click',function(){
    const emailAddress =document.getElementById('user-email')
    const emailbtn =emailAddress.value
    
    
    const password =document.getElementById('user-password')
    const passwordBtn=password.value
    
    if (emailbtn==='abdur333@gmail.com' && passwordBtn ==='rahim') {
        console.log(window.location.href='bank.html')
    } else {alert('please inter current password') }
    
    })