export default interface IMessage {
  id: string;
  userId: string;
  text: string;
  editedAt?: Date | string;
  createdAt: Date | string;
  likesId: string[];
}
