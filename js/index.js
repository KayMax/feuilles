Vue.component('section-slider', {
    template: '<div class="section-slider-container">' +
        '<div class="section-slider-box">' +
        '<div class="section-slider-bg">' +
        '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<defs>' +
        '<filter id="image_filter"><feGaussianBlur stdDeviation="50"></feGaussianBlur></filter></defs>' +
        '<image aria-hidden="true" tabindex="-1" width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="picSrc" filter="url(#image_filter)"></image>' +
        '</svg></div>' +
        '<div class="section-slider-inner"><img :src="picSrc">' +
        '<div class="slider-control previous" @click="prePic"><i class="fa fa-angle-left" aria-hidden="true"></i></div>' +
        '<div class="slider-control next" @click="nextPic"><i class="fa fa-angle-right"></i></div></div>' +
        '</div>' +
        '<div class="section-slider-nav" v-if="false">' +
        '<div v-for="(item,key) in item_arr" :key="key" class="slider-nav" :class="{\'active\':index==item,\'not-hover\':hover_item&&hover_item!=index}" @mouseover="hover_item=item" @mouseleave="hover_item=0">' +
        '<img :src="itemSrc(item)"></div></div>' +
        '</div>',
    data: function () {
        return {
            total: 21,
            index: 1,
            item_arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            hover_item: 0
        }
    },
    computed: {
        picSrc: function () {
            return "./assets/images/" + this.index + ".jpg";
        }
    },
    methods: {
        "nextPic": function () {
            if (this.index >= this.total)
                this.index = 1;
            else
                this.index++;
        }
        ,
        "prePic": function () {
                if(this.index <= 1)
                    this.index = this.total;
                else
                    this.index--;
        },
        itemSrc: function (item) {
            return "./assets/images/" + item + ".jpg";
        }
    }
});

Vue.component('section-des', {
    template: '<div class="section-des-container">' +
        '<p>' +
        '<span>Ce travail est né de la nostalgie. Chez moi, en Chine, ma mère avait planté un Ginkgo Biloba devant la maison. Aujourd\'hui, lorsque je vois ses feuilles, je pense à ma mère. ' +
        '<br>Une expression chinoise dit "les feuilles tombent toujours sur les racines",  elle exprime également la nostalgie. </span></p>' +
        '<p><span>Quand je me promène sur les feuilles et sous les arbres, je me demande d\'où viennent ces feuilles. Je les ai ramassé, toutes un peu différentes, et j\'ai rajouté une étiquette à chacunes marquant les coordonnées (latitude, longitude) de l\'arbre dont la feuille est tombée.</span></p></div>',
    data: function () {
        return {
            total: 20,
            index: 1,
        }
    }
});