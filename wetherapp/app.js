

const container = document.querySelector('.container');
const search  = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const notFound = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = 'c5bbfa5d9776025f97c4a388d1f723e2';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;
//
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        if (json.cod == '404'){
            container.style.height = '420px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            notFound.classList.add('active');
            return;
        }
            container.style.height = '570px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            notFound.classList.remove('active');


        const image = document.querySelector('.weather-box img');
        const tempareture = document.querySelector('.weather-box .tempareture');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

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

        tempareture.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    })

});

