from requests import get


class OpenPageRank:
	def __init__(self, api_key: str):
		self.api = "https://openpagerank.com/api"
		self.api_key = api_key
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"api-opr": self.api_key
		}


	def get_page_rank(self, domain: str):
		return get(
			f"{self.api}/v1.0/getPageRank?domains[]={domain}",
			headers=self.headers).json()
