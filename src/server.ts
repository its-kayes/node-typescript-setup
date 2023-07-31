import { Server } from 'http';
import mongoose, { ConnectOptions } from 'mongoose';
import app from './app';
import { MONGO_URI, PORT } from './config/siteEnv';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    mongoose
      .connect(
        MONGO_URI as string,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions,
      )
      .then(() => {
        console.log('DB Connected!');
        app.listen(PORT, () => console.log(`Server Ok ? ${PORT}`));
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();
