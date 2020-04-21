function update() {
    console.log("updating data");
    fetch(" https://coronavirus-tracker-api.herokuapp.com/v2/locations")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.locations)
            rsp.locations.forEach(element => {
                latitude = element.coordinates.latitude;
                longitude = element.coordinates.longitude;
                cases=element.latest.confirmed;
                if(cases>255){
                    color="rgb(0,255,0)";
                }
                else{
                   color=`rgb(0,${cases},0)`;
                }
                case2=element.latest.deaths;
                if(case2>100)
                {
                    color="red";
                }
                var marker = new mapboxgl.Marker({
                    draggable: false,
                    color:color
            
            
                   
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

                //mark on the map
            });

        })
}
let changetime=10000;
setInterval(update,changetime);