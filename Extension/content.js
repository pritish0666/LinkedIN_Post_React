(() => {
  let likec;

  chrome.runtime.sendMessage(
    {
      data: "DataFectched Successfully",
    },
    function (response) {
      console.log(response);
      likec = parseInt(response.data);
      console.log("Like count is " + likec);
    }
  );

  let i = 0;

  function changehere() {
    if (i < likec) {
      let likeButton = document
        .querySelector(".scaffold-finite-scroll__content")
        ?.querySelectorAll(
          "div .feed-shared-social-action-bar__action-button .react-button__trigger"
        )[i];

      if (likeButton) {
        likeButton.click();
        console.log("Liked post:", i + 1);
        i++;
      } else {
        console.log("Like button not found for post:", i + 1);
      }
    }
  }

  // Call function every 4 seconds to click the like button
  setInterval(changehere, 4000);
})();
