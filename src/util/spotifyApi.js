const spotifyId = process.env.REACT_APP_SPOTIFY_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const baseUrl = "https://accounts.spotify.com/api";
// const searchEndpoint = "/search";

const getKey = async () => {
  const url = `${baseUrl}/token`;
  const data = `grant_type=client_credentials&client_id=${spotifyId}&client_secret=${clientSecret}`;
  try {
    const response = await fetch(url, 
      {
      method: 'POST',
      body: data,
      headers: 
        { 
          'Content-type': 'application/x-www-form-urlencoded'
        }  
      } 
   );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.access_token;
    }
  } catch (error) {
    console.log(error);
  } 
};

export default getKey;