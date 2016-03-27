# RedditGhost

This is a Node-based app I'm writing as my first foray into Node.js and the Express framework. Basically, it's used to post to Reddit at a future date and time. It works by using two main modules, Raw.js and Node-Cron:
... +[Raw.js](https://www.npmjs.com/package/raw.js) is a Node-based wrapper for Reddit's API.
... +[Node-Cron](https://github.com/ncb000gt/node-cron) is a Cron module for Node.js. Basically, it allows you to schedule code execution using a cron-based syntax.

### (This app is still in beta mode. If you wish to run it yourself, for security reasons it's best to use a throwaway Reddit account or a unique account for development purposes only.)

## Setup Instructions

1. Go to <http://reddit.com/prefs/apps>. Click "are you a developer? create an app..."
2. This will bring up a form. For now we only need to give it a name (call it whatever you want), select `script`, and add a redirect uri (can be any valid url, I just use `http://google.com`). When successful you should see something like this:

![alt text](https://github.com/byronsadik/RedditGhost/blob/readme/reddit-client-secret.png "")

Save the ID and secret for later.

1. Clone repo locally, and in directory run `npm install`.
1. Go to `http://localhost:3000`. 
1. Input your username, password, ID, secret, and all of your Reddit post information. Make sure you select whether you're posting a reddit link or a text post and be sure to input the correct subreddit name.

Then voila! As long as the app is running it will post to Reddit for you at the scheduled time.