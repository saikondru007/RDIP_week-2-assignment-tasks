 function validateform(){ 
    var name=document.myform.name.value; 
    var password=document.myform.password.value; 
 
    if (name==null || name==""){ 
       alert("Name can't be blank"); 
       return false;
       } 
       else if(!isNaN(name))
                    {
                      alert("Please Enter Only Characters");
                      return false;
                    }
                     else if ((name.length < 5) || (name.length > 15))
                    {
                       alert("Your Character must be 5 to 15 Character");
                       return false;
                     }
    else if(password.length<6){ 
       alert("Password must be at least 6 characters long."); 
       return false; 
      }
    else if(!(/^\d{10}$/).test(document.myform.phno.value))
    {
       alert("you have entered an invalid phone number!");
     return false;
    }
    else if(!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.myform.email.value))
    {
     alert("you have entered an invalid email address!");
     return false;
    }
  
   } 