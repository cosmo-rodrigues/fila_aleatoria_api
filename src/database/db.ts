export async function db(callback: () => void) {
  setTimeout(() => {
    console.log('Conexão estabelecida com o banco de dados');
    callback();
  }, 2000);
}
