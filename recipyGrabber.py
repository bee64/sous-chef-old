import requests
import BeautifulSoup


#TODO make this a function that can be call from the js 
#TODO pass in a url string to search the site.
session = requests.session()

req = session.get('http://stackoverflow.com/questions/10807081/script-to-extract-data-from-web-page')

doc = BeautifulSoup.BeautifulSoup(req.content)

print doc