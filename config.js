module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
    bitacora_cambios: process.env.BITACORA_CAMBIOS || true
  },
  jwt: {
    secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
  },
  bd: {
    database: "demobase",
    username: "doadmin",
    password: "k9tu3z285cuemoez",
    host: "desarrollo-do-user-7602079-0.a.db.ondigitalocean.com",
    dialect: "mysql",
    port: 25060,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
