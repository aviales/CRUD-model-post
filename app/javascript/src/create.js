import { createHTML } from './index'
export default function create(e) {
    const post = createObj(e.target)
    fetch(e.target.action, {
        method: e.target.method,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
        },
        body: JSON.stringify(post)
    }).then(data => data.json())
    .then(post => {
        const table = document.querySelector('#posts tbody')
        table.insertAdjacentHTML('beforeend', createHTML(post))

        e.target.post_title.value = ''
        e.target.post_content.value = ''
        
    })
}

function createObj(target) {
    return { 
        post: {
            title: target.post_title.value,
            content: target.post_content.value
        }
    }
}