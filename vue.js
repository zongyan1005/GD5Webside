const {createApp,ref}  = Vue;

var Gallerydata = createApp({
    data() {
        return{
            gallery:[
                {"imgSrc":"play1.png"}
            ]
        }
    }
}).mount("#gallery");