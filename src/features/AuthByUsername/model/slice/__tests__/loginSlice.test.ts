import { LoginSchema } from '../../types/loginSchema';
import { loginActions, loginReducer } from '../loginSlice';
import { loginByEmail } from '../../services/loginByEmail/loginByEmail';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { email: '123' };
    expect(loginReducer(
        state as LoginSchema,
        loginActions.setEmail('123'),
    )).toEqual({ username: '123' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
        state as LoginSchema,
        loginActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });
});
