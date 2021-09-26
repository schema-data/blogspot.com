
var linksub = new Array();
    linksub[0] = "http://ytbrlink.me/TienMobile"; // TIEN MOBILE
    linksub[1] = "http://ytbrlink.me/ThuThuat4G"; // THU THUAT MOBILE
var randomsub = Math.floor(Math.random() *2);
var linkfollow = new Array();
    linkfollow[0] = "https://www.tiktok.com/@thuthuatmobiletv"; // TIEN MOBILE
var randomfol = Math.floor(Math.random() *1);
  
document.getElementById('btn-sub').onclick = function()
     {
   window.open(linksub[randomsub]);
   document.getElementById('kv-dl').style= "display: inherit!important";
   document.getElementById('kv-unl').style= "display: none!important";
     };
document.getElementById('btn-fol').onclick = function()
     {
   window.open(linkfollow[randomfol]);
   document.getElementById('kv-dl').style= "display: inherit!important";
   document.getElementById('kv-unl').style= "display: none!important";
     };
