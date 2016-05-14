import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  injectTapEventPlugin();
});
