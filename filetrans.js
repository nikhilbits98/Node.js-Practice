var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        fs.appendFileSync("output.txt",data,function(err){
            if(err) throw err;
            console.log('Saved!');
        });
        fs.writeFileSync('output2.txt',data,function(err){
            if(err) throw err;
            console.log('File written!');
        });
        fs.writeFileSync('output4.txt',data,function(err){
            if(err) throw err;
            console.log('File written!');
        });
        fs.unlinkSync('output4.txt',function(err){
            if(err) throw err;
            console.log("Redundant file deleted.");
        });
        fs.renameSync('output2.txt','output3.txt',function(err){
            if(err) throw err;
            console.log('File Renamed!');
        });

        res.end();
    });

}).listen(8080);
