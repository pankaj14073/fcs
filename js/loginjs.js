window.onload = function () {
    document.getElementById("loginForm").onsubmit = function onSubmit(form) 
    {
        var isValid =validateForm();
     // alert("GOO NOW "+isValid);
        if (!isValid) 
        {
           // alert("Please check your fields!");
            return false;
        }
        else    
        {
            document.getElementById("loginForm").action = "login.html";
            //you are good to go
            return true;
        }
    }
}
document.getElementById('reset').onclick=resetDetails;
function resetDetails()
{
   // localStorage.setItem("status", "0");
    alert("Resetting Details!");
     window.location.href='index.html';
    
}

document.getElementById('load').onclick=generateNumber;

function generateNumber() 
    {
    var a=document.getElementById("username2").value;
         var r=localStorage.getItem(a);
        if(r==null) 
        alert("NO USER");
    else
        {
        var object=  JSON.parse(r);
        alert("CHECKING DETAILS OF "+object.key);
        document.getElementById ("number").value = object.key;
        }
        }

function validateForm()
    {
       
    var a=document.getElementById("username2").value;
     var n=document.getElementById("number").value;
    var b=document.getElementById("result").value;
                
   if (a==""|| b=="")
      {
      alert("Please Fill All Required Field");
          return false;
      }
    else
    {
        var r=localStorage.getItem(a);
        if(a === null)
           {
               alert("NO USER");
           return false;
           }
        else
            {
             var object= JSON.parse(r);
          
            var ciphertext=object.data;
              var tmp= CryptoJS.AES.decrypt(ciphertext,String(b));
                
            
            //alert("origtext: "+text+"|"+"tmp : "+tmp);
            var text =tmp.toString(CryptoJS.enc.Utf8);
            var operation =parseInt(b)-parseInt(n);
                
                if(text !=undefined)
                {
                    //new tab open 
           // var win = window.open('https://www.facebook.com/');
                    
                //redirect current tab
       // chrome.runtime.sendMessage({redirect: "http://redirect"});
 //var win = window.open('https://www.facebook.com/');
            chrome.tabs.executeScript(null,
            { 
               
                code:"try {document.querySelector('[type=password]').value ='"+text+
                "';document.querySelector('[type=email]').value = '"+a+
                "';document.querySelector('[type=submit]').click();"+
                "}catch(e){}"});
                   
                    alert("lool1");
                    sleep(3000);
                    alert("lool2");
                      //     window.close();    
                    chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) 
                      {
                            // since only one tab should be active and in the current window at once
                            // the return variable should only have one entry
                            var activeTab = arrayOfTabs[0];
                            var url = activeTab.url; // or do whatever you need
                        alert("URL :"+ url);
                            // alert(win.location.href);

                            });
    
                    
                
       ////////////////////////////////////////////////////////         
 //        var ask= confirm("PASSORD ="+text+"???");
                    if (String(url).includes("login_attempt") == false)
                        {
                        var str=object.key;
                        var l=localStorage.getItem("length");
                        var newKey=randomFixedInteger(parseInt(l)-1);
                            
                var newKeyAfterOperation =eval(newKey+"+"+operation); 
               //  alert("key change (after) :"+newKeyAfterOperation+"|||"+newKey);
                var exp0=String(newKeyAfterOperation);
                var c0=String(text); 
                var ciphertext=CryptoJS.AES.encrypt(c0,exp0);  
                            
          var userObject = { username: String(a), data:String(ciphertext),key:newKey}; 
       localStorage.setItem( a, JSON.stringify(userObject));  
                            
                        return true; 
                        }
                    else {
                             return false; 
                        }
                    
                    
                    
            //////////////////////////////////////////////////        
                }
                else
                { 
                alert("WRONG !!");          
                return false;
                }
            }     
    }
    }
        var randomFixedInteger = function (length) 
{
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}
        //skdgsdsd