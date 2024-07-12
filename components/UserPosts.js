export function UserPost(item){
    const content_box = document.createElement('div')
    const imgPost = document.createElement('img')
    
    content_box.classList.add('content_box')
    imgPost.classList.add('content_img')
    imgPost.src = item.url

    content_box.append(imgPost)
    return content_box
}