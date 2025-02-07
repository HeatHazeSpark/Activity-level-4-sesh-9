const API_KEY = "NbNqC4h7fCLFClBq3mNUMjB6H5uyV7z1voPSgcxQ"; 
    const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-02-07&end_date=2024-02-08&api_key=${API_KEY}`;
    async function fetchAsteroidData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log("Asteroid Data:", JSON.stringify(data, null, 2)); 
        return data;
    } catch (error) {
        console.error("Error fetching asteroid data:", error);
    }
    }