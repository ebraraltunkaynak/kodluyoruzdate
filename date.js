function showName() {
    let school = prompt("Hangi okuldasınız ?");

    let  surname = prompt("Soyisminiz ?");
    document.getElementById("surName").innerText = surname;
  }
showName();
var days= [
    "pazar",
    "pazartesi",
    "salı" ,
    "carsamba" ,
    "persembe", 
    "cuma",
    "cumartesi",
    
 ] ;
    function showTime() {                        
     let date = new Date ();               
    document.getElementById("girissaati").innerText =
      date.toLocaleTimeString() + days[date.getDay()];
    setTimeout(showTime, 1000);
  }
  showTime();