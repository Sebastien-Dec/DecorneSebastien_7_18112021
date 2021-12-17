module.exports = {
    HOST : 'localhost',
    USER: 'moderator',
    PASSWORD: 'moderator',
    DB: 'groupomania',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};