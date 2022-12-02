
document.addEventListener("DOMContentLoaded", function (event) {
    url = window.location.href;
    firebase.auth().onAuthStateChanged(function (user) {
        login_button = document.getElementById("get-started");
        
        if (user) {

            login_button.innerHTML = "Logout";
            login_button.setAttribute('onclick','logout()');
            // if (email){
                // email_input.value = user.email;
                global_email = user.email;
            // }
            // if (name_input){
                // name_input.value = user.displayName;
                // console.log("asd");
                global_name = user.displayName;
            // }
        } else {
            
            login_button.innerHTML = "Get started";
            login_button.setAttribute('onclick','divert()');    
        }
    });
});
