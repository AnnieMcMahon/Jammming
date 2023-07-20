const baseUrl = "https://api.spotify.com";
let apiKey = "";

const getSearchResults = async (param) => {
  const endpoint = `${baseUrl}/v1/search?q=${param}?type=track`;
  console.log(endpoint);
  if (!apiKey) {
    apiKey = await getKey();
  };
  try {
    const response = await fetch(endpoint,
      {
        header:
        {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      const trackList = jsonResponse.tracks.items;
      return trackList;
    }
  } catch (error) {
    console.log(error);
  }
};

const getKey = async () => {
  const spotifyId = process.env.REACT_APP_SPOTIFY_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const url = "https://accounts.spotify.com/api/token";
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
      const accessToken = jsonResponse.access_token;
      console.log(accessToken);
      return accessToken;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSearchResults };