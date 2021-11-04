import { Request, Response } from "express";
import { format } from "date-fns";

// Interfaces
import IBirthday from "../../../../interfaces/birthday";

// DB Schemas
import Birthday from "../../../../db/schemas/birthdaySchema";

const getBirthdays = async (req: Request, res: Response) => {
  // Generate filters for today
  const birthday: string = format(new Date(), "yyyy-MM-dd");
  const filters = { birthday };

  // Fetching birthdays from DB
  const birthdays: IBirthday[] = await Birthday.find(filters);
  const birthdaysCount: number = await Birthday.count(filters);

  // Sending birthdays
  return res.status(200).json({
    birthdays: birthdays.map(({ email, firstName, lastName, birthday }) => {
      return {
        email,
        firstName,
        lastName,
        birthday,
      };
    }),
    birthdaysCount,
  });
};

export default getBirthdays;
