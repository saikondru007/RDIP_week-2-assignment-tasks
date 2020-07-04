function anagram(){
    var st = document.getElementById("name2").value;
    var s = document.getElementById("name3").value;
    var le = st.toLowerCase();
    var l = s.toLowerCase(); 
    var ts = le.split(' ').sort().join('');
    var t = l.split(' ').sort().join('');
   var p = ts.localeCompare(t);
   if (p != 0) {
    alert("it is not anagram");
    return false;
   }
       if (p === 0) {
 alert("it is  anagram");
    return true;
    }