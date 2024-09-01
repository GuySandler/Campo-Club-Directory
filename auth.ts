async function login() {
    const client = await createAuth0Client({
      domain: "dev-e0bw8pg046y7ahj6.us.auth0.com", // e.g. "klee-test.au.auth0.com"
      clientId: "iUgkP4AN6Ry41BiIDrbWPVftSNV0PbHS", // e.g. "GGOFsf1eiSGvYOBkeDHAAJopE5qRpzN7"
      authorizationParams: {
        redirect_uri: window.location.href,
      },
    });
    client.loginWithRedirect();
  }
  
  export function withAuth(): {
    login: () => Promise<void>;
  } {
   return { login }
  }
  