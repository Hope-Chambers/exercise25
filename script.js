window.addEventListener("load", function(){
    let form=document.querySelector("form");
    form.addEventListener("submit", function(event){
       let usernameInput = document.querySelector("input[name=testName]");
        let message = document.getElementById("message");
       if(testName.value ===""){
        message.innerHTML="please enter name";
        event.preventDefault();

       }
    })
})