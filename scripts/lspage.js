document.addEventListener("DOMContentLoaded", function() {
    let covercontent = document.getElementById("cover");
    
    let state = "login";
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    function changeContent() {
        if (state === "login") {
            covercontent.style.transform = "translateX(50%)";
            
            covercontent.innerHTML = `<style>.hx1{position:relative;top:-50px}</style><h1 style="font-size:36px;" id="h1" class="hx1">Welcome Back!</h1><br>
                <p class="hx1">We're thrilled to see you again. Please enter your credentials to access your account and continue exploring our exquisite collection. Your gateway to elegance awaits.</p>`;
        } else if (state === "signuppage") {
            covercontent.style.transform = "translateX(-50%)";
            covercontent.innerHTML = `<style>.hx1{position:relative;top:-50px}</style><h1 style="font-size:36px;" id="h1" class="hx1">Join Our Community!</h1><br>
                <p class="hx1">Welcome to the world of elegance. By creating an account, you’ll be the first to discover our exclusive collections, receive special offers, and enjoy a seamless shopping experience. Let's get started on this beautiful journey together.</p>`;
        }
    }
    let showpass1 = document.getElementById("showpass1")
    let showpass2 = document.getElementById("showpass2")
    showpass1.addEventListener("click", function() {
        if (password1.type === "password") {
            password1.type = "text";
        } 
        else {
            password1.type = "password";
        }
        
    });
    showpass2.addEventListener("click", function() {
        if (password2.type === "password") {
            password2.type = "text";
        } 
        else {
            password2.type = "password";
        }
        
    });

    changeContent();
    document.getElementById("signuppage").addEventListener("click", function() {
        state = "signuppage";
        console.log(state);
        changeContent();
    });
    document.getElementById("loginpage").addEventListener("click", function() {
        state = "login";
        console.log(state);
        changeContent();
    });
    document.getElementById("showPasswordBtn").addEventListener("click", function() {
        showpassword();
    });
});