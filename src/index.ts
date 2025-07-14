// minecraft-auth-types/src/index.ts

export interface AuthSession {
  uuid: string;
  accessToken: string;
  username: string;
  expiresAt?: number;
}

export interface AuthContext {
  showModal: (modal: any) => Promise<void>;
  closeModal: () => void;
  saveSession: (session: AuthSession) => void;
}

export interface AuthenticationProvider {
  id: string;
  name: string;
  logo: string;
  description: string;
  authenticate(ctx: AuthContext): Promise<AuthSession>;
  refresh?(session: AuthSession): Promise<AuthSession>;
}
