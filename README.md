# open_page_rank.js
Web-API for [domcop.com/openpagerank](https://www.domcop.com/openpagerank) website to bring back page rank metrics so that different domains could easily be compared

## Example
```JavaScript
async function main() {
	const { OpenPageRank } = require("./open_page_rank.js")
	const openPageRank = new OpenPageRank()
	const pageRank = await openPageRank.getPageRank("domain")
	console.log(pageRank)
}

main()
```
