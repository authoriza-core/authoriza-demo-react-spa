import { generatePKCE, redirectToAuthorizaAuth } from '../../feature/auth';

export async function login() {
  const { codeVerifier, codeChallenge } = await generatePKCE();

  // сохраняем верификатор для callback
  sessionStorage.setItem("pkce_verifier", codeVerifier);

  redirectToAuthorizaAuth({
    codeChallenge,
  });
}
