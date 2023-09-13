const {App} = require("@slack/bolt");
require("dotenv").config();

const port = 3000

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.APP_LEVEL_TOKEN,
    port
})
app.command("/health", async ({ack, say}) => {
    try {
        await ack();
        say("Status: 200");
    } catch (error) {
        console.log("err")
        console.error(error);
    }
});

app.message(/^.*(<@U05S4EG6P42>).*/, async (e) => {
    const message = e.message.text;
    const newMsg = message.replace(/<@U05S4EG6P42>/, `<@${e.message.user}>`);
    await e.say(`${newMsg}`);
});


(async () => {
    try {
        await app.start(process.env.APP_PORT || port);
        console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
    } catch (err) {
        console.log(err)
    }
})();