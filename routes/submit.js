var express = require('express'),
    router = express.Router(),
    rawjs = require('raw.js'),
    reddit = new rawjs("raw.js redditPoster"),
    util = require('util'),
    CronJob = require('cron').CronJob
;

router.post('/', function(req, res){

    var body = req.body;

    reddit.setupOAuth2(body.id, body.secret);


    // prepping the date and time to put into the cronjob
    var time = body.time;
    var date = body.date;
    var hour = ' ' + time.substring(0, 2);
    var minutes = ' ' + time.substring(5, 3);
    var day = ' ' + date.substring(date.length, 8);
    var month = ' ' + (date.substring(7, 5) - 1);

    var timestamp = '00' + minutes + hour + day + month + ' *';

    var credentials = {
      "username": body.username,
      "password": body.userpass
    };

    // the actual post to be submitted
    //
    var submission = {
      "title": body.title,
      "r": body.subreddit,
      "inboxReplies": false,
      "save": false,
    };

    // checks if they're posting a url or not, if not, submission key will be text
    if (body.isLink === 'on'){
        submission["link"] = body.text;   
    } else {
        submission['text'] = body.text;
    }

    reddit.auth(credentials, function(err, response) {
      if (err) {
        exit("Unable to authenticate user: " + err);
      } else {
        // The user is now authenticated. If you want the temporary bearer token, it's available as response.access_token
        // and will be valid for response.expires_in seconds.
        // raw.js will automatically refresh the bearer token as it expires. Unlike web apps, no refresh tokens are available.
        

        reddit.captchaNeeded(function(err, required) {
          if (err) {
            exit("captchaNeeded failed: " + err);
          } else {
            if (required) {
              exit("can not submit because captcha is needed");
            } else {
              var job = new CronJob(timestamp, function() {
                reddit.submit(submission, function(err, id) {
                  if (err) {
                    exit("Unable to submit post: " + err);
                  } else {
                    console.log("submitted " + id);
                  }
                });

                this.stop();
              });

              job.start();

              res.redirect('/');
            }
          }
        });
      }
    }); // end reddit.auth

    // in case of error, log to STDERR and exit
    
    function exit(err) {
      console.error(err);
        res.redirect('/');
    }

}); // end router.post('/'

module.exports = router;
