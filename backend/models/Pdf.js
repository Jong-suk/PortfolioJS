import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  name: String,
  content: Buffer, // Binary data field
});

const PDF = mongoose.model('Pdf', pdfSchema);

export default PDF;