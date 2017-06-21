'use strict';

var _atom = require('atom');

var _fs = _interopRequireDefault(require('fs'));

var _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styleDir = _path.default.join(__dirname, 'styles');
// eslint-disable-next-line nuclide-internal/prefer-nuclide-uri
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

// Requiring this module will load all stylesheets in styles/.
// The exported value can be disposed to remove the stylesheets.

const styleDisposables = new _atom.CompositeDisposable(..._fs.default.readdirSync(styleDir).filter(file => _path.default.extname(file) === '.less').map(file => atom.themes.requireStylesheet(_path.default.join(styleDir, file))));

module.exports = styleDisposables;