var app=angular.module("giphyGift");app.controller("DashboardCtrl",function(i,h,p,a){i.date=new Date;var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];i.day=r[(new Date).getDay()],i.giphyArr=[],i.giphyArrUrl=[],i.giphyObj=[],i.searchGiphy=function(h){i.urlInput=h,p.getGiphy(h).then(function(h){console.log(h);var p=Math.floor(41*Math.random());i.giph=h[p].images.fixed_height.url,i.giphS=h[p].images.fixed_height_still.url,i.saveGiphy=function(){i.giphyArr.push(i.giphS),i.giphyArrUrl.push(i.giph),i.giphyObj.pic=i.giphS,i.giphyObj.url=i.giph;var h={pic:i.giphS,url:i.giph};i.giphyObj.push(h),console.log(i.giphyObj)}})}});