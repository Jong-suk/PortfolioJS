import asyncHandler from 'express-async-handler';
import ProfilePic from '../models/ProfilePic.js';

const getProfilePic = asyncHandler( async (req, res) => {
    try {
        const profilePic = await ProfilePic.findOne({ name: 'home' });

        if(!profilePic) {
            return res.status(404).json({ message: 'Profile picture not found' });
        }
  
        
        res.set('Content-Type', 'image/jpeg');
        res.send(profilePic.image);
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

export default getProfilePic 