export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  email?: string;
  avatar?: string;
}
