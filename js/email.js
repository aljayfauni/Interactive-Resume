var send_btn = document.getElementById('send_btn');
send_btn.addEventListener('click',function(e){
    e.preventDefault()
   const sender_n = document.getElementById('name').value;
   const sender_email = document.getElementById('email').value;
   const sender_company = document.getElementById('company').value;
   const sender_message = document.getElementById('message').value;

   Email.send({
    Host : "smtp.gmail.com",
    Username : "alramile2@gmail.com",
    Password : "tkectljunlngcsfo",
    To : 'alramile2@gmail.com',
    From : sender_email,
    Subject : sender_company,
    Body : sender_n+': '+sender_message
}).then(
  message => alert(message)
);

});
