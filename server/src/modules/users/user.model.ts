import { model, Schema } from 'mongoose';
import { TUser, UserModel, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.statics.isUserExists = async function (email) {
  return await UserModel.findOne({ email });
};
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return plainTextPassword === hashedPassword;
};

const UserModel = model<TUser, UserModel>('User', userSchema);

export default UserModel;
