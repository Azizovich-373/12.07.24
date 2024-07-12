export function Albums(item) {
    const Album = document.createElement('div')
    const link = document.createElement('a')
    const album_name = document.createElement('p')
    
    Album.classList.add('elem')
    link.classList.add('link_album')
    album_name.classList.add('cat_name')

    album_name.innerHTML = item.title

    Album.append(link)
    link.append(album_name)
    
    return Album
}