const insert_user = `SELECT insert_user($1,$2)`
const get_user =`CALL get_usuario(?)`;

module.exports = {
    insert_user,
    get_user
}