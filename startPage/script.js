function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toDateString();

    document.getElementById('time').textContent = `Current time: ${time}`;
    document.getElementById('date').textContent = `Today's date: ${date}`;
}

function getDailyQuote() {
    // Linux and programming-related quotes
    const quotes = [
        "The Linux philosophy is 'Laugh in the face of danger'. Oops. Wrong one. 'Do it yourself'. Yes, that's it. - Linus Torvalds",
        "Programming is not about typing, it's about thinking. - Rich Hickey",
        "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
        "Talk is cheap. Show me the code. - Linus Torvalds",
        "There are only two hard things in computer science: cache invalidation and naming things. - Phil Karlton",
        "It's not a bug, it's a feature. - Anonymous",
        "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Anonymous",
        "Intelligence is the ability to avoid doing work, yet getting the work done. - Linus Torvalds",
        "All operating systems sucks, but Linux just sucks less - Linus Torvalds"
        // Add more quotes as needed
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById('quote').textContent = `Daily Quote: ${quote}`;
}

function getWeather() {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '535523f18143e1364964c6afec562eb0';
    const city = 'Porsgrunn';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Porsgrunn&appid=535523f18143e1364964c6afec562eb0&units=metric
`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('weather').textContent = `Weather in ${city}: ${temperature}°C, ${description}`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

updateClock();
getDailyQuote();
getWeather();
setInterval(updateClock, 1000); // Update time every second
setInterval(getDailyQuote, 86400000); // Update quote every 24 hours
setInterval(getWeather, 600000); // Update weather every 10 minutes