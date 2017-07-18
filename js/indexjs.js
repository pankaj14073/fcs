
window.onload = function ()
{
    document.getElementById("mainForm").onsubmit = function onSubmit(form) 
    {
        var isValid =validateForm();
         alert("GOO NOW "+isValid);
        if (!isValid) 
        {
            alert("Please check your fields!");
            return false;
        }
        else    
        {
          
            localStorage.setItem("status", "1");
            document.getElementById("mainForm").action = "login.html";
            //you are good to go
            return true;
        }
    }
}


document.getElementById('choose').addEventListener('change', function()
{
var e = document.getElementById("choose");
var data = e.options[e.selectedIndex].text;
     var n=Number(data);
     document.getElementById ("number").value = randomFixedInteger(n);
   alert('change fired'+n);
}, false);

     var randomFixedInteger = function (length) 
{
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
     
     
     
function validateForm()
    {
    var a=document.getElementById("username").value;
    var b=document.getElementById("choose").value;
    var c=document.getElementById("password").value;
    var d=document.getElementById("inputnumber").value;
         
   if (a==""|| b==""|| c==""||d==""||b=="0")
      {
      alert("Please Fill All Required Field");
          return false;
      }
      else
      {
          var n=document.getElementById("number").value;
         var exp=eval(n+d);
          var exp0=String(exp);
          
          
        alert("|"+n+"|"+d+"|"+exp0+"|"+c); 
        var ciphertext =CryptoJS.AES.encrypt(c,exp0);
          
        //storing lenght
           localStorage.setItem("length", String(n.length+1));
        var userObject = { username: String(a), data:String(ciphertext),key:n}; 
       localStorage.setItem( a, JSON.stringify(userObject));  
       userObject = localStorage.getItem(a);
         alert("USER "+ userObject);
      }
        return true;
      }
     
