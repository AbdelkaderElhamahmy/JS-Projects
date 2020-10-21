const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('icon time');
const updateUI = (data) => {

    const weather = data.weather;
    details.innerHTML = `
    <h5 class = "my-3">${city}</h5>
    <div class = "my-3">${weatherr}</div>
    <div class = "display-4 my-4">
        <span>${temp}</span>
        <span>&deg;C</span>
    </div>
    `;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {

    const weather = await getWeather(city);
    return { weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
