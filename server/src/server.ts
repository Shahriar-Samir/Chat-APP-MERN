import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  await mongoose.connect(config.dbURI as string);

  app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
  });
}

main();
