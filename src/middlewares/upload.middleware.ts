import multer from 'multer';

const storage = multer.memoryStorage(); // save in RAM temporarily
export const upload = multer({ storage });