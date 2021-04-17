export default function destroy(e) {
    const url = e.target.href
    fetch(url, {
        method: 'DELETE',
        headers: {'Accept': 'application/json', "X-CSRF-Token": document.querySelector("[name='csrf-token']").content }
    })
        .then(data => data.json())
        .then(post => {
            const elem = document.querySelector(`#post-${post.id}`)
            elem.parentNode.removeChild(elem)
        })
}