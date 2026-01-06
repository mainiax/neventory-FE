import { UserSummary } from './userSummary';

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  user: UserSummary;
}

// // export interface RegisterPayload {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
// }
