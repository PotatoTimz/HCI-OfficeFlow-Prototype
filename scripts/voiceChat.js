const voiceChatButton1 = $("#voiceChat1");
const voiceChatButton2 = $("#voiceChat2");

const callerSection = $("#callerSection");

const generateVoiceCall = () => {
  const randomNumber = Math.floor(Math.random() * 19);
  let callHTML = "";

  for (let i = 0; i < randomNumber; i++) {
    callHTML += `
          <div class="caller">
              <img
                  class="callerImg"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
              <div class="callerOptions text-center">
                  <button class="btn btn-danger"> <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16" height="16"
                          fill="currentColor"
                          class="bi bi-mic-mute-fill"
                          viewBox="0 0 16 16">
                          <path
                              d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
                          <path
                              d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
                      </svg></button>
                  <button
                      class="btn btn-danger"> <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16" height="16"
                          fill="currentColor"
                          class="bi bi-headphones"
                          viewBox="0 0 16 16">
                          <path
                              d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                      </svg></button>
              </div>
          </div>
      `;
  }

  return callHTML;
};

voiceChatButton1.on("click", () => {
  disableAllPanels();
  voiceChat.removeClass("toggleOff");

  let generatedCallHTML = generateVoiceCall();
  const generatedchatName = generateChatName("voice", "Team-A-Voice-Chat");

  callerSection.html(generatedCallHTML);
  chatName.html(generatedchatName);
});

voiceChatButton2.on("click", () => {
  disableAllPanels();
  voiceChat.removeClass("toggleOff");

  let generatedCallHTML = generateVoiceCall();
  const generatedchatName = generateChatName("voice", "Team-B-Voice-Chat");

  callerSection.html(generatedCallHTML);
  chatName.html(generatedchatName);
});
