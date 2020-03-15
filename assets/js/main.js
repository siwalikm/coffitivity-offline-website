(function($) {
// javascript magic zone
$(document).ready(function (params) {
    $('img.split-image__inner-div__image').draggable({
        containment: "parent"
      });
    $('img.split-image__inner-div__image').on('click',function () {
        $('#download-container').effect('shake',{times:2});
    });
});


})(jQuery);
