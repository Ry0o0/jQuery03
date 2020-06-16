(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#zip').jpostal({
        postcode : [
            '#zip',
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);