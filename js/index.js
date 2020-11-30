var typeNub = 5
var art=[
	{src:"./img/y1.png",title:"钢琴"},
	{src:"./img/y2.png",title:"架子鼓"},
	{src:"./img/y3.png",title:"童声合唱团"},
	{src:"./img/y4.png",title:"芭蕾舞"},
	{src:"./img/y5.png",title:"尤克里里"},
	{src:"./img/y6.png",title:"古筝"},
	{src:"./img/y7.png",title:"素描"},
	{src:"./img/y8.png",title:"创意美术"},
	{src:"./img/y9.png",title:"音乐剧"},
	{src:"./img/y10.png",title:"街舞"},
	{src:"./img/y11.png",title:"爵士舞"},
	{src:"./img/y12.png",title:"中国舞"},
	{src:"./img/y13.png",title:"乐团"},
	{src:"./img/y14.png",title:"百老汇大师课"},
	{src:"./img/y15.png",title:"钢琴"},
];
var sport=[
	{src:"./img/t1.png",title:"儿童体智能"},
	{src:"./img/t2.png",title:"儿童体适能"},
	{src:"./img/t3.png",title:"跆拳道"},
	{src:"./img/t4.png",title:"轮滑"},
	{src:"./img/t5.png",title:"围棋"},
];
var culture=[
	{src:"./img/w1.png",title:"英语"},
	{src:"./img/w2.png",title:"口才与表演"},
	{src:"./img/w3.png",title:"国学"},
	{src:"./img/w4.png",title:"硬笔书法"},
	{src:"./img/w5.png",title:"软笔书法"},
	{src:"./img/w6.png",title:"全脑开发"},
	{src:"./img/w7.png",title:"国画"},
	{src:"./img/w8.png",title:"托管"},
	{src:"./img/w9.png",title:"幼小衔接"},
]
var science=[
	{src:"./img/k1.png",title:"机器人编程"},
	{src:"./img/k2.png",title:"无人机"},
	{src:"",title:""},
	{src:"",title:""},
	{src:"",title:""},
]

