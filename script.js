const apiKey = 'AIzaSyDONMRGN0lIUixtHXaJYzJ-BhYAktDT8bQ';

const channelName = 'CsubAzUrmedve';

const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelName}&part=snippet,id&order=date&maxResults=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const videoId = data.items[0].id.videoId;
    const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = embedCode;
  })
  .catch(error => console.error('Hiba történt:', error));
