$(document).ready(() => {
// const ZWSID = process.env.ZWSID;


  console.log('jQuery is so darned happy to see you today!');



    const  url = `https://data.cityofnewyork.us/resource/7x9x-zpz6.json&$$app_token=EAZicRXn062Gkx6mG9V41Kqs5
&$limit=100000`;
    const apiKey = process.env.API_KEY;
    // Intialize our map
    var center = new google.maps.LatLng(40.7127° -74.0059°);
    var mapOptions = {
      zoom: 8,
      center: center
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Retrieve our data and plot it
    $.getJSON(url, function(data, textstatus) {
          console.log(data);
          $.each(data, function(i, entry) {
              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(entry.location_1.latitude,
                                                   entry.location_1.longitude),
                  map: map,
                  title: location.name
              });
          });
    });





https://data.cityofnewyork.us/resource/7x9x-zpz6.json


});
// 40.7127, -74.0059°
