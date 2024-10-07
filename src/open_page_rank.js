class OpenPageRank {
	constructor(apiKey) {
		this.api = "https://openpagerank.com/api"
		this.apiKey = apiKey
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"api-opr": this.apiKey
		}
	}

	async getPageRank(domain) {
		const response = await fetch(
			`${this.api}/v1.0/getPageRank?domains[]=${domain}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {OpenPageRank}
