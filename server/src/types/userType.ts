export default interface IUser {
  id: string;
  avatar: string;
  user:string;
  password:string;
  role:string;
  createdAt: string | Date;
  editedAt?: string | Date;
}
