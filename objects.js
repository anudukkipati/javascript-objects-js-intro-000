var playlist = {Adele: "Rolling in the Deep"};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playList, { [artistName] : songTitle } )
}
