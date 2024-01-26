// Js for form validation
function formval(){
    // calling the value of variables
    var a = document.getElementById("name").value; 
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    if (a=="" || b=="" || c==""){
        alert ("Please enter all the required details.")
    }
    else
    {
        alert("You have been Registered.")
    }
}


// JS to change image in single product page 
var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");
        //using array which helps to store the values
        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src;
        }
        
function ComingSoon() {
    alert("Feature coming soon.")
}
