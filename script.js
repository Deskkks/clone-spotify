const playlists = document.querySelectorAll('.album')
const play = document.querySelectorAll('.play')

playlists.forEach(playlist => playlist.addEventListener('mouseover', () => {
  play[playlist.id].style.transform = 'translateY(-10px)'
  play[playlist.id].style.opacity = '1'
}))

playlists.forEach(playlist => playlist.addEventListener('mouseout', () => {
  play[playlist.id].style.transform = 'translateY(0px)'
  play[playlist.id].style.opacity = '0'
}))