var elTitle = document.querySelector('.title')
var elInp =document.querySelector('.inp')
var elBtn = document.querySelector('.btn')

// borish kelish samalyot bileti = 500$
// mehmonhona tolovi(toliq safar davomiyligi uchun) = 250$
// muzey va kongilochar joylar uchun = 120 yevro
// 1$ = 11000 so'm      
// 1 yevro = 13000 so'm
// jami $ - 11000(500+250)=11000*750= 8 250 000 so'm  
// jami yevro - 13 000*120= 1 560 000 so'm
// umumiy miqdor(so'mda) - 9 810 000+

var sm = 11000 * 500
var hotel = 11000 * 250
var mk = 13000 * 120
var price = sm + hotel + mk

elBtn.addEventListener('click', function() {
    if(elInp.value >= price ) {
        elTitle.textContent = "You have enough money for travel"}
    else {
        elTitle.textContent = "You Haven't Got Enough Money For Travel! (min-9 810 000) You  Must To Work A lot... "
    }
})