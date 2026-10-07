import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/ppes', async (req, res) => {
  const ppes = await prisma.pPE.findMany();
  res.json(ppes);
});

// Add more API routes...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
