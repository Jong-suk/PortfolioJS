import mongoose from 'mongoose';

const profilePicSchema = new mongoose.Schema({
  name: String,
  image: Buffer, // Binary data field
});

const ProfilePic = mongoose.model('ProfilePic', profilePicSchema);

export default ProfilePic;
