export default function() {
    const html = createForm({action: '/posts', method: 'POST', id: 'post_create'})
    document.querySelector('#post-content').innerHTML = html
}


export function createForm(form, post = {}) {

    const title = post.title || ''
    const content = post.content || ''
    const submit = form.action === '/posts' ? 'Create Post' : 'Update Post'

    return `<form action="${form.action}" method="${form.method}" id="${form.id}" class="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label for="post_title">Title</label><br>
    <input type="text" name="post_title" value="${title}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <label for="post_content">Content</label><br>
    <textarea name="post_content"  cols="30" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">${content}</textarea>
    <input type="submit" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-blue-600 hover:shadow-lg" value="${submit}">
    <br>
    </form>`
}