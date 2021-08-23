const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('CityName');
const city_name=document.getElementById('city_name');
const temp_spn=document.getElementById('temp_spn');
const temp_status=document.getElementById('temp_status');

const middle_layer=document.querySelector(".middle_layer");

const getInfo =async(event)=>
{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==="")
    {
        city_name.innerHTML="Plz write the city name before search";
        middle_layer.classList.add('data_hide');
    }
    else
    {
        try
        {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=05d378fd2c8b7e3173609ffb75b0c7c6`;
            const response=await fetch(url);
            const data=[await response.json()];
            city_name.innerText=`${data[0].name} , ${data[0].sys.country}`;
            temp_spn.innerText=data[0].main.temp;
            const tempStatus=data[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempStatus == "Clear") {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }

            middle_layer.classList.remove('data_hide');

        
        }
        catch
        {
        city_name.innerHTML="Plz enter the valid city name";
        middle_layer.classList.add('data_hide');

        }    
    }
}
submitBtn.addEventListener('click',getInfo);