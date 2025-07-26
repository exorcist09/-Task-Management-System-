import app from './app';
import open from 'open';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`✅ Server running at ${url}`);
  open(url); // Automatically open Swagger docs in browser
});
