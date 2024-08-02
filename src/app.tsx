import { useState } from "react";
import "./styles/global.css";
import { fetchWeather } from "./api/fetch-weather";
import { WeatherResponse } from "./types/weather";

const App: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const [weather, setWeather] = useState<WeatherResponse | null>(null);

	/**
	 * Searches for weather data based on the current query.
	 *
	 * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event that triggered the search.
	 * @return {Promise<void>} A promise that resolves when the weather data has been logged to the console.
	 */
	const search = async (
		e: React.KeyboardEvent<HTMLInputElement>
	): Promise<void> => {
		if (e.key === "Enter") {
			const res = await fetchWeather(query);
			setWeather(res.data);
		}
	};

	return (
		<div className="main-container">
			<input
				type="text"
				className="search"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={search}
			/>

			{weather?.main && (
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
						<div className="city-temp">
							{Math.round(weather.main.temp)}
							<sup>&deg;C</sup>
						</div>
						<div className="info">
							<img
								className="city-icon"
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
								alt={weather.weather[0].description}
							/>
              <p>{weather.weather[0].description}</p>
						</div>
					</h2>
				</div>
			)}
		</div>
	);
};

export default App;
