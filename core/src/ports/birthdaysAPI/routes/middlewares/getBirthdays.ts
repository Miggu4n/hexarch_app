import { Request, Response } from "express";
import { format } from "date-fns";
import IBirthday from "../../../../interfaces/birthday";
import Birthday from "../../../../db/schemas/birthdaySchema";

const getBirthdays = async (req: Request, res: Response) => {
  const birthday: string = format(new Date(), "yyyy-MM-dd");
  const filters = { birthday };

  const birthdays: IBirthday[] = await Birthday.find(filters);
  const birthdaysCount: number = await Birthday.count(filters);

  return res.status(200).json({
    birthdays: birthdays.map(({ firstName, lastName, birthday }) => {
      return {
        firstName,
        lastName,
        birthday,
      };
    }),
    birthdaysCount,
  });
};

export default getBirthdays;
