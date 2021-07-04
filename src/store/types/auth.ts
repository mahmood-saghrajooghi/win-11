export interface Auth {
  token: null | string;
  userId: null | string;
  error: null | string;
  loading: boolean;
  authRedirectPath: null | string | undefined;
  isAuthenticated: boolean;
}