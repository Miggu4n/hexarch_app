// Database
import connect from "../../db";
connect("birthaySender");

// Interfaces
import IBirthday from "../../interfaces/birthday";

// DB Schema
import Birthday from "../../db/schemas/birthdaySchema";

// Date-fns
import { format } from "date-fns";

// Sendgrid
const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY = "" } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

// Cron
const CronJob = require("cron").CronJob;

// Main
const birthayReminder = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const filters = { birthday: today };
  const birthdays: IBirthday[] = await Birthday.find(filters);

  if (birthdays.length < 1) return console.log("Oh no! No parties today");

  console.log(`[${format(new Date(), "dd/MM/yyyy")}] Sending birthdays!`);

  birthdays.map(async ({ email, firstName }) => {
    const msg = {
      to: email, // Change to your recipient
      from: "migguan97@gmail.com", // Change to your verified sender
      subject: `Happy Birthday ${firstName}! `,
      html: `<div><h1>Happy birthday, ${firstName}! <p></div>`,
    };

    try {
      await sgMail.send(msg);
      console.log(`${email}`);
    } catch (error: any) {
      console.log(error);
    }
  });
};

// Export
export default () => new CronJob("00 00 00 * * *", birthayReminder).start();
