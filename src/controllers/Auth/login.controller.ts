import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userService.getOneUser({ email });

  if (!findUser) res.status(httpStatus.NOT_FOUND).json("User Not Found");

  if (findUser) {
    const compare = await comparePassword(password, findUser.password);
    const token = generateToken(findUser.uuid);
    const { username } = findUser

    if (findUser?.deletedAt) res.status(httpStatus.FORBIDDEN).json("User Deleted");
    if (!compare) res.status(httpStatus.FORBIDDEN).json('Wrong Password');

    res.status(httpStatus.ACCEPTED).json({ token, username, email });
  };

  res.status(httpStatus.SERVICE_UNAVAILABLE).json('Something Wet Wrong...');
};

export const loginController = errorHandlerWrapper(loginHandler);
