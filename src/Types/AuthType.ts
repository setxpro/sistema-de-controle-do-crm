import { User } from "./User";

export type AuthType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};
