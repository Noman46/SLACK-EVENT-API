const { App } = require('@slack/bolt');
const axios = require("axios");

const app = new App({
  token: "xoxb-23910975909-4322321532800-r3fTf7Gu14oVyYmKM2OBmyq1",
  signingSecret: "9297c3bbb6006c1a29438060fc300bb1"
});


  app.message('Incident: Resolved', async ({ message, say }) => {
    await say("Your Automated Test Against Zephr Is Ruinning For An Incident: '*Resolved*'");
  
    const dispatchUrl = "https://api.github.com/repos/Noman46/slack-dispatch/dispatches"
    let payload = {
      event_type: "do-something"
    };
    const res = await axios.post(dispatchUrl, payload, {
      headers: {
        Authorization: "Bearer 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",
        Accept: "application/vnd.github.everest-preview+json"
      }
  })
  });


(async () => {
  // Start your app
  await app.start(process.env.PORT || 5000);

  console.log('⚡️ Bolt app is running!');
})();
