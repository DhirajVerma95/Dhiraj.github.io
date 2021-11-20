
function sendmail(){

    const btn11 = document.querySelector('button');
    const inputs = document.querySelector('form'); 
    Email.send({
        Host : "smtp.gmail.com", 
        SecureToken : 'f7dde72f-b067-4a8a-93c2-2af9f4d335c0',
        To : 'vermainfo@gmail.com',
        From : 'porthfoliomail@gmail.com',
        Subject : "Mail From Porthfolio" ,
        Body : inputs.elements["Message"].value + "<br>" + inputs.elements["Name"].value
         }).then(function(message){
        alert("Thanks Your Mail sent Successfully!")
        })
}