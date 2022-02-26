function login(){
    if($("#username").val()=="admin" && $("#password").val()=="password")
    {
        alert("Valid user");
    }else{
        alert("Not valid user!!!");
    }
}