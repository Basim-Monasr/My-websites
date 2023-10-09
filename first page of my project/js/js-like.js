function toggleLike(button) {
    var span = button.nextElementSibling;
    var likes = parseInt(span.innerHTML);
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      likes--;
    } else {
      button.classList.add("active");
      likes++;
    }
    span.innerHTML = likes;
  }