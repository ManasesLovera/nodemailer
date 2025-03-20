# Send email script
Script created using [nodemailer](https://www.nodemailer.com/) package that helps me sending emails using APP Password from Gmail.

## Requirements
1. Node.js v16.20.2 or higher.
1. App password: [You can get it this way](https://itsupport.umd.edu/itsupport?id=kb_article_view&sysparm_article=KB0015112).
2. Create `.env` file and copy paste what you see in the `example.env` file and add you personal email you used when creating the app password, the email you want to receive the html content, the subject of the email, and the app password.
3. Feel free to modify as you want the `email-content.html` file, this is the content that will be sent to the email.

## How to run this code
First let's install the necessary dependencies for this project `nodemailer` and `dotnev`:
```bash
npm install
```
Once you have the environment variables set up, packages installed, and you modified the html content as you want, you can run in the terminal:
```bash
node app.js
```
You should see a message like this:
```
Message sent: <EmailID>
```
This means the code works correctly, if you find any bug or issue don't hesitate to send an Issue or Pull Request and I'll see it.