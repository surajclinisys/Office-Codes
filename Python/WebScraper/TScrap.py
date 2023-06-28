import csv
from selenium import webdriver
from getpass import getpass
from time import sleep
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from msedge.selenium_tools import Edge
from msedge.selenium_tools import EdgeOptions


# collecting tweets
def get_tweet(card):
    username = card.find_element("xpath", './div[1]//span').text
    handle = card.find_element("xpath", './div[1]//span[contains(text(),"@")]').text
    try:
        postdate = card.find_element("xpath", './div[1]//time').get_attribute('datetime')
    except NoSuchElementException:
        return
    text = card.find_element("xpath", './div[2]/div[1]/div[1]').text
    reply_cnt = card.find_element("xpath", './/div[@data-testid="reply"]').text
    retweet_cnt = card.find_element("xpath", './/div[@data-testid="retweet"]').text
    like_cnt = card.find_element("xpath", './/div[@data-testid="like"]').text

    tweet = (username, handle, postdate, text, reply_cnt, retweet_cnt, like_cnt)
    return tweet


# opening browser
options = EdgeOptions()
options.use_chromium = True
driver = Edge(options=options)

# login into tweeter
driver.get("https://www.twitter.com/login")
driver.maximize_window()
sleep(2)
username = driver.find_element("xpath", '//input[@name="text"]')
username.send_keys('Lalit14561844')
username.send_keys(Keys.RETURN)
sleep(1)
password = driver.find_element("xpath", '//input[@name="password"]')
password.send_keys('twitter@2002')
password.send_keys(Keys.RETURN)
sleep(3)

# navigating to the trending page
search_input = driver.find_element("xpath", '//input[@aria-label="Search query"]')
search_input.send_keys('#DurgaPuja')
search_input.send_keys(Keys.RETURN)
sleep(3)
driver.find_element("link text", "Latest").click()
sleep(3)

# all tweets are in here
data = []
tweet_ids = set()
last_pos = driver.execute_script("return window.pageYOffset;")
scrolling = True

while scrolling:
    page_cards = driver.find_elements("xpath", '//div[@class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu"]')
    for card in page_cards[-15:]:
        tweet = get_tweet(card)
        if tweet:
            id = ''.join(tweet)
            if id not in tweet_ids:
                tweet_ids.add(id)
                data.append(tweet)
    scroll_atmpt = 0
    while True:
        driver.execute_script('window.scrollTo(0,document.body.scrollHeight);')
        sleep(3)
        curr_pos = driver.execute_script("return window.pageYOffset;")
        if last_pos == curr_pos:
            scroll_atmpt += 1
            if scroll_atmpt >= 3:
                scrolling = False
                break
            else:
                sleep(3)
        else:
            last_pos = curr_pos
            break
len(data)

with open('DurgaPuja2.csv', 'w', newline='', encoding='utf-16') as f:
    header = ['UserName', 'Handle', 'TimeStamp', 'Comments', 'Likes', 'Retweets', 'Text']
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(data)