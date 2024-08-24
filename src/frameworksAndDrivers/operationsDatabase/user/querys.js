const insert_user = `CALL insert_user(?,?,?,?,?,?,?)`
const get_user =`CALL get_usuario(?)`;
const get_usuario_login = `CALL get_usuario_login(?,?)`;

module.exports = {
    insert_user,
    get_user,
    get_usuario_login
}