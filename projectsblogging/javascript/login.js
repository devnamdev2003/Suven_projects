
function googleSignup() {
   // firebase google authentication
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
        
     console.log(token);
     console.log(user);
     
     if(user){
      //   document.getElementById("logout").style.display = "inline";
      //   window.location.href = "index.html?user="+user.displayName;
      $.ajax({
         type: 'post',
         url: 'count.php',
         data: {
           updateTotalUsers: "usersCount"
         },

         success: function() {
            console.log("userName");
            window.location.href = "index.html?user="+user.displayName;
         }
       });
        

     }else{
        document.getElementById("logout").style.display = "none";
     }
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
        
      console.log(error.code)
      console.log(error.message)
   });
}
/********************************************************************************************************************* */ 


function googleSignin() {
   // firebase google authentication
   var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
         
      console.log(token);
      console.log(user);
      
      if(user){
         // document.getElementById("logout").style.display = "inline";
         window.location.href = "index.html";

      }else{
         document.getElementById("logout").style.display = "none";
      }
    }).catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
         
       console.log(error.code)
       console.log(error.message)
    });
 }


/***********************************************************************************************************************/  



function fbSignup(){
   var provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      if(user){
         //   document.getElementById("logout").style.display = "inline";
         //   window.location.href = "index.html?user="+user.displayName;
         $.ajax({
            type: 'post',
            url: 'count.php',
            data: {
              updateTotalUsers: "usersCount"
            },
   
            success: function() {
               console.log("userName");
               window.location.href = "index.html?user="+user.displayName;
            }
          });

         }else{
            document.getElementById("logout").style.display = "none";
         }

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function fbSignin(){
   var provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}


/******************************************************************************************************************** */


function logout() {
   firebase.auth().signOut()
    
   .then(function() {
      alert('Signout Successful');
      console.log('Signout Succesfull');
      window.reload();
   }, function(error) {
      console.log('Signout Failed')  
   });
}
