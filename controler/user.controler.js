import { AsyncHandler } from "../util/AsyncHandler.js";
import { DBUser } from "../modeles/newuser.model.js";

export const newUser = AsyncHandler(async (req, res) => {
  const { UserName, age, phone } = req.body;
  if (!(UserName, age, phone)) {
    throw new Error("all fields are required");
  }
  try {
    const user = await DBUser.create({
      UserName,
      age,
      phone,
    });

    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const updateUserDetails = AsyncHandler(async (req, res) => {
  const { UserName, age, phone } = req.body;
  if (!(UserName, age, phone)) {
    throw new Error("all fields are required");
  }
  try {
    const user = await DBUser.findByIdAndUpdate(
      req.params.id,
      {
        UserName,
        age,
        phone,
      },
      { new: true }
    );
    res.status(201).json({ user, message: "User update successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const getUserById = AsyncHandler(async (req, res) => {
  try {
    const user = await DBUser.findById(req.params.id);
    res.status(201).json({ user, message: "User fetch successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const getAllUser = AsyncHandler(async (req, res) => {
  try {
    const user = await DBUser.find();
    res.status(201).json({ user, message: "User fetch successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const deleteUserById = AsyncHandler(async (req, res) => {
  try {
    const user = await DBUser.findByIdAndDelete(req.params.id);
    res.status(201).json({ user, message: "User delete successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const deleteAllUser = AsyncHandler(async (req, res) => {
  try {
    const user = await DBUser.deleteMany();
    res.status(201).json({ user, message: "all User delete successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
