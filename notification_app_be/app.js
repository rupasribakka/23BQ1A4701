const getTopNotifications =
require("./notificationService");

async function run() {

    const top10 =
    await getTopNotifications();

    console.log(top10);

}

run();