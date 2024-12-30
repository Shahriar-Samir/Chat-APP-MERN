import { model, Schema } from 'mongoose';
import { TSettings } from './settings.interface';

const settingsSchema = new Schema<TSettings>(
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
    activeStatus: {
      type: String,
      enum: ['active', 'inactive'],
    },
    bio: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'light',
    },
  },
  {
    timestamps: true,
  },
);

const SettingsModel = model('User-Setting', settingsSchema);

export default SettingsModel;
