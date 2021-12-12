const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const pat = require('path');

const loadArchivo = ({ images }, pa) => {
    const path = pat.join(__dirname, '../uploads/images')
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
    const namePart = images.name.split('.');
    const ext = namePart[namePart.length - 1];
    const newName = `${uuidv4()}.${ext}`;
    const uploadePath = `${path}/${newName}`;
    images.mv(uploadePath, (err) => {
        if (err) {
            console.log(err);
            throw new Error('filed uploading file')
        }
    });
    return newName;

}
const deleteArchivo = (name) => {
    path = pat.join(__dirname, '../uploads/images/' + name)
    if (fs.existsSync(path)) {
        fs.rmSync(path);
    }
}



module.exports = {
    loadArchivo,
    deleteArchivo
}