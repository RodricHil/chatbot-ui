var botui = new BotUI("my-botui-app");

// Start Bot
// First Messages
botui.message
  .bot({
    content: "Hi there! 👋",
    loading: true,
    delay: 3000,
  })
  .then(function () {
    return botui.message.bot({
      loading: true,
      delay: 1500,
      content: "I'm Tony, a web developer from 🤔",
    });
  })
  .then(function () {
    return botui.message.bot({
      loading: true,
      delay: 1500,
      content: "So i wanted to share this cool bot with you.",
    });
  })
  .then(function () {
    return botui.message.bot({
      loading: true,
      delay: 1500,
      content: "Do you want to know about this bot",
    });
  })
  .then(function () {
    return botui.message.bot({
      loading: true,
      delay: 1500,
      content: "Pretty cool plugin or?",
    });
  })
  .then(function () {
    return botui.action.button({
      delay: 1500,
      loading: true,
      addMessage: true,
      action: [
        {
          text: "Yes!",
          value: "yes",
        },
        {
          text: "No.",
          value: "no",
        },
      ],
    });
  })
  .then(function (res) {
    if (res.value == "yes") {
      return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "I quite agree!",
      });
    } else {
      return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Okay, I'm sorry ...",
      });
    }
  })
  .then(function () {
    return botui.message.bot({
      loading: true,
      delay: 1500,
      content: "Please! Select your Gender.",
    });
  })
  .then(function () {
    return botui.action.button({
      delay: 1500,
      loading: true,
      addMessage: true,
      action: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
        {
          text: "Other",
          value: "other",
        },
      ],
    });
  })
  .then(function (res) {
    if (res.value == "male") {
      return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Your are a good person.😇",
      });
    } else if (res.value == "female") {
      return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Your are a evil person. 😈",
      });
    } else {
      return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Then what are you..😕",
      });
    }
  });
