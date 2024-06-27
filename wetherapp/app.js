

const container = document.querySelector('.container');
const search  = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = 'c5bbfa5d9776025f97c4a388d1f723e2';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const tempareture = document.querySelector('.weather-box .tempareture');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span');
        const wind = document.querySelector('.weather-box .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'img/sunny.jpeg';
                break;

            case 'Rain':
                image.src = 'img/rain.png';
                break;
            case 'Clouds':
                image.src = 'img/cloud.webp';
                break;

            case 'Mist':
                image.src = 'img/mist.png';
                break;

            case 'Snow':
                image.src = 'img/snow.png';
                break; 
            
            case 'Haze':
                image.src = 'img/haze.png';
                break;

            default:
                image.src = 'img/bg-img.png';
                break; 
        }
    })

});

