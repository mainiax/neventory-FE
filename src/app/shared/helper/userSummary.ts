export interface UserSummary {
  id: string; // UUID → string
  email: string;
  firstName: string;
  lastName: string;
  role: string; // enum serialized as string
}
