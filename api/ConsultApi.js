export default async function getCurrentWeather(locationCoords){

    const axios =  require('axios')

    const lat = locationCoords.latitude

    const lon = locationCoords.longitude

    var result = []
    
    await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=831ac7ad2d0bce446d71fe4bfa837adc`)
    .then(function (response)  {
        const data = response.data
        const locationName = data.timezone
        const temperatureMin = data.daily.temp.min
        const temperatureMax = data.daily.temp.max
        const wind = data.daily.wind_speed
        const humidity =  data.daily.humidity
        const currentTemperature = data.daily.temp.day

        result = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]

    })

    .catch(function (error) {
        console.log(error)
    })

    return result

    
}