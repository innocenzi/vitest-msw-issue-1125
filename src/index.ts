import axios from 'axios'

export async function callAxios(url: string) {
	return await axios.request({
		url
	})
}
