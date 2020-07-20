export default interface IMessage {
  id: string;
  userId:string;
  text: string;
  user: string;
  avatar?: string;
  editedAt?: Date | string;
  createdAt: Date | string;
  likes: number;
  formattedTime?: string;
}
