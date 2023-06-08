import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginEmail } from '../getLoginEmail';

describe('getLoginPassword.test', () => {
  test('Test with state value. Should return empty string', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: '',
      },
    };
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });
  test('Test with empty state. Should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });
});
