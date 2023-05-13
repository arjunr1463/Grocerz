import mysql from "mysql2/promise";

const dbconnect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    return connection;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export default dbconnect;
