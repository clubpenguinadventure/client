const fs = require('fs')
const exec = require('child_process').exec

function searchFolder(path) {
    let files = fs.readdirSync(path)
    for (let file of files) {
        if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
            searchFolder(`${path}/${file}`)
            continue
        }

        if (file.endsWith('.json')) {
            minify(`${path}/${file}`)
        }
    }
}

function minify(json) {
    var jsonFile = fs.readFileSync(json, 'utf8')
    var jsonData = JSON.parse(jsonFile)
    let regex = new RegExp('^.*/crumbs/[^/]+/[^/]+.json$')
    if (regex.test(json)) {
        fs.writeFileSync(json, JSON.stringify(jsonData, null, 4))
    } else {
        fs.writeFileSync(json, JSON.stringify(jsonData))
    }
}

searchFolder('./assets/media')
