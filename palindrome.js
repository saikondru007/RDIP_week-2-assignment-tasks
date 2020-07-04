function pal() {
var revstring = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revstring = revstring+str.charAt(j);
}

if(str === revstring) {
	alert(str+" is Palindrome");
return str+" is Palindrome";
} else {
	alert(str+" is not a palindrome");
return str+" is not a Palindrome";
}
}