const axios = require("axios");
const Log = require("../logging_middleware/logger");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbW11bHVydXBhNjc0QGdtYWlsLmNvbSIsImV4cCI6MTc4MDYzNzAyMCwiaWF0IjoxNzgwNjM2MTIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjA2MDEyMWUtN2M5OS00N2RiLWFiZmMtMDVkZTdlNmU2MDEwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicnVwYSBzcmkiLCJzdWIiOiIwZGNiMmUwOS0wMjU0LTQ3ZjQtYWM4My1iYTQ0OTBlZGM1NTkifSwiZW1haWwiOiJhbW11bHVydXBhNjc0QGdtYWlsLmNvbSIsIm5hbWUiOiJydXBhIHNyaSIsInJvbGxObyI6IjIzYnExYTQ3MDEiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIwZGNiMmUwOS0wMjU0LTQ3ZjQtYWM4My1iYTQ0OTBlZGM1NTkiLCJjbGllbnRTZWNyZXQiOiJ2Q3lEcmp4bUh6cUpqamFSIn0.dzY6j2rENyInOcwjoSdvNdTMC-ehlxZaiMQW8Wc6eIw";


async function getTopNotifications() {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Fetching notifications"
        );

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        const notifications = response.data.notifications;

        const weight = {
            Placement: 3,
            Result: 2,
            Event: 1
        };

        notifications.sort((a, b) => {

            if (weight[b.Type] !== weight[a.Type]) {
                return weight[b.Type] - weight[a.Type];
            }

            return new Date(b.Timestamp)
                - new Date(a.Timestamp);

        });

        await Log(
            "backend",
            "info",
            "service",
            "Notifications sorted successfully"
        );

        return notifications.slice(0, 10);

    } catch (err) {

        await Log(
            "backend",
            "error",
            "service",
            err.message
        );

    }

}

module.exports = getTopNotifications;