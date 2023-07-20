const baseUrl = "https://api.spotify.com/v1";
let accessToken = "";

let playlist_id = "";
let user_id = "";


//GET TOKEN 
const getToken = async () => {
  const redirectUri = "http://localhost:3000"
  const client_id = process.env.REACT_APP_SPOTIFY_ID;
      if (accessToken) {
      return accessToken;
    };
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
  try {
    const response = await fetch(endpoint,
      {
        headers:
        {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
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
  const url = `${baseUrl}/me`;
};

// SAVE NEW PLAYLIST
const saveNewPlaylist = async (name, list) => {
  const user_id = "";
  const url = `${baseUrl}/users/${user_id}/playlists`;
  const authOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      description: "New playlist created using Jammming",
      public: false
    })
  };

  if (!accessToken) {
    accessToken = await getToken();
  }

  try {
    const response = await fetch(url, authOptions);

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
  const url = `${baseUrl}/users/${user_id}/playlists/${playlist_id}/tracks`;
  console.log('adding songs');
}

export { getSearchResults, saveNewPlaylist };