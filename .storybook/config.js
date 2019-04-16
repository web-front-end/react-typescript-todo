import { configure, addParameters } from '@storybook/react';
const req = require.context('../src/components', true, /.stories.tsx$/);

// base common css 
import './../node_modules/carbon-components/css/carbon-components.min.css';

function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
addParameters({
  options: {
    name: 'CRA Kitchen Sink',
    isFullScreen: false,
    showPanel: true,
    // more configuration here
  },
});