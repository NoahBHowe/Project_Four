$(document).ready(() => {

 function initMap() {
        var NYC = {lat: 40.7128, lng: -74.0059};
        var apartment = {lat: 40.757561, lng: -73.968552}
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: apartment
        });
        var marker = new google.maps.Marker({
          position: apartment,
          map: map
        });
      }

  // function populate() {
  //   openData.forEach((openData) => {
  //      var marker = new google.maps.Marker({
  //       position: {{lat_lon}},
  //               map: map
  //     })
  //   });
  // };




});



// var url =  "https://data.cityofnewyork.us/resource/7x9x-zpz6.json?$$app_token=EAZicRXn062Gkx6mG9V41Kqs5&$limit=10000";

//  $.getJSON(url, function (result) {
//                 $.each(result,function(i,field){
//                     $("#").append(JSON.stringify(field));
//                 });

//                 result.list.forEach(function(taco, i) {
//                     $("#taco").append("Complaint Date: " +openData.cmplnt_fr_dt);
//                     $("#taco").append("</br>Temperature at Morning :" + forecast.temp.morn);
//                     $("#taco").append("</br>Temperature at Evening :" + forecast.temp.eve);
//                     $("#taco").append (forecast.temp.night);
//                     var marker = new google.maps.Marker({position: {{lat_lon}},
//                     map: map
//                 });
//             });
