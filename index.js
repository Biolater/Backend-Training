import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs'
inquirer.prompt([
    {
        message: 'Type in your url',
        name: 'url'
    }
]).then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'))
}).catch(err => console.log(err))