import asyncHandler from 'express-async-handler';
import ProfilePic from '../models/ProfilePic.js';
import PDF from '../models/Pdf.js';

const getProfilePic = asyncHandler( async (req, res) => {
    try {
        const profilePic = await ProfilePic.findOne({ name: 'about' });
       
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

const getCV = asyncHandler( async (req, res) => {
    try {
        const pdf = await PDF.findOne({ name: 'cv'});
        
        if(!pdf) {
            return res.status(404).json({ message: 'CV not found' });
        }

        res.set('Content-Type', 'application/pdf');
        res.send(pdf.content);
    } catch (error) {
        console.error('Error fetching cv:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

export { getProfilePic, getCV } 