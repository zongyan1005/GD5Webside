const {createApp,ref}  = Vue;

var Gameplaydata = createApp({
    data() {
        return{
            Gameplay:[
                {text:"玩家需要通過不同的關卡，找出相對應的鑰匙，逃出迷宮。",}
            ]
        };
    }
}).mount("#gameplay");