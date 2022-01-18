/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import './global';
import { registerRootComponent , scheme} from 'expo';
const { default: App } = require("./AppWithProviders");



registerRootComponent(App);
