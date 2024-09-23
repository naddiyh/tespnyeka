$(function() {
  $(".card").on("click", "h3", function() {
    $(this).next("p").slideToggle();
  });
});

