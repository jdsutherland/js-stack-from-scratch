// @flow

import { createAction } from 'redux-actions';

export const MAKE_BARK = 'MARK_BARK';
export const makeBark = createAction(MAKE_BARK, () => true);

