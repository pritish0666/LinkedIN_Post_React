(() => {
  let likec, commentc;

  chrome.runtime.sendMessage(
    {
      data: "DataFectched Successfully",
    },
    function (response) {
      console.log(response);
      likec = parseInt(response.data);
      commentc = parseInt(response.data1);
      console.log("Like count is " + likec);
      console.log("Comment Count is " + commentc);
    }
  );

  let i = 0,
    k = 0;

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


    if (k < commentc) {
      let commentButton = document
        .querySelector(".scaffold-finite-scroll__content")
        ?.querySelectorAll("div .comment span div button")[k];

      if (commentButton) {
        commentButton.click();
        console.log("Comment button clicked for post:", k + 1);


        setTimeout(() => {
          let commentContainer = document
            .querySelector(".scaffold-finite-scroll__content")
            ?.querySelectorAll(
              "div .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container .comments-comment-box__comment-text-editor .ql-editor"
            )[k];

          if (commentContainer) {
            let pTag = commentContainer.querySelector("p");

            if (pTag) {
           
              pTag.innerHTML = "CFBR";
              console.log("Comment inserted for post:", k + 1);

             
              let inputEvent = new Event("input", {
                bubbles: true,
                cancelable: true,
              });
              pTag.dispatchEvent(inputEvent);

             
              setTimeout(() => {
                let postButton = document
                  .querySelector(".scaffold-finite-scroll__content")
                  ?.querySelectorAll(
                    "div .social-details-social-activity .feed-shared-update-v2__comments-container .comments-comment-box__form-container form"
                  )
                  [k]?.querySelectorAll("div button")[2];

                if (postButton) {
                  postButton.click();
                  console.log("Post button clicked for post:", k + 1);
                  k++;
                } else {
                  console.log("Post button not found for post:", k + 1);
                }
              }, 4000); 
            } else {
              console.log("Comment box (p tag) not found for post:", k + 1);
            }
          } else {
            console.log("Comment container not found for post:", k + 1);
          }
        }, 1000);
      } else {
        console.log("Comment button not found for post:", k + 1);
      }
    }
  }


  setInterval(changehere, 4000);
})();
