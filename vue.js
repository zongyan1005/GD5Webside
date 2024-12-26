

const {createApp,ref}  = Vue;

var Gameplaydata = createApp({
    data() {
        return{
            Gameplay:[
                {title:"玩家需要通過不同的關卡，找出相對應的鑰匙，逃出迷宮。",
                text1:"門上會有不同的顏色，玩家需要找出鑰匙拼湊出門上的顏色，開啟門前往下一關。",
                text2:"在路上玩家不只要尋找鑰匙，還要躲避鬼魂的攻擊，鬼魂依據關卡的不同速度與數量都會增加。",
                text3:"玩家要在生命殆盡前逃出迷宮。"
                }
            ]
        };
    }
}).mount("#gameplay");

var Storydata = createApp({
    data() {
        return{
            Story:[
                {
                text1:"在一次冒險之旅中，一位無畏的探險家誤闖入了一座傳說中的「顏色迷宮」。",
                text2:"據說這座迷宮由古代色彩之神創造，充滿了炫目的色彩與險惡的機關。但迷宮內不僅是挑戰重重，還隱藏著可怕的鬼魂。",
                text3:"探險家必須迅速利用敏捷的反應與智慧，根據迷宮中變化莫測的色彩提示找到正確的出路。"
                }
            ]
        };
    }
}).mount("#story");

var Galleryplaydata = createApp({
    data() {
        return{
            Gallery:[
                {imgSrc:"play1.png"},
                {imgSrc:"play2.png"},
                {imgSrc:"play2.png"}
            ]
        };
    }
}).mount("#gallery");