var fs=require("fs");

exports.getAllAlbums=function (callback) {
    fs.readdir("./uploads",function (err,files) {

        var allAlbums=[];
        (function iter(i) {
            if(i==files.length){
                callback(allAlbums);
                return;
            }
            fs.stat("./uploads/"+files[i],function (err,data) {
                if(data.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iter(i+1);
            });
        })(0);
    });
}