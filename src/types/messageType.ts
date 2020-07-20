export default interface IMessage {
  idMessage:string;
  id: string;
  text: string;
  user: string;
  avatar?: string;
  editedAt?: Date | string;
  createdAt: Date | string;
  likes: number;
  formattedTime?: string;
}
