import axios from 'axios'

export async function callFetch(url: string) {
	return await (await fetch(url)).json()
}

export async function callAxios(url: string) {
	return await axios.request({ url, method: 'get' })
}
