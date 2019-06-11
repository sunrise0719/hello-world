var file=require("./models/file.js");
exports.showPrint=function (req,res) {
    file.getAllAlbums(function (albums) {
        res.render()
    });
}