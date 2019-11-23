import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models } from './models';

export const store = init({
  models,
});