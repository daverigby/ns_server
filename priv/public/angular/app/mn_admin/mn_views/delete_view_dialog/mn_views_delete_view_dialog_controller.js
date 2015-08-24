angular.module('mnViews').controller('mnViewsDeleteViewDialogController',
  function ($scope, $modalInstance, mnPromiseHelper, mnViewsService, currentDdocName, currentViewName, isSpatial) {
    $scope.currentDdocName = currentDdocName;
    $scope.currentViewName = currentViewName;
    $scope.maybeSpatial = isSpatial ? 'Spatial' : '';
    $scope.doDelete = function () {
      var url = mnViewsService.getDdocUrl($scope.mnViewsState.bucketsNames.selected, currentDdocName);

      var promise = mnViewsService.getDdoc(url).then(function (presentDdoc) {
        delete presentDdoc.json[isSpatial ? 'spatial' : 'views'][currentViewName];
        return mnViewsService.createDdoc(url, presentDdoc.json);
      });

      mnPromiseHelper.handleModalAction($scope, promise, $modalInstance);
    };
  });
