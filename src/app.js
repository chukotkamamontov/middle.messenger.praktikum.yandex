import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('dist'));
app.use('*', express.static('dist/index.html'));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
