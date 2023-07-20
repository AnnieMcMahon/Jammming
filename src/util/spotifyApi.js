const baseUrl = "https://api.spotify.com/v1";
let accessToken = "";
let playlistId = "";
let userId = "";

//GET TOKEN 
const getToken = async () => {
  if (accessToken) {
    return accessToken;
  };
  const redirectUri = "http://localhost:3000"
  const client_id = process.env.REACT_APP_SPOTIFY_ID;
  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  if (accessTokenMatch && expiresInMatch) {
    accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/");
    return accessToken;
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  };
};

//GET SEARCH RESULTS
const getSearchResults = async (param) => {
  const endpoint = `${baseUrl}/search?q=${param}&type=track`;
  if (!accessToken) {
    accessToken = await getToken();
  };
  const requestParams = { headers: { Authorization: `Bearer ${accessToken}` } };
  try {
    const response = await fetch(endpoint, requestParams);
    if (response.ok) {
      const jsonResponse = await response.json();
      const trackList = jsonResponse.tracks.items.map(track => ({
        id: track.id,
        title: track.name,
        singer: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
      return trackList;
    }
  } catch (error) {
    console.log(error);
  }
};

// GET USER ID
const getUserId = async () => {
  const endpoint = `${baseUrl}/me`;
  if (!accessToken) {
    accessToken = await getToken();
  };
  const requestParams = { headers: { Authorization: `Bearer ${accessToken}` } };
  try {
    const response = await fetch(endpoint, requestParams);
    if (response.ok) {
      const jsonResponse = await response.json();
      userId = jsonResponse.id;
      console.log(userId);
      return userId;
    }
  } catch (error) {
    console.log(error);
  };
};

// SAVE NEW PLAYLIST
const saveNewPlaylist = async (name, list) => {
  userId = await getUserId();

  const endpoint = `${baseUrl}/users/${userId}/playlists`;
  if (!accessToken) {
    accessToken = await getToken();
  };
  const requestParams = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  };
  try {
    const response = await fetch(endpoint, requestParams);
    if (response.ok) {
      console.log('Playlist has been created');
      await addSongsToList(name, list);
    } else {
      console.log('Failed to create playlist:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('Error creating playlist:', error);

    if (error.response) {
      console.log('Response status:', error.response.status);
      console.log('Response data:', error.response.data);
    }
  }
};

//ADD SONGS TO LIST
const addSongsToList = async (name, list) => {
  const endpoint = `${baseUrl}/users/${userId}/playlists/${playlistId}/tracks`;
  console.log('adding songs');
};

export { getToken, getSearchResults, saveNewPlaylist };