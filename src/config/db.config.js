module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "aes123",
    DB: "devdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };