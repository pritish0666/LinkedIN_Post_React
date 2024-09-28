const like = document.querySelector(".cbtn");
const comment = document.querySelector(".cmbtn");
const btnv = document.querySelector(".btn");
const go = document.querySelector(".gobtn");

like.addEventListener("keyup", function () {
  if (like.value != "" && comment.value != "") {
    btnv.classList.remove("hidden");
  } else {
    btnv.classList.add("hidden");
  }
});

comment.addEventListener("keyup", function () {
  if (like.value != "" && comment.value != "") {
    btnv.classList.remove("hidden");
  } else {
    btnv.classList.add("hidden");
  }
});

go.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];

    chrome.tabs.update(tab.id, { url: "https://www.linkedin.com/feed/" });
  });

  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    console.log(message);

    sendResponse({
      data: like.value,
      data1: comment.value,
    });
  });
});