var showCulture = 0
function showTabart(){
	typeNub = 15
	document.getElementById("art").classList.add("curriculum-choose")
	document.getElementById("art").classList.remove("curriculum-nochoose")
	document.getElementById("sport").classList.remove("curriculum-choose")
	document.getElementById("sport").classList.add("curriculum-nochoose")
	document.getElementById("culture").classList.remove("curriculum-choose")
	document.getElementById("culture").classList.add("curriculum-nochoose")
	document.getElementById("science").classList.remove("curriculum-choose")
	document.getElementById("science").classList.add("curriculum-nochoose")
	var chagesrc = document.getElementById("imageShow").childNodes
	var newChagesrc = []
	for (var i=0;i<chagesrc.length;i++){
		if(chagesrc[i].nodeName !== '#text'){
			 newChagesrc.push(chagesrc[i])
		}
	}
	for (var i=0;i<5;i++ ){
		newChagesrc[i].firstElementChild.src = art[i].src
		 newChagesrc[i].lastElementChild.innerHTML = art[i].title
	}
}
function showTabSport(){
	typeNub = 5
	document.getElementById("sport").classList.add("curriculum-choose")
	document.getElementById("sport").classList.remove("curriculum-nochoose")
	document.getElementById("art").classList.remove("curriculum-choose")
	document.getElementById("art").classList.add("curriculum-nochoose")
	document.getElementById("culture").classList.remove("curriculum-choose")
	document.getElementById("culture").classList.add("curriculum-nochoose")
	document.getElementById("science").classList.remove("curriculum-choose")
	document.getElementById("science").classList.add("curriculum-nochoose")
	var chagesrc = document.getElementById("imageShow").childNodes
	var newChagesrc = []
	for (var i=0;i<chagesrc.length;i++){
		if(chagesrc[i].nodeName !== '#text'){
			 newChagesrc.push(chagesrc[i])
		}
	}
	for (var i=0;i<5;i++ ){
		newChagesrc[i].firstElementChild.src = sport[i].src
		 newChagesrc[i].lastElementChild.innerHTML = sport[i].title
	}
}
function showTabculture(){
	typeNub = 9
	document.getElementById("culture").classList.add("curriculum-choose")
	document.getElementById("culture").classList.remove("curriculum-nochoose")
	document.getElementById("art").classList.remove("curriculum-choose")
	document.getElementById("art").classList.add("curriculum-nochoose")
	document.getElementById("sport").classList.remove("curriculum-choose")
	document.getElementById("sport").classList.add("curriculum-nochoose")
	document.getElementById("science").classList.remove("curriculum-choose")
	document.getElementById("science").classList.add("curriculum-nochoose")
	var chagesrc = document.getElementById("imageShow").childNodes
	var newChagesrc = []
	for (var i=0;i<chagesrc.length;i++){
		if(chagesrc[i].nodeName !== '#text'){
			 newChagesrc.push(chagesrc[i])
		}
	}
	for (var i=0;i<5;i++ ){
		newChagesrc[i].firstElementChild.src = culture[i].src
		 newChagesrc[i].lastElementChild.innerHTML = culture[i].title
	}
}
function showTabscience(){
	typeNub = 2
	document.getElementById("science").classList.add("curriculum-choose")
	document.getElementById("science").classList.remove("curriculum-nochoose")
	document.getElementById("art").classList.remove("curriculum-choose")
	document.getElementById("art").classList.add("curriculum-nochoose")
	document.getElementById("sport").classList.remove("curriculum-choose")
	document.getElementById("sport").classList.add("curriculum-nochoose")
	document.getElementById("culture").classList.remove("curriculum-choose")
	document.getElementById("culture").classList.add("curriculum-nochoose")
	var chagesrc = document.getElementById("imageShow").childNodes
	var newChagesrc = []
	for (var i=0;i<chagesrc.length;i++){
		if(chagesrc[i].nodeName !== '#text'){
			 newChagesrc.push(chagesrc[i])
		}
	}
	for (var i=0;i<5;i++ ){
		newChagesrc[i].firstElementChild.src = science[i].src
		 newChagesrc[i].lastElementChild.innerHTML = science[i].title
	}
}
function showByTabImage(a){
	var chagesrc = document.getElementById("imageShow").childNodes
	var newChagesrc = []
	for (var i=0;i<chagesrc.length;i++){
		if(chagesrc[i].nodeName !== '#text'){
			 newChagesrc.push(chagesrc[i])
		}
	}

	if(typeNub < 6 ){
		console.log("没有其他内容")
	}else if(typeNub == 9){
		if(a>0&showCulture<4){
			showCulture++
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = culture[i+showCulture].src
				newChagesrc[i].lastElementChild.innerHTML = culture[i+showCulture].title
			}
			console.log(showCulture)
		}else if(a<0&showCulture>0){
			showCulture--
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = culture[i+showCulture].src
				 newChagesrc[i].lastElementChild.innerHTML = culture[i+showCulture].title
			}
		}else if(showCulture = 0){
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = culture[i].src
				 newChagesrc[i].lastElementChild.innerHTML = culture[i].title
			}
		}
	}else if(typeNub == 15){
		if(a>0&showCulture<10){
			showCulture++
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = art[i+showCulture].src
				newChagesrc[i].lastElementChild.innerHTML = art[i+showCulture].title
			}
			console.log(showCulture)
		}else if(a<0&showCulture>0){
			showCulture--
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = art[i+showCulture].src
				 newChagesrc[i].lastElementChild.innerHTML = art[i+showCulture].title
			}
		}else if(showCulture = 0){
			for (var i=0;i<5;i++ ){
				newChagesrc[i].firstElementChild.src = art[i].src
				 newChagesrc[i].lastElementChild.innerHTML = art[i].title
			}
		}
	}
	
	
	
}


