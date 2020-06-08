var playlist = {artist:"song"}

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
}

removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}
