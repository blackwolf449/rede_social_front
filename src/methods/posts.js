import { url } from './url'

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