//
function fnOverp1(){
	document.getElementById("p1").classList.remove("quality-image-div-black")
	document.getElementById("p1").classList.add("new-quality-image-div-black")
	document.getElementById("p1line").classList.add("new-quality-image-div-line")
	document.getElementById("p1line").classList.remove("quality-image-div-line")
	document.getElementById("text1p1").classList.add("new-quality-image-div-text")
	document.getElementById("text1p1").classList.remove("quality-image-div-text")
	document.getElementById("text2p1").classList.add("quality-image-div-text3")
	document.getElementById("text2p1").classList.remove("none")
	document.getElementById("text3p1").classList.add("quality-image-div-text4")
	document.getElementById("text3p1").classList.remove("none")
	document.getElementById("text4p1").classList.add("quality-image-div-text5")
	document.getElementById("text4p1").classList.remove("none")
	document.getElementById("text5p1").classList.add("quality-image-div-text6")
	document.getElementById("text5p1").classList.remove("none")
	document.getElementById("text6p1").classList.add("quality-image-div-text8")
	document.getElementById("text6p1").classList.remove("none")
	document.getElementById("text7p1").classList.add("quality-image-div-text7")
	document.getElementById("text7p1").classList.remove("none")
	document.getElementById("text8p1").classList.add("quality-image-div-text7")
	document.getElementById("text8p1").classList.remove("none")
	
}
function fnOutp1() {
	document.getElementById("p1").classList.add("quality-image-div-black")
	document.getElementById("p1").classList.remove("new-quality-image-div-black")
	document.getElementById("p1line").classList.add("quality-image-div-line")
	document.getElementById("p1line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p1").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p1").classList.add("quality-image-div-text")
	document.getElementById("text2p1").classList.remove("quality-image-div-text3")
	document.getElementById("text2p1").classList.add("none")
	document.getElementById("text3p1").classList.remove("quality-image-div-text4")
	document.getElementById("text3p1").classList.add("none")
	document.getElementById("text4p1").classList.remove("quality-image-div-text5")
	document.getElementById("text4p1").classList.add("none")
	document.getElementById("text5p1").classList.remove("quality-image-div-text6")
	document.getElementById("text5p1").classList.add("none")
	document.getElementById("text6p1").classList.remove("quality-image-div-text8")
	document.getElementById("text6p1").classList.add("none")
	document.getElementById("text7p1").classList.remove("quality-image-div-text7")
	document.getElementById("text7p1").classList.add("none")
	document.getElementById("text8p1").classList.remove("quality-image-div-text7")
	document.getElementById("text8p1").classList.add("none")
}
function fnOverp2(){
	document.getElementById("p2").classList.remove("quality-image-div-black")
	document.getElementById("p2").classList.add("new-quality-image-div-black")
	document.getElementById("p2line").classList.add("new-quality-image-div-line")
	document.getElementById("p2line").classList.remove("quality-image-div-line")
	document.getElementById("text1p2").classList.add("new-quality-image-div-text")
	document.getElementById("text1p2").classList.remove("quality-image-div-text")
	document.getElementById("text2p2").classList.add("quality-image-div-text3")
	document.getElementById("text2p2").classList.remove("none")
	document.getElementById("text3p2").classList.add("quality-image-div-text4")
	document.getElementById("text3p2").classList.remove("none")
	document.getElementById("text4p2").classList.add("quality-image-div-text5")
	document.getElementById("text4p2").classList.remove("none")
	document.getElementById("text5p2").classList.add("quality-image-div-text6")
	document.getElementById("text5p2").classList.remove("none")
	document.getElementById("text6p2").classList.add("quality-image-div-text8")
	document.getElementById("text6p2").classList.remove("none")
	document.getElementById("text7p2").classList.add("quality-image-div-text7")
	document.getElementById("text7p2").classList.remove("none")
	document.getElementById("text8p2").classList.add("quality-image-div-text7")
	document.getElementById("text8p2").classList.remove("none")
	
}
function fnOutp2() {
	document.getElementById("p2").classList.add("quality-image-div-black")
	document.getElementById("p2").classList.remove("new-quality-image-div-black")
	document.getElementById("p2line").classList.add("quality-image-div-line")
	document.getElementById("p2line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p2").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p2").classList.add("quality-image-div-text")
	document.getElementById("text2p2").classList.remove("quality-image-div-text3")
	document.getElementById("text2p2").classList.add("none")
	document.getElementById("text3p2").classList.remove("quality-image-div-text4")
	document.getElementById("text3p2").classList.add("none")
	document.getElementById("text4p2").classList.remove("quality-image-div-text5")
	document.getElementById("text4p2").classList.add("none")
	document.getElementById("text5p2").classList.remove("quality-image-div-text6")
	document.getElementById("text5p2").classList.add("none")
	document.getElementById("text6p2").classList.remove("quality-image-div-text8")
	document.getElementById("text6p2").classList.add("none")
	document.getElementById("text7p2").classList.remove("quality-image-div-text7")
	document.getElementById("text7p2").classList.add("none")
	document.getElementById("text8p2").classList.remove("quality-image-div-text7")
	document.getElementById("text8p2").classList.add("none")
}
function fnOverp3(){
	document.getElementById("p3").classList.remove("quality-image-div-black")
	document.getElementById("p3").classList.add("new-quality-image-div-black")
	document.getElementById("p3line").classList.add("new-quality-image-div-line")
	document.getElementById("p3line").classList.remove("quality-image-div-line")
	document.getElementById("text1p3").classList.add("new-quality-image-div-text")
	document.getElementById("text1p3").classList.remove("quality-image-div-text")
	document.getElementById("text2p3").classList.add("quality-image-div-text3")
	document.getElementById("text2p3").classList.remove("none")
	document.getElementById("text3p3").classList.add("quality-image-div-text4")
	document.getElementById("text3p3").classList.remove("none")
	document.getElementById("text4p3").classList.add("quality-image-div-text5")
	document.getElementById("text4p3").classList.remove("none")
	document.getElementById("text5p3").classList.add("quality-image-div-text6")
	document.getElementById("text5p3").classList.remove("none")
	document.getElementById("text6p3").classList.add("quality-image-div-text8")
	document.getElementById("text6p3").classList.remove("none")
	document.getElementById("text7p3").classList.add("quality-image-div-text7")
	document.getElementById("text7p3").classList.remove("none")
	document.getElementById("text8p3").classList.add("quality-image-div-text7")
	document.getElementById("text8p3").classList.remove("none")
	
}
function fnOutp3() {
	document.getElementById("p3").classList.add("quality-image-div-black")
	document.getElementById("p3").classList.remove("new-quality-image-div-black")
	document.getElementById("p3line").classList.add("quality-image-div-line")
	document.getElementById("p3line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p3").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p3").classList.add("quality-image-div-text")
	document.getElementById("text2p3").classList.remove("quality-image-div-text3")
	document.getElementById("text2p3").classList.add("none")
	document.getElementById("text3p3").classList.remove("quality-image-div-text4")
	document.getElementById("text3p3").classList.add("none")
	document.getElementById("text4p3").classList.remove("quality-image-div-text5")
	document.getElementById("text4p3").classList.add("none")
	document.getElementById("text5p3").classList.remove("quality-image-div-text6")
	document.getElementById("text5p3").classList.add("none")
	document.getElementById("text6p3").classList.remove("quality-image-div-text8")
	document.getElementById("text6p3").classList.add("none")
	document.getElementById("text7p3").classList.remove("quality-image-div-text7")
	document.getElementById("text7p3").classList.add("none")
	document.getElementById("text8p3").classList.remove("quality-image-div-text7")
	document.getElementById("text8p3").classList.add("none")
}
function fnOverp4(){
	document.getElementById("p4").classList.remove("quality-image-div-black")
	document.getElementById("p4").classList.add("new-quality-image-div-black")
	document.getElementById("p4line").classList.add("new-quality-image-div-line")
	document.getElementById("p4line").classList.remove("quality-image-div-line")
	document.getElementById("text1p4").classList.add("new-quality-image-div-text")
	document.getElementById("text1p4").classList.remove("quality-image-div-text")
	document.getElementById("text2p4").classList.add("quality-image-div-text3")
	document.getElementById("text2p4").classList.remove("none")
	document.getElementById("text3p4").classList.add("quality-image-div-text4")
	document.getElementById("text3p4").classList.remove("none")
	document.getElementById("text4p4").classList.add("quality-image-div-text5")
	document.getElementById("text4p4").classList.remove("none")
	document.getElementById("text5p4").classList.add("quality-image-div-text6")
	document.getElementById("text5p4").classList.remove("none")
	document.getElementById("text6p4").classList.add("quality-image-div-text8")
	document.getElementById("text6p4").classList.remove("none")
	document.getElementById("text7p4").classList.add("quality-image-div-text7")
	document.getElementById("text7p4").classList.remove("none")
	document.getElementById("text8p4").classList.add("quality-image-div-text7")
	document.getElementById("text8p4").classList.remove("none")
	
}
function fnOutp4() {
	document.getElementById("p4").classList.add("quality-image-div-black")
	document.getElementById("p4").classList.remove("new-quality-image-div-black")
	document.getElementById("p4line").classList.add("quality-image-div-line")
	document.getElementById("p4line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p4").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p4").classList.add("quality-image-div-text")
	document.getElementById("text2p4").classList.remove("quality-image-div-text3")
	document.getElementById("text2p4").classList.add("none")
	document.getElementById("text3p4").classList.remove("quality-image-div-text4")
	document.getElementById("text3p4").classList.add("none")
	document.getElementById("text4p4").classList.remove("quality-image-div-text5")
	document.getElementById("text4p4").classList.add("none")
	document.getElementById("text5p4").classList.remove("quality-image-div-text6")
	document.getElementById("text5p4").classList.add("none")
	document.getElementById("text6p4").classList.remove("quality-image-div-text8")
	document.getElementById("text6p4").classList.add("none")
	document.getElementById("text7p4").classList.remove("quality-image-div-text7")
	document.getElementById("text7p4").classList.add("none")
	document.getElementById("text8p4").classList.remove("quality-image-div-text7")
	document.getElementById("text8p4").classList.add("none")
}
function fnOverp5(){
	document.getElementById("p5").classList.remove("quality-image-div-black")
	document.getElementById("p5").classList.add("new-quality-image-div-black")
	document.getElementById("p5line").classList.add("new-quality-image-div-line")
	document.getElementById("p5line").classList.remove("quality-image-div-line")
	document.getElementById("text1p5").classList.add("new-quality-image-div-text")
	document.getElementById("text1p5").classList.remove("quality-image-div-text")
	document.getElementById("text2p5").classList.add("quality-image-div-text3")
	document.getElementById("text2p5").classList.remove("none")
	document.getElementById("text3p5").classList.add("quality-image-div-text4")
	document.getElementById("text3p5").classList.remove("none")
	document.getElementById("text4p5").classList.add("quality-image-div-text5")
	document.getElementById("text4p5").classList.remove("none")
	document.getElementById("text5p5").classList.add("quality-image-div-text6")
	document.getElementById("text5p5").classList.remove("none")
	document.getElementById("text6p5").classList.add("quality-image-div-text8")
	document.getElementById("text6p5").classList.remove("none")
	document.getElementById("text7p5").classList.add("quality-image-div-text7")
	document.getElementById("text7p5").classList.remove("none")
	document.getElementById("text8p5").classList.add("quality-image-div-text7")
	document.getElementById("text8p5").classList.remove("none")
	
}
function fnOutp5() {
	document.getElementById("p5").classList.add("quality-image-div-black")
	document.getElementById("p5").classList.remove("new-quality-image-div-black")
	document.getElementById("p5line").classList.add("quality-image-div-line")
	document.getElementById("p5line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p5").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p5").classList.add("quality-image-div-text")
	document.getElementById("text2p5").classList.remove("quality-image-div-text3")
	document.getElementById("text2p5").classList.add("none")
	document.getElementById("text3p5").classList.remove("quality-image-div-text4")
	document.getElementById("text3p5").classList.add("none")
	document.getElementById("text4p5").classList.remove("quality-image-div-text5")
	document.getElementById("text4p5").classList.add("none")
	document.getElementById("text5p5").classList.remove("quality-image-div-text6")
	document.getElementById("text5p5").classList.add("none")
	document.getElementById("text6p5").classList.remove("quality-image-div-text8")
	document.getElementById("text6p5").classList.add("none")
	document.getElementById("text7p5").classList.remove("quality-image-div-text7")
	document.getElementById("text7p5").classList.add("none")
	document.getElementById("text8p5").classList.remove("quality-image-div-text7")
	document.getElementById("text8p5").classList.add("none")
}
function fnOverp6(){
	document.getElementById("p6").classList.remove("quality-image-div-black")
	document.getElementById("p6").classList.add("new-quality-image-div-black")
	document.getElementById("p6line").classList.add("new-quality-image-div-line")
	document.getElementById("p6line").classList.remove("quality-image-div-line")
	document.getElementById("text1p6").classList.add("new-quality-image-div-text")
	document.getElementById("text1p6").classList.remove("quality-image-div-text")
	document.getElementById("text2p6").classList.add("quality-image-div-text3")
	document.getElementById("text2p6").classList.remove("none")
	document.getElementById("text3p6").classList.add("quality-image-div-text4")
	document.getElementById("text3p6").classList.remove("none")
	document.getElementById("text4p6").classList.add("quality-image-div-text5")
	document.getElementById("text4p6").classList.remove("none")
	document.getElementById("text5p6").classList.add("quality-image-div-text6")
	document.getElementById("text5p6").classList.remove("none")
	document.getElementById("text6p6").classList.add("quality-image-div-text8")
	document.getElementById("text6p6").classList.remove("none")
	document.getElementById("text7p6").classList.add("quality-image-div-text7")
	document.getElementById("text7p6").classList.remove("none")
	document.getElementById("text8p6").classList.add("quality-image-div-text7")
	document.getElementById("text8p6").classList.remove("none")
	
}
function fnOutp6() {
	document.getElementById("p6").classList.add("quality-image-div-black")
	document.getElementById("p6").classList.remove("new-quality-image-div-black")
	document.getElementById("p6line").classList.add("quality-image-div-line")
	document.getElementById("p6line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p6").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p6").classList.add("quality-image-div-text")
	document.getElementById("text2p6").classList.remove("quality-image-div-text3")
	document.getElementById("text2p6").classList.add("none")
	document.getElementById("text3p6").classList.remove("quality-image-div-text4")
	document.getElementById("text3p6").classList.add("none")
	document.getElementById("text4p6").classList.remove("quality-image-div-text5")
	document.getElementById("text4p6").classList.add("none")
	document.getElementById("text5p6").classList.remove("quality-image-div-text6")
	document.getElementById("text5p6").classList.add("none")
	document.getElementById("text6p6").classList.remove("quality-image-div-text8")
	document.getElementById("text6p6").classList.add("none")
	document.getElementById("text7p6").classList.remove("quality-image-div-text7")
	document.getElementById("text7p6").classList.add("none")
	document.getElementById("text8p6").classList.remove("quality-image-div-text7")
	document.getElementById("text8p6").classList.add("none")
}
function fnOverp7(){
	document.getElementById("p7").classList.remove("quality-image-div-black")
	document.getElementById("p7").classList.add("new-quality-image-div-black")
	document.getElementById("p7line").classList.add("new-quality-image-div-line")
	document.getElementById("p7line").classList.remove("quality-image-div-line")
	document.getElementById("text1p7").classList.add("new-quality-image-div-text")
	document.getElementById("text1p7").classList.remove("quality-image-div-text")
	document.getElementById("text2p7").classList.add("quality-image-div-text3")
	document.getElementById("text2p7").classList.remove("none")
	document.getElementById("text3p7").classList.add("quality-image-div-text4")
	document.getElementById("text3p7").classList.remove("none")
	document.getElementById("text4p7").classList.add("quality-image-div-text5")
	document.getElementById("text4p7").classList.remove("none")
	document.getElementById("text5p7").classList.add("quality-image-div-text6")
	document.getElementById("text5p7").classList.remove("none")
	document.getElementById("text6p7").classList.add("quality-image-div-text8")
	document.getElementById("text6p7").classList.remove("none")
	document.getElementById("text7p7").classList.add("quality-image-div-text7")
	document.getElementById("text7p7").classList.remove("none")
	document.getElementById("text8p7").classList.add("quality-image-div-text7")
	document.getElementById("text8p7").classList.remove("none")
	
}
function fnOutp7() {
	document.getElementById("p7").classList.add("quality-image-div-black")
	document.getElementById("p7").classList.remove("new-quality-image-div-black")
	document.getElementById("p7line").classList.add("quality-image-div-line")
	document.getElementById("p7line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p7").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p7").classList.add("quality-image-div-text")
	document.getElementById("text2p7").classList.remove("quality-image-div-text3")
	document.getElementById("text2p7").classList.add("none")
	document.getElementById("text3p7").classList.remove("quality-image-div-text4")
	document.getElementById("text3p7").classList.add("none")
	document.getElementById("text4p7").classList.remove("quality-image-div-text5")
	document.getElementById("text4p7").classList.add("none")
	document.getElementById("text5p7").classList.remove("quality-image-div-text6")
	document.getElementById("text5p7").classList.add("none")
	document.getElementById("text6p7").classList.remove("quality-image-div-text8")
	document.getElementById("text6p7").classList.add("none")
	document.getElementById("text7p7").classList.remove("quality-image-div-text7")
	document.getElementById("text7p7").classList.add("none")
	document.getElementById("text8p7").classList.remove("quality-image-div-text7")
	document.getElementById("text8p7").classList.add("none")
}
function fnOverp8(){
	document.getElementById("p8").classList.remove("quality-image-div-black")
	document.getElementById("p8").classList.add("new-quality-image-div-black")
	document.getElementById("p8line").classList.add("new-quality-image-div-line")
	document.getElementById("p8line").classList.remove("quality-image-div-line")
	document.getElementById("text1p8").classList.add("new-quality-image-div-text")
	document.getElementById("text1p8").classList.remove("quality-image-div-text")
	document.getElementById("text2p8").classList.add("quality-image-div-text3")
	document.getElementById("text2p8").classList.remove("none")
	document.getElementById("text3p8").classList.add("quality-image-div-text4")
	document.getElementById("text3p8").classList.remove("none")
	document.getElementById("text4p8").classList.add("quality-image-div-text5")
	document.getElementById("text4p8").classList.remove("none")
	document.getElementById("text5p8").classList.add("quality-image-div-text6")
	document.getElementById("text5p8").classList.remove("none")
	document.getElementById("text6p8").classList.add("quality-image-div-text8")
	document.getElementById("text6p8").classList.remove("none")
	document.getElementById("text7p8").classList.add("quality-image-div-text7")
	document.getElementById("text7p8").classList.remove("none")
	document.getElementById("text8p8").classList.add("quality-image-div-text7")
	document.getElementById("text8p8").classList.remove("none")
	
}
function fnOutp8() {
	document.getElementById("p8").classList.add("quality-image-div-black")
	document.getElementById("p8").classList.remove("new-quality-image-div-black")
	document.getElementById("p8line").classList.add("quality-image-div-line")
	document.getElementById("p8line").classList.remove("new-quality-image-div-line")
	document.getElementById("text1p8").classList.remove("new-quality-image-div-text")
	document.getElementById("text1p8").classList.add("quality-image-div-text")
	document.getElementById("text2p8").classList.remove("quality-image-div-text3")
	document.getElementById("text2p8").classList.add("none")
	document.getElementById("text3p8").classList.remove("quality-image-div-text4")
	document.getElementById("text3p8").classList.add("none")
	document.getElementById("text4p8").classList.remove("quality-image-div-text5")
	document.getElementById("text4p8").classList.add("none")
	document.getElementById("text5p8").classList.remove("quality-image-div-text6")
	document.getElementById("text5p8").classList.add("none")
	document.getElementById("text6p8").classList.remove("quality-image-div-text8")
	document.getElementById("text6p8").classList.add("none")
	document.getElementById("text7p8").classList.remove("quality-image-div-text7")
	document.getElementById("text7p8").classList.add("none")
	document.getElementById("text8p8").classList.remove("quality-image-div-text7")
	document.getElementById("text8p8").classList.add("none")
}


