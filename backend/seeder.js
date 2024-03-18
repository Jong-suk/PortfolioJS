import fs from 'fs';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import ProfilePic from './models/ProfilePic.js';
import PDF from './models/Pdf.js';
import PortfolioItem from './models/PortfolioItem.js';

import proPics from './data/profilePic.js';
import portfolioItems from './data/portfolioItems.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await ProfilePic.deleteMany()
    // await PDF.deleteMany()
    // await PortfolioItem.deleteMany(); 

    for (const pic of proPics) {
      const { name, imageUrl } = pic;

      const imageBuffer = await fs.promises.readFile(imageUrl);

      await ProfilePic.create({
        name,
        image: imageBuffer,
      });

      console.log(`Profile picture for ${name} inserted successfully.`.green.inverse);
    }

    console.log('All profile pictures inserted.'.green.inverse);

    const pdfBuffer = await fs.promises.readFile('C:/Users/abhut/OneDrive/Desktop/MERN/portfolio/backend/data/cv.pdf');

    await PDF.create({
      name: 'cv', 
      content: pdfBuffer,
    })

    console.log('PDF inserted successfully.'.green.inverse);

    for (const item of portfolioItems) {
      const imgSrcBuffer = await fs.promises.readFile(item.imgSrc);

      const screenshotsBuffer = await Promise.all(
        item.screenshots.map(async (screenshotPath) => {
          const screenshotBuffer = await fs.promises.readFile(screenshotPath);
          return screenshotBuffer;
        })
      );

      await PortfolioItem.create({
        category: item.category,
        title: item.title,
        imgSrc: imgSrcBuffer,
        screenshots: screenshotsBuffer,
        description: item.description,
        date: item.date,
        tools: item.tools,
        webLink: item.webLink,
      });

      console.log(`Portfolio item ${item.title} inserted successfully.`.green.inverse);
    }

    console.log('All portfolio items inserted.'.green.inverse);

  } catch (error) {
    console.error('Error inserting profile pictures:', `${error}`.red.inverse);
  } finally {
    mongoose.connection.close();
  }
};

const destroyData = async () => {
  try {
    await ProfilePic.deleteMany()
    await PDF.deleteMany()
    await PortfolioItem.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}