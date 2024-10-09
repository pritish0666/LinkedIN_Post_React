const like = document.querySelector(".cbtn");
const btnv = document.querySelector(".btn");
const go = document.querySelector(".gobtn");

// Show button if like input is filled
like.addEventListener("keyup", function () {
  if (like.value != "") {
    btnv.classList.remove("hidden");
  } else {
    btnv.classList.add("hidden");
  }
});

go.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];

    // Navigate to LinkedIn feed page
    chrome.tabs.update(tab.id, { url: "https://www.linkedin.com/feed/" });
  });

  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    console.log(message);

    // Send only like count data, no comment count
    sendResponse({
      data: like.value,
    });
  });
});
