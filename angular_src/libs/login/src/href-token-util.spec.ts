import { getTokenFromHref } from './href-token-util';
describe('HrefTokenUtil', () => {
  it('should be defined', () => {
    expect(getTokenFromHref).toBeDefined();
  });

  it('should return token', () => {
    const token = 'asdfDhokhaasdfHaiasdfTu';
    let url = `http://localhost:3000/#access_token=${token}&name=neelesh`;
    expect(getTokenFromHref(url)).toEqual(token);

    url = `http://localhost:3000/#type=zahar&name=neelesh&access_token=${token}`;
    expect(getTokenFromHref(url)).toEqual(token);

    url = `http://localhost:3000/#type=zahar&name=neelesh`;
    expect(getTokenFromHref(url)).toBeNull();
  });
});
