import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

export const fetchWeather = async (query: string) => {
	if (API_KEY === "your_key") alert("Type your weather api key in env file");

	const data = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});

	return data;
};
