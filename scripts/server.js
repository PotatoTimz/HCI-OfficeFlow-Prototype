const serverName = $("#serverName");
const chatName = $("#chatName");

// function panel
const textChat = $("#textChat");
const voiceChat = $("#voiceChatMenu");
const taskManagerMenu = $("#taskManagerMenu");
const vrChat = $("#vrMenu");

const taskManagerIcon = `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16"
                            fill="currentColor" class="bi bi-bricks"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z" />
                        </svg>`;
const textChatIcon = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor"
                        class="bi bi-pencil" viewBox="0 0 16 16">
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>`;
const voiceChatIcon = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-megaphone"
                        viewBox="0 0 16 16">
                        <path
                            d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
                    </svg>`;
const vrChatIcon = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16"
                        fill="currentColor"
                        class="bi bi-headset-vr"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248" />
                        <path
                            d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8" />
                    </svg>`;

const disableAllPanels = () => {
  textChat.addClass("toggleOff");
  voiceChat.addClass("toggleOff");
  taskManagerMenu.addClass("toggleOff");
  vrChat.addClass("toggleOff");
};

const generateChatName = (type, serverName) => {
  icon =
    type == "task"
      ? taskManagerIcon
      : type == "text"
      ? textChatIcon
      : type == "voice"
      ? voiceChatIcon
      : vrChatIcon;

  const chatName = `${icon}<span> ${serverName}</span>`;

  return chatName;
};

// Logout Button Click Handler
$("#logoutButton").on("click", () => {
  window.location.href = "login.html";
});

$(document).ready(function () {
  const servers = $(".serverSidebarIcon");
  const serverDisplay = $("#serverDisplay");

  // Initially hide the server display
  serverDisplay.addClass("toggleOff");

  // Event listener for server icons
  servers.on("click", function () {
      const serverId = $(this).attr("id");

      // Hide the server display first
      serverDisplay.addClass("toggleOff");

      // Check which server is clicked and modify the display accordingly
      if (serverId === "server1") {
          // Server 1: Full features
          serverDisplay.removeClass("toggleOff");
          $("#taskManager2").show(); // Ensure Task-B-Manager is visible
          $("#textChat2").show();    // Ensure Team-B-Text-Chat is visible
          console.log("Server 1 selected: Showing all features");
      } else if (serverId === "server2") {
          // Server 2: Reduced features
          serverDisplay.removeClass("toggleOff");
          $("#taskManager2").hide(); // Hide Task-B-Manager
          $("#textChat2").hide();    // Hide Team-B-Text-Chat
          console.log("Server 2 selected: Reduced features");
      }
  });
});


