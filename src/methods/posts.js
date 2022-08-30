import { url } from './url.js'

export async function searchPosts(value) {
    const valueFinal = value || ''
    const response = await fetch(`${url}/post/?name=${valueFinal}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
    })
    const data = response.json()
    return data
}

export async function createPost(title, text) {
    await fetch(`${url}/post`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
            title: title,
            description: text,
        }),
    })
    return await searchPosts()
}
