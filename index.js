const { networkInterfaces, hostname } = require('os');

// Zmienna przechowująca wersję aplikacji
const appVersion = process.env.VERSION || 'Brak wersji';

// Pobranie adresu IP z interfejsu eth0 (jeśli dostępny)
const ipAddress = (networkInterfaces().eth0 || []).find(i => i.family === 'IPv4')?.address || 'Nieznany adres IP';

// Zmienna przechowująca nazwę hosta
const systemHostname = hostname();

console.log(`
<html>
  <head><title>Informacje o systemie</title></head>
  <body>
    <h1>Informacje o systemie</h1>
    <p><strong>Adres IP:</strong> ${ipAddress}</p>
    <p><strong>Nazwa hosta:</strong> ${systemHostname}</p>
    <p><strong>Wersja aplikacji:</strong> ${appVersion}</p>
  </body>
</html>
`);
