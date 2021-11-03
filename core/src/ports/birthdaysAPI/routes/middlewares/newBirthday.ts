import { Request, Response } from "express";

// Interfaces
import IBirthday from "../../../../interfaces/birthday";

// Schema
import Birthday from "../../../../db/schemas/birthdaySchema";

const newBirthday = async (req: Request, res: Response) => {
  const birthday: IBirthday = req.body;

  const emailUsed: IBirthday = await Birthday.findOne({
    email: birthday.email,
  });

  if (emailUsed) return res.status(400).json("Email già in uso");

  try {
    const newBirthday = new Birthday({
      firstName: birthday.firstName,
      lastName: birthday.lastName,
      email: birthday.email,
      birthday: new Date(birthday.birthday),
    });
    await newBirthday.save();
    return res.status(200).json({ _id: newBirthday._id });
  } catch (error: any) {
    return res.status(400).json(error);
  }
};

export default newBirthday;
