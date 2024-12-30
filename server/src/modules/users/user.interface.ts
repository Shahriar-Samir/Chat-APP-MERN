export type TUser = {
  uid: string;
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  activeStatus: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
};
