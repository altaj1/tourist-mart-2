import Cors from 'cors';

// Initialize CORS middleware
export const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: process.env.NEXT_PUBLIC_API_URL, // Replace with your client URL
  credentials: true,  // Allow cookies to be sent
});
