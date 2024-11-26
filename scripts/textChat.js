// server buttons
const textChatButton1 = $("#textChat1");
const textChatButton2 = $("#textChat2");

const chatMenu = $("#chatMenu");

const textChatMessages1 = [
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Alex Newman",
    message:
      "Hey team, just wanted to check in and see if we’re all set for the client meeting tomorrow. Any updates?",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Jordan Smith",
    message:
      "I’m still working on the final report, but I should have it ready by the end of the day. I’ll send it over once it’s complete.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Taylor Joy",
    message:
      "Sounds good, Jordan! I’ll start preparing the slides for the presentation once I get the report. Should have them ready by tomorrow afternoon.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Alex Newman",
    message:
      "Great, thanks, Taylor. Just make sure to align the slides with the latest data we have. We don’t want to miss any important updates.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Jordan Smith",
    message:
      "No worries, I’ll make sure the data in the report is up-to-date. I’ll double-check everything before I send it over.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Taylor Joy",
    message:
      "Perfect! Once I get the report, I’ll also do a quick review of the slides to ensure everything matches up. We’ll be ready for tomorrow!",
  },
];
const textChatMessages2 = [
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Alex Newman",
    message:
      "Hey everyone, just wanted to check in about the progress on the new project timeline. How’s everything going?",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Jordan Smith",
    message:
      "Hey Alex, I’ve finished my part on the research, just need to finalize a few things before I can pass it over to Taylor. Should be ready by the end of the day.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Taylor Joy",
    message:
      "Got it, Jordan! I’ll start drafting the presentation as soon as I have that. I’ll aim to have a first draft by tomorrow morning. Does that work?",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Alex Newman",
    message:
      "Perfect, sounds good! Just make sure we’re all aligned before the meeting with the client on Thursday.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Jordan Smith",
    message:
      "Yep, I’ll double-check the research notes to make sure we’re on the same page with the latest data.",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Taylor Joy",
    message:
      "I’ll make sure the presentation reflects that, and we’ll do a quick internal review Wednesday afternoon. How’s that for timing?",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Alex Newman",
    message:
      "Great plan! Let’s aim to have everything wrapped up by Wednesday so we have time for feedback before the client meeting. Thanks, everyone!",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Jordan Smith",
    message: "Sounds good, I’ll keep you updated on the research. Thanks!",
  },
  {
    profileImage:
      "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    profileName: "Taylor Joy",
    message:
      "Thanks, all! Looking forward to seeing everything come together. 😊",
  },
];

const generateTextChat = (chatInfo) => {
  let chatHTML = "";
  chatInfo.map((info) => {
    chatHTML += `
            <div class="text-white chatMessageBox px-4">
                <img
                    class="chatProfileImage"
                    src="${info.profileImage}" />
                <div class="chatMessageInfo">
                    <div class="chatProfileName">${info.profileName}</div>
                    <div class="chatProfileMessage">${info.message}</div>
                </div>
            </div>
        `;
  });

  return chatHTML;
};

textChatButton1.on("click", () => {
  disableAllPanels();
  textChat.removeClass("toggleOff");

  const generatedChatHTML = generateTextChat(textChatMessages1);
  const generatedChatName = generateChatName("text", "Team-A-Text-Chat");

  chatMenu.html(generatedChatHTML);
  chatName.html(generatedChatName);
});

textChatButton2.on("click", () => {
  disableAllPanels();
  textChat.removeClass("toggleOff");

  const generatedChatHTML = generateTextChat(textChatMessages2);
  const generatedChatName = generateChatName("text", "Team-B-Text-Chat");

  chatMenu.html(generatedChatHTML);
  chatName.html(generatedChatName);
});