//

function fnOverbg1(){
	document.getElementById("bg4").classList.add("none")
	document.getElementById("bg4").classList.remove("serve-bg-item")
	document.getElementById("bg1").classList.remove("none")
	document.getElementById("bg1").classList.add("serve-bg-item")
	document.getElementById("blacksrc").src="./img/black1.png"
	document.getElementById("small1").src="./img/1choose.png"
	document.getElementById("small4").src="./img/4small.png"
	document.getElementById("small5").src="img/5small.png"
	document.getElementById("bg5").classList.add("none")
	document.getElementById("bg5").classList.remove("serve-bg-item")
	document.getElementById("small2").src="./img/2small.png"
	document.getElementById("bg2").classList.add("none")
	document.getElementById("bg2").classList.remove("serve-bg-item")
	document.getElementById("small3").src="./img/3small.png"
	document.getElementById("bg3").classList.add("none")
	document.getElementById("bg3").classList.remove("serve-bg-item")
}
function fnOverbg2(){
	document.getElementById("bg4").classList.add("none")
	document.getElementById("bg4").classList.remove("serve-bg-item")
	document.getElementById("bg2").classList.remove("none")
	document.getElementById("bg2").classList.add("serve-bg-item")
	document.getElementById("blacksrc").src="./img/black2.png"
	document.getElementById("small2").src="./img/2choose.png"
	document.getElementById("small4").src="./img/4small.png"
	document.getElementById("small5").src="./img/5small.png"
	document.getElementById("bg5").classList.add("none")
	document.getElementById("bg5").classList.remove("serve-bg-item")
	document.getElementById("small1").src="./img/1small.png"
	document.getElementById("bg1").classList.add("none")
	document.getElementById("bg1").classList.remove("serve-bg-item")
	document.getElementById("small3").src="./img/3small.png"
	document.getElementById("bg3").classList.add("none")
	document.getElementById("bg3").classList.remove("serve-bg-item")
}
function fnOverbg3(){
	document.getElementById("bg4").classList.add("none")
	document.getElementById("bg4").classList.remove("serve-bg-item")
	document.getElementById("bg3").classList.remove("none")
	document.getElementById("bg3").classList.add("serve-bg-item")
	document.getElementById("blacksrc").src="./img/black3.png"
	document.getElementById("small3").src="./img/3choose.png"
	document.getElementById("small4").src="./img/4small.png"
	document.getElementById("small5").src="./img/5small.png"
	document.getElementById("bg5").classList.add("none")
	document.getElementById("bg5").classList.remove("serve-bg-item")
	document.getElementById("small1").src="./img/1small.png"
	document.getElementById("bg1").classList.add("none")
	document.getElementById("bg1").classList.remove("serve-bg-item")
	document.getElementById("small2").src="./img/2small.png"
	document.getElementById("bg2").classList.add("none")
	document.getElementById("bg2").classList.remove("serve-bg-item")
}
function fnOverbg4(){
	document.getElementById("bg3").classList.add("none")
	document.getElementById("bg3").classList.remove("serve-bg-item")
	document.getElementById("bg4").classList.remove("none")
	document.getElementById("bg4").classList.add("serve-bg-item")
	document.getElementById("blacksrc").src="./img/black4.png"
	document.getElementById("small4").src="./img/4choose.png"
	document.getElementById("small3").src="./img/3small.png"
	document.getElementById("small5").src="./img/5small.png"
	document.getElementById("bg5").classList.add("none")
	document.getElementById("bg5").classList.remove("serve-bg-item")
	document.getElementById("small1").src="./img/1small.png"
	document.getElementById("bg1").classList.add("none")
	document.getElementById("bg1").classList.remove("serve-bg-item")
	document.getElementById("small2").src="./img/2small.png"
	document.getElementById("bg2").classList.add("none")
	document.getElementById("bg2").classList.remove("serve-bg-item")
}
function fnOverbg5(){
	document.getElementById("bg3").classList.add("none")
	document.getElementById("bg3").classList.remove("serve-bg-item")
	document.getElementById("bg5").classList.remove("none")
	document.getElementById("bg5").classList.add("serve-bg-item")
	document.getElementById("blacksrc").src="./img/black5.png"
	document.getElementById("small5").src="./img/5choose.png"
	document.getElementById("small3").src="./img/3small.png"
	document.getElementById("small4").src="./img/4small.png"
	document.getElementById("bg4").classList.add("none")
	document.getElementById("bg4").classList.remove("serve-bg-item")
	document.getElementById("small1").src="./img/1small.png"
	document.getElementById("bg1").classList.add("none")
	document.getElementById("bg1").classList.remove("serve-bg-item")
	document.getElementById("small2").src="./img/2small.png"
	document.getElementById("bg2").classList.add("none")
	document.getElementById("bg2").classList.remove("serve-bg-item")
}