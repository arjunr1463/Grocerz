import dbconnect from "../config/dbConnect.js";
import sharp from "sharp";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const db = await dbconnect();
  try {
    const {
      fullname,
      mobile_number,
      email_id,
      address,
      state,
      district,
      account_type,
      password,
      confirm_password,
      pan_card_number,
      bank_account_info,
      ifsc_code,
      agree_terms_and_conditions,
    } = req.body;

    const email = await db.query(
      "SELECT * FROM grocerz.customerreg WHERE email_id = ?",
      [email_id]
    );
    const mobile = await db.query(
      "SELECT * FROM grocerz.customerreg WHERE mobile_number = ?",
      [mobile_number]
    );
    if (email[0].length > 0) {
      return res.status(400).json({ message: "Email already taken" });
    }
    if (mobile[0].length > 0) {
      return res.status(400).json({ message: "Mobile already taken" });
    }
    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let adhaarFrontImage = null;
    let adhaarBackImage = null;
    let pan_card = null;
    let ifsc = null;
    let bank_account = null;

    if (account_type === "primal") {
      if (req.files && req.files.length === 2) {
        const adhaarFrontImageBuffer = await sharp(req.files[0].buffer)
          .resize(800, 800)
          .jpeg()
          .toBuffer();
        const adhaarBackImageBuffer = await sharp(req.files[1].buffer)
          .resize(800, 800)
          .jpeg()
          .toBuffer();

        adhaarFrontImage = adhaarFrontImageBuffer;
        adhaarBackImage = adhaarBackImageBuffer;
      }
      pan_card = pan_card_number;
      bank_account = bank_account_info;
      ifsc = ifsc_code;
    }
    const query =
      "INSERT INTO customerreg(fullname,mobile_number,email_id,address,state,district,account_type,password,confirm_password,adhaar_front_image,adhaar_back_image,pan_card_number,bank_account_info,ifsc_code,agree_terms_and_conditions) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    const result = await db.query(query, [
      fullname,
      mobile_number,
      email_id,
      address,
      state,
      district,
      account_type,
      hashedPassword,
      confirm_password,
      adhaarFrontImage,
      adhaarBackImage,
      pan_card,
      bank_account,
      ifsc,
      agree_terms_and_conditions,
    ]);

    const response = {
      message: "Successfully created",
      customer: {
        fullname,
        mobile_number,
        email_id,
        address,
        state,
        district,
        account_type,
        hashedPassword,
        confirm_password,
        adhaarFrontImage,
        adhaarBackImage,
        pan_card,
        bank_account,
        ifsc,
        agree_terms_and_conditions,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

//get
const getAllUsers = async (req, res) => {
  const db = await dbconnect();
  try {
    const query = "SELECT * FROM grocerz.customerreg";
    const result = await db.query(query);

    if (result[0].length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const users = result[0].map((user) => ({
      fullname: user.fullname,
      mobile_number: user.mobile_number,
      email_id: user.email_id,
      address: user.address,
      state: user.state,
      status: user.status,
      district: user.district,
      account_type: user.account_type,
      generalid: user.general_id,
    }));

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

export { createUser, getAllUsers };
