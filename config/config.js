let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgresql://_601b175320df86c3:_3bffd5b4e19b8f0e07043eec6ad095@primary.postgres--gq4kpmjzkffq.addon.code.run:5432/_0d46a6b5a4cc',
        options: {
            logging: false
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;
