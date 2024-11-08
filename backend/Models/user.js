import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  profilePhoto: { type: String },
  district: { type: String, required: true },
  state: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;