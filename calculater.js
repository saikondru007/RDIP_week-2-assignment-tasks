function displayy(val) 
{ 
document.getElementById("result").value+=val;
    return result;
}  
function solve() 
{ 
let x = document.getElementById("result").value; 
let y = eval(x) 
document.getElementById("result").value = y; 
    return result;
}  
function clr() 
{ 
document.getElementById("result").value = "";
    return result;
} 
function root()
{

    let a = document.getElementById("result").value;
    c=parseInt(a,10)
    let b= Math.sqrt(c)
    document.getElementById("result").value = b;

}