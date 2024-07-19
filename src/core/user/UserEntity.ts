export interface UserDTO {
  id: Identifier;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Timestamp;
}

export class UserEntity {
  constructor(public user: UserDTO) {}

  getFullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
