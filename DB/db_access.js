module.exports = {
  db_portalempleo: {
    user: process.env.USER_PORTAL_EMPLEO,
    password: process.env.PASSWORD_PORTAL_EMPLEO,
    connectString: process.env.CONNECTSTRING_PORTAL_EMPLEO,
  },

  db_up_admsis_desarollo: {
    user: process.env.USER_UP_ADMSIS,
    password: process.env.PASSWORD_UP_ADMSIS,
    connectString: process.env.CONNECTSTRING_UP_ADMSIS,
  },

  db_oracle: {
    user: process.env.ORA_USER,
    password: process.env.ORA_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
    configDir: process.env.TNS_ADMIN,
    walletLocation: process.env.TNS_ADMIN,
    walletPassword: process.env.WALLET_PASSWORD,
  },
};
