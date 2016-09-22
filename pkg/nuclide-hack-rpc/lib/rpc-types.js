'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {NuclideUri} from '../../commons-node/nuclideUri';

export type HackParameterDetails = {
  name: string,
  type: string,
  variadic: boolean,
};

export type HackFunctionDetails = {
  min_arity: number,
  return_type: string,
  params: Array<HackParameterDetails>,
};

// Note that all line/column values are 1-based.
export type HackRange = {
  filename: NuclideUri,
  line: number,
  char_start: number,
  char_end: number,
};

export type HackCompletion = {
  name: string,
  type: string,
  pos: HackRange,
  func_details: ?HackFunctionDetails,
  expected_ty: boolean,
};

// A remotable version of atom$AutocompleteSuggestion
export type Completion = {
  text?: string,
  snippet?: string,
  displayText?: string,
  replacementPrefix?: string,
  type?: ?string,
  leftLabel?: ?string,
  leftLabelHTML?: ?string,
  rightLabel?: ?string,
  rightLabelHTML?: ?string,
  className?: ?string,
  iconHTML?: ?string,
  description?: ?string,
  descriptionMoreURL?: ?string,
};
