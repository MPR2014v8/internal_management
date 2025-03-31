export class CreateUserDto {
  name: string;
  email: string;
  passwordHash: string;
  title: string;
  isAdmin: boolean;
}
