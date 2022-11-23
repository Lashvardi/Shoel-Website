// 3D element Hover
$(Hover1).hover(
  function () {
    setTimeout(function () {
      $(box_threed).fadeIn();
    }, 1000);
  },
  function () {
    $(Outhover).hover(
      function () {
        // over
      },
      function () {
        $(box_threed).fadeOut();
      }
    );
  }
);

function copy_() {
    let copyText = document.getElementById("copyable");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}