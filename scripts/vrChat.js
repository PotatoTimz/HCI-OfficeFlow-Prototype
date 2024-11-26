const vrChatButton1 = $("#vrChat1");
const vrChatButton2 = $("#vrChat2");

vrChatButton1.on("click", () => {
  disableAllPanels();
  vrChat.removeClass("toggleOff");
  console.log("test");

  const generatedChatName = generateChatName("vr", "Team-A-VR-Chat");

  chatName.html(generatedChatName);
});

vrChatButton2.on("click", () => {
  disableAllPanels();
  vrChat.removeClass("toggleOff");

  const generatedChatName = generateChatName("vr", "Team-B-VR-Chat");

  chatName.html(generatedChatName);
});
