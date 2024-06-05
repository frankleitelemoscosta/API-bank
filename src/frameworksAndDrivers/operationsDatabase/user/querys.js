const insert_user = `SELECT insert_user(?,?,?,?,?,?)`
const get_user =`CALL get_usuario(?)`;

module.exports = {
    insert_user,
    get_user
}