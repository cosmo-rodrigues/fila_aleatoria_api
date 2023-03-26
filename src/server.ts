import dotenv from 'dotenv';
import { app } from './app';
import { db } from './database/db';

dotenv.config();

const PORT_DEFAULT = 3000;

const PORT = process.env.PORT || PORT_DEFAULT;

const server = app.listen(PORT, async () => {
  console.log('Tentando conectar ao banco de dados...');
  await db(() =>
    console.log('Operações no banco de dados podem ser realizadas agora')
  );
  
  console.log(`Rodando na porta ${PORT}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('App closed');
});

