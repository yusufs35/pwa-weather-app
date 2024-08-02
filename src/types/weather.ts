interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

interface Sys {
	country: string;
	id: number;
	sunrise: number;
	sunset: number;
	type: number;
}

interface Weather {
	id: number;
	description: string;
	icon: string;
	main: string;
}

export interface WeatherResponse {
	main: Main;
	name: string;
	sys: Sys;
	weather: Array<Weather>;
}
