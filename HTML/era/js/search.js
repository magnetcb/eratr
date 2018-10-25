$(document).ready(function() {
  $(".search").keyup(function() {
    var searchbox = $(this).val();
    var dataString = "searchword=" + searchbox;

    if (searchbox == "") {
    } else {
      $.ajax({
        type: "POST",
        url: "http://eratr.com/f_search.php",
        data: dataString,
        cache: false,
        success: function(html) {
          $("#display")
            .html(html)
            .show();
        }
      });
    }
    return false;
  });
});
