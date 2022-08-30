# open_page_rank.py
Web-API for [domcop.com/openpagerank](https://www.domcop.com/openpagerank) website to bring back page rank metrics so that different domains could easily be compared

## Example
```python
import open_page_rank
open_page_rank = open_page_rank.OpenPageRank()
page_rank = open_page_rank.get_page_rank(domain="")
print(page_rank)
```
