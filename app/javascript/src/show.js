export default function show(e) {
    const url = e.target.href
    fetch(url, {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    }).then(data => data.json())
      .then(post => renderHtml(post))
      .then(post => document.querySelector('#post-content').innerHTML = post)
}


function renderHtml(post) {
    return `<p class="capitalize">${post.title}</p>
    <p>${post.content}</p>
    <p> <time datetime="time">${post.created_at}</time>  </p>`    
}