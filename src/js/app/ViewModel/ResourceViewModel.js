define(['knockout'], function (ko) {
  return function resourceViewModel(data, host, dimensions) {
    var resource = this;

    resource.name = data.name;
    resource.type = ko.observable(data.type);console.log('type', resource.type());
    resource.thumb = ko.observable(dimensions || '200x200');
    resource.original = ko.observable(host + '/resource?resource_id=' + data['_id']['$id']);
    resource.src = ko.observable(resource.original() + '&derivative=__thumbs/' + resource.thumb());
    resource.alt = ko.observable(data['filename']);

    resource.selected = ko.observable(false);

    resource.data = data;
  };
});
