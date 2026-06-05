const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbW11bHVydXBhNjc0QGdtYWlsLmNvbSIsImV4cCI6MTc4MDYzNzAyMCwiaWF0IjoxNzgwNjM2MTIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjA2MDEyMWUtN2M5OS00N2RiLWFiZmMtMDVkZTdlNmU2MDEwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicnVwYSBzcmkiLCJzdWIiOiIwZGNiMmUwOS0wMjU0LTQ3ZjQtYWM4My1iYTQ0OTBlZGM1NTkifSwiZW1haWwiOiJhbW11bHVydXBhNjc0QGdtYWlsLmNvbSIsIm5hbWUiOiJydXBhIHNyaSIsInJvbGxObyI6IjIzYnExYTQ3MDEiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIwZGNiMmUwOS0wMjU0LTQ3ZjQtYWM4My1iYTQ0OTBlZGM1NTkiLCJjbGllbnRTZWNyZXQiOiJ2Q3lEcmp4bUh6cUpqamFSIn0.dzY6j2rENyInOcwjoSdvNdTMC-ehlxZaiMQW8Wc6eIw";
async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

  } catch (error) {
  console.log("ERROR:");
  console.log(error.response?.status);
  console.log(error.response?.data);
  console.log(error.message);
}
}

module.exports = Log;