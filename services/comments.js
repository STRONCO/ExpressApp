const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComments(id){
    const rows = await db.query(
        `SELECT id_comments, titleComment, textComment, ownComment,avatar_comment, id_posts
        FROM comments
        WHERE id_posts = ${id}
        `
    );
    const data = helper.emptyOrRows(rows);


    return {
        data
    }

}

module.exports = {
    getComments
}
