process.env.NODE_ENV = 'test';

const path = require('path');
const gulp = require('gulp');
const nightwatch = require('gulp-nightwatch');

require('require-dir')('./gulp_tasks');
