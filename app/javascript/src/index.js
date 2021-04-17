export default function index(){
    // return console.log('Hola desde el index.js');
    fetch('/posts', {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    })
        .then(response => response.json())
        .then(posts => renderPosts(posts))
        .then(posts => document.querySelector('#posts tbody').innerHTML = posts.join('')  )
}


function renderPosts(posts) {
    return posts.map(post => createHTML(post))
}


export function createHTML(post) {
    return `<tr id="post-${post.id}">
    <td class="border px-8 py-4">${post.title}</td>
    <td class="border px-8 py-4"><a class="post_show hover:underline" href="/posts/${post.id}">Show</a></td>
    <td class="border px-8 py-4"><a class="post_edit hover:underline" href="/posts/${post.id}/edit">Edit</a></td>
    <td class="border px-8 py-4"><a class="post_destroy hover:underline" href="/posts/${post.id}">Destroy</a></td>
    </tr>`
}

