let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgresql://_54786febab5cee09:_58167a3649348f24dad30e7bd5476f@primary.postgres--gq4kpmjzkffq.addon.code.run:5432',
        options: {
            logging: false
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;
