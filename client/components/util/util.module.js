'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('ichingJournalApp.util', [])
  .factory('Util', UtilService)
  .name;
