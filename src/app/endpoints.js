define([], function () {
  var endpoints = function() {
    this.api = '<%= api_endpoint %>';
  };

  return new endpoints();
});
