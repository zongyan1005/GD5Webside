//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var path = require("path");

//web root
server.use(express.static(__dirname));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var GameplayDB = DB.create(__dirname+"/gameplay.db");
var StoryDB = DB.create(__dirname+"/story.db");
var GalleryDB = DB.create(__dirname+"/gallery.db");

 /*GameplayDB.insert([
        {   title:"玩家需要通過不同的關卡，找出相對應的鑰匙，逃出迷宮。",
            text1:"門上會有不同的顏色，玩家需要找出鑰匙拼湊出門上的顏色，開啟門前往下一關。",
            text2:"在路上玩家不只要尋找鑰匙，還要躲避鬼魂的攻擊，鬼魂依據關卡的不同速度與數量都會增加。",
            text3:"玩家要在生命殆盡前逃出迷宮。"
        }
 ])*/

/*StoryDB.insert([
    {
        text1:"在一次冒險之旅中，一位無畏的探險家誤闖入了一座傳說中的「顏色迷宮」。",
        text2:"據說這座迷宮由古代色彩之神創造，充滿了炫目的色彩與險惡的機關。但迷宮內不僅是挑戰重重，還隱藏著可怕的鬼魂。",
        text3:"探險家必須迅速利用敏捷的反應與智慧，根據迷宮中變化莫測的色彩提示找到正確的出路。"
    }
 ])

 GalleryDB.insert([
    {imgSrc:"play1.png"},
    {imgSrc:"play2.png"},
    {imgSrc:"play3.png"}
    
])*/


server.get("/gameplay", (req,res)=>{
      //DB
      GameplayDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

server.get("/story", (req,res)=>{
    //DB
    StoryDB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})

server.get("/gallery", (req,res)=>{
    //DB
    GalleryDB.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})



server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'yan/index.html'));
});