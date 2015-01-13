define(['./lib', './endpoints', 'knockout', './ViewModel/MainViewModel', 'underscore'], function (lib, endpoints, ko, mainViewModel, _) {
  ko.applyBindings(new mainViewModel({
    host: endpoints.api
  }));
});
