import { reload } from "./lib/utils.js"
import { Stories } from "./components/Stories.js"
import { Posts } from "./components/Posts.js"
import { Suggestion } from "./components/Suggestion.js"
import { UserPost } from "./components/UserPosts.js"
import { Albums } from "./components/Albums.js"
const stories = document.querySelector('.stories')
const post_cont = document.querySelector('.cont_pub')
const sug_cont = document.querySelector('.suggestions')
const id = location.search.split('=').at(-1)
const name_acc = document.querySelector('.name_acc')
const nickname_acc = document.querySelector('.nickname_acc')
const cont_content = document.querySelector('.content_acc')
const cont_cat = document.querySelector('.content_cat')
const photos_cont = document.querySelector('.content_box')

fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => {
        reload(res, stories, Stories)
    })


fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then(res => res.json())
    .then(res => {
        reload(res, post_cont, Posts)
    })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        reload(users, sug_cont, Suggestion)
    })

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => res.json())
    .then(user => {
        name_acc.innerHTML = user.name
        nickname_acc.innerHTML = user.username
    })

fetch('https://jsonplaceholder.typicode.com/albums?userId='+id)
    .then(res => res.json())
    .then(albums => {
        reload(albums, cont_cat, Albums)
        for (const album of albums) {
            const link_al = document.querySelectorAll('.elem')
            link_al.forEach(item => {
                item.onclick = () => {
                    cont_content.innerHTML = ''
                    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6&albumId=' + album.id)
                        .then(res => res.json())
                        .then(photos => {
                            reload(photos,cont_content,UserPost);
                    })
                }
            });
        }  
        
    })
 