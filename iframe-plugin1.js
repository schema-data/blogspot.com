var linksub = new Array();
    linksub[0] = "http://ytbrlink.me/TienMobile"; // TienMobile
    linksub[1] = "http://ytbrlink.me/ThuThuat4G"; // ThuThuatMobile
var randomsub = Math.floor(Math.random() *2);
var linkfollow = new Array();
    linkfollow[0] = "https://www.tiktok.com/@thuthuatmobiletv"; // ThuThuatMobile
    linkfollow[1] = "https://www.tiktok.com/@thuvienphim"; // ThuvienPhim
var randomfol = Math.floor(Math.random() *2);
  
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
