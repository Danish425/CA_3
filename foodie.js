document.addEventListener("DOMContentLoaded", function() {
      console.log("Page loaded and script running");
  });
  function toggleText() {
    var moreText = document.getElementById("more-text");
    var btn = document.querySelector(".read-more");

    if (moreText.style.display === "none" || moreText.classList.contains("hidden")) {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
        moreText.classList.remove("hidden");
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
        moreText.classList.add("hidden");
    }
}
