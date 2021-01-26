//1. create a request variable
var request = new XMLHttpRequest();
var apikey ="cd0f283c109d497df2eb33a531814abc";

// 2.create a new connection 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

// 3. send request
request.send();
// 4. load response 
request.onload = function () {
    var data = JSON.parse(this.response);
   
for (i in data){
   var  lat = data[i].latlng[0];
    var long = data[i].latlng[1];
   if( lat!=null & long!=null){
    getWether(lat,long);
   }
}
  
function getWether(lat,long){

   var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+apikey;
    var request1 = new XMLHttpRequest();
    request1.open('GET',url,true);
    request1.send();
    request1.onload = function(){
        var data1 = JSON.parse(this.response);
        console.log(data1.main.temp);
    }
}
}