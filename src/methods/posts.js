import { url } from './url'

export async function searchPosts(value) {
    const response = await fetch(`${url}/post/?name=${value}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
    })
    const data = response.json()
    console.log(data)
}
