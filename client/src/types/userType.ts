export default interface IUser {
  id: string;
  avatar: string;
  user: string;
  password: string;
  role: string;
  createdAt: Date | string;
  editedAt: Date | string;
}
