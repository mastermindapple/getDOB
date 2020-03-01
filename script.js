function showCoder(){
    var meta = [document.getElementById('meta').name,document.getElementById('meta').content];
    var programmer = meta.slice(1);
    var profession = meta.slice(0,1);
      document.getElementById("headPara").innerHTML = ("This website is created by "+ programmer+"(a "+profession+")");
}

   showCoder();
   
   function next(){
       var name = document.getElementById("name").value;
       var age = document.getElementById("age").value;
       var birthYear = 2020 - parseInt(age);
       if(name && age){
       document.getElementById("birthYear").innerHTML = (name+", You were born in "+birthYear);
       }
      else if(!name && !age){
        alert("Please fill in your name and age");
    }
       else if(!name){
           alert("Please fill in your name");
          
       }
       else if(!age){
           alert("Please enter your age");
    
       }
        
   }
