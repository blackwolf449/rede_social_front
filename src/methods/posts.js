import { url } from './url.js'

export async function searchPosts(value) {
    const valueFinal = value || ''
    const response = await fetch(`${url}/posts/?name=${valueFinal}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
    })
    const data = response.json()
    return data
}

export async function createPost(title, text) {
    const response = await fetch(`${url}/posts`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: text,
        }),
    })
    if (response.status != 200) return response.json()
    return await searchPosts()
}

export async function addLike(title) {
    await fetch(`${url}/posts/likes/?title=${title}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
    })
    return await searchPosts()
}
