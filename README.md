I wrote this little helper to use webhooks from Slack in my #losethebackend application.
I found one tweet from the slack api saying they support cors for webhooks. Sadly I could not figure out how to get cors working with webhooks. The node app just takes the specified target and body and makes the request.

```json
POST to https://yourproxyurl.com
{
  "target": "https://yourslackwebhookurl.com",
  "body": {
    "text": "This is a Slack webhook message"
  }
}
```
