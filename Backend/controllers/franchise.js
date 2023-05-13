import dbconnect from "../config/dbConnect.js";
import sharp from "sharp";
import bcrypt from "bcrypt";

const validateBankAccount = (account_number, ifsc_code) => {
  const isValidIFSC = /^[A-Z]{4}[0][A-Z0-9]{6}$/.test(ifsc_code);
  const isValidBBAN = /^[0-9]{9,18}$/.test(account_number);
  return isValidIFSC && isValidBBAN;
};

const createFranchise = async (req, res) => {
  try {
    const db = await dbconnect();
    const requiredFields = [
      "franchise_name",
      "contact_person_name",
      "mobile_number",
      "email_id",
      "address",
      "city",
      "pincode",
      "state",
      "district",
      "password",
      "confirm_password",
      "account_number",
      "branch",
      "bank_name",
      "ifsc_code",
      "gst_number",
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }
    const {
      franchise_name,
      contact_person_name,
      mobile_number,
      email_id,
      address,
      city,
      pincode,
      state,
      district,
      password,
      confirm_password,
      account_number,
      branch,
      bank_name,
      ifsc_code,
      gst_number,
    } = req.body;

    const email = await db.query(
      "SELECT * FROM grocerz.franchisereg WHERE email_id = ?",
      [email_id]
    );
    const mobile = await db.query(
      "SELECT * FROM grocerz.franchisereg WHERE mobile_number = ?",
      [mobile_number]
    );
    if (email[0].length > 0) {
      return res.status(400).json({ message: "Email already taken" });
    }
    if (mobile[0].length > 0) {
      return res.status(400).json({ message: "Mobile already taken" });
    }
    const isBankAccountValid = validateBankAccount(account_number, ifsc_code);

    if (!isBankAccountValid) {
      return res
        .status(400)
        .json({ message: "Invalid bank account number or IFSC code" });
    }

    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No GST certificate file provided" });
    }

    const gstCertificate = req.file.buffer;

    const optimizedGstCertificate = await sharp(gstCertificate)
      .resize({ width: 800, height: 600 })
      .jpeg({ quality: 80 })
      .toBuffer();

    const q =
      "INSERT INTO grocerz.franchisereg(franchise_name,contact_person_name,mobile_number,email_id,address,city,pincode,state,district,password,confirm_password,account_number,branch,bank_name,ifsc_code,gst_number,gst_certificate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const result = await db.query(q, [
      franchise_name,
      contact_person_name,
      mobile_number,
      email_id,
      address,
      city,
      pincode,
      state,
      district,
      hashedPassword,
      confirm_password,
      account_number,
      branch,
      bank_name,
      ifsc_code,
      gst_number,
      optimizedGstCertificate,
    ]);

    const responsePayload = {
      message: "Successfully created user",
      franchise: {
        franchise_name,
        contact_person_name,
        mobile_number,
        email_id,
        address,
        city,
        pincode,
        state,
        password,
        district,
        account_number,
        branch,
        bank_name,
        ifsc_code,
        gst_number,
        optimizedGstCertificate,
      },
    };

    return res.status(200).json(responsePayload);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

//get
const getAllFranchise = async (req, res) => {
  const db = await dbconnect();
  try {
    const query = "SELECT * FROM grocerz.franchisereg";
    const result = await db.query(query);

    if (result[0].length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const users = result[0].map((user) => ({
      franchisename: user.franchise_name,
      contactperson: user.contact_person_name,
      mobilenumber: user.mobile_number,
      emailid: user.email_id,
      state: user.state,
      district: user.district,
      status: user.status,
    }));

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

//delete
const deleteFranchise = async (req, res) => {
  const db = await dbconnect();
  try {
    const franchiseId = req.params.email_id;

    const query = `DELETE FROM grocerz.franchisereg WHERE email_id = "${franchiseId}"`;
    await db.query(query);

    res.status(200).json("Franchise deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

//edit
const editFranchise = async (req, res) => {
  try {
    const db = await dbconnect();
    const {
      franchiseId,
      franchise_name,
      contact_person_name,
      mobile_number,
      email_id,
      address,
      city,
      pincode,
      state,
      district,
      account_number,
      branch,
      bank_name,
      ifsc_code,
      gst_number,
    } = req.body;

    let query = `
      UPDATE grocerz.franchisereg SET 
        franchise_name = ?,
        contact_person_name = ?,
        mobile_number = ?,
        email_id = ?,
        address = ?,
        city = ?,
        pincode = ?,
        state = ?,
        district = ?,
        account_number = ?,
        branch = ?,
        bank_name = ?,
        ifsc_code = ?,
        gst_number = ?
      WHERE franchise_id = ?
    `;
    const result = await db.query(query, [
      franchise_name,
      contact_person_name,
      mobile_number,
      email_id,
      address,
      city,
      pincode,
      state,
      district,
      account_number,
      branch,
      bank_name,
      ifsc_code,
      gst_number,
      franchiseId,
    ]);

    const responsePayload = {
      message: "Franchise updated successfully",
      franchise: {
        franchise_name,
        contact_person_name,
        mobile_number,
        email_id,
        address,
        city,
        pincode,
        state,
        district,
        account_number,
        branch,
        bank_name,
        ifsc_code,
        gst_number,
      },
    };

    return res.status(200).json(responsePayload);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};



export { createFranchise, getAllFranchise,deleteFranchise,editFranchise };
