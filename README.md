# Reddit Ghost

This is a Node-based app I'm writing as my first foray into Node.js and the Express framework. Basically, it's used to post to Reddit at a future date and time. It works by using two main modules, Raw.js and Node-Cron:
1. [Raw.js](https://www.npmjs.com/package/raw.js) is a Node-based wrapper for Reddit's API.
1. [Node-Cron](https://github.com/ncb000gt/node-cron) is a Cron module for Node.js. Basically, it allows you to schedule code execution using a cron-based syntax.

### (This app is still in beta mode. If you wish to run it yourself, for security reasons it's best to use a throwaway Reddit account or a unique account for development purposes only.)

## Setup Instructions

1. Go to <http://reddit.com/prefs/apps>. Click "are you a developer? create an app..."


2. This will bring up a form. For now we only need to give it a name (call it whatever you want), select `script`, and add a redirect uri (can be any valid url, I just use `http://google.com`). 

![alt text](https://github.com/byronsadik/RedditGhost/blob/readme/reddit-client-secret.png "")

Save the ID and secret for later.

1. Clone repo locally, and in directory run `npm install`.
1. Go to `http://localhost:3000`. 


1. Feel free to email <david@mic.com> and <anthony@mic.com> with any questions you may have.
1. Your implementation must use Node.js.
1. The code should follow best practices.
1. You should think about how you can create reusable modules.
1. You may use any libraries or frameworks that you want for this task - but prepare to explain your choices in the follow-up interview.
1. Project structuring and setup files have been omitted. We would like to see how you think about project organization.
1. Even though this is a small project, treat it with the mindset of a larger one.
1. Commit your progress often.
1. Your submission should include a readme file with instructions on how to install and get started.

## Implementation Details
1. Your goal is to parse articles on mic.com and extract the metadata specified in #5 below.
2. All metadata should be saved in a db.
3. Attached is a handlebar file. This should be enough for all frontend work, but if needed please make minor adjustments to it.
4. Expected behaviour: After entering an article url, the article is parsed and the data is added to the table.
5. The handlebar file includes a table, here’s explanation of the different columns:
 1. Headline - the headline of the article
 1. Image - the main image at the top of the article
 1. Word count - the number of words in the article body
 1. Facebook Shares - via [Facebook's Public Open Graph](http://graph.facebook.com/http://m.mic.com/articles/125598/how-amber-rose-makes-the-world-think-twice-about-vilifying-black-women-s-sexuality)
 1. Sources - How many instances of “told Mic” does the article body contain?
 1. Screenshot - a screenshot of the article.
1. **Bonus: Find an informative way to leverage NLP or Sentiment Analysis to create useful information for any part of the Mic organization.**

# Submission

Fork this repository, complete the test, and make a pull request back to the main repository.  Once you submit your pull request please do not make any additional commits.
