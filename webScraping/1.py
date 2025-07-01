import requests
from bs4 import BeautifulSoup

#Step 1: Target URL
url = 'http://books.toscrape.com/'

#Step 2: Fetch the page
response = requests.get(url)
html = response.text

#Step 3: 
soup = BeautifulSoup(html, 'html.parser')

books = soup.find_all('article', class_='product_pod')

for book in books:
    title = book.h3.a['title']
    price = book.find('p', class_='price_color').text
    print(f"Title: {title} | Price: {price}")
