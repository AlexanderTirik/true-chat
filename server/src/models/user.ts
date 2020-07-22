import { users } from "../data";
import IUser from "../types/userType";
import { DEFAULT_AVATAR } from "../config/defaultUserSettings";

class User {
  constructor() {
    this.getOne = this.getOne.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  getOne({ id, user }: { id?: string; user?: string }) {
    if (user) {
      const findUser = users.find((userEl) => userEl.user === user);
      return findUser;
    }
    if (id) {
      const findUser = users.find((userEl) => userEl.id === id);
      return findUser;
    }
  }
  getAll() {
    return users;
  }
  create({
    avatar,
    user,
    password,
    role,
  }: {
    avatar?: string;
    user: string;
    password: string;
    role: string;
  }) {
    if (!avatar) avatar = DEFAULT_AVATAR;
    const newUser: IUser = {
      id: this.createUserId(),
      avatar,
      user,
      password,
      role,
      createdAt: new Date(),
    };
    users.push(newUser);
    return newUser;
  }
  update({ id }: { id: string }, data: { avatar?: string; user?: string }) {
    let user = users.find((user) => user.id == id);
    if (user) {
      const userIndex = users.indexOf(user);
      user.editedAt = new Date();
      user = { ...user, ...data };
      users[userIndex] = user;
      return user;
    }
  }
  delete({ id }: { id: string }) {
    const deletedUser = users.find((user) => user.id == id);
    if (deletedUser) {
      const index = users.indexOf(deletedUser);
      if (~index) users.splice(index, 1);
      return deletedUser;
    }
  }
  createUserId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

export default User;
