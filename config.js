class Config {
    constructor(env) {
        this.userEmail = env.USER_EMAIL,
        this.emailTo = env.EMAIL_TO,
        this.subject = env.EMAIL_SUBJECT,
        this.appPassword = env.EMAIL_APP_PASSWORD
    }
}

module.exports = Config