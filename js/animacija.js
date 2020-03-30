var animacija, cS, cD;
var pozicija, brzina;

function pokreni(){
	c = document.getElementById("Canvas");
	animacija=document.getElementById("anim");
	ctx = c.getContext("2d");
	cS = c.width;
	cD = c.height;
	pozicija=0;
	brzina=1;
	setInterval(crtaj, 10);
	
}

function crtaj(){
		pozadina();
		luk();
		smajliFejs();
		if(animacija.checked){
			slika();
		}
}


function pozadina(){
	ctx.fillStyle = "#7CFC00";
	ctx.fillRect(0,0,cS,cD);
}

function luk() {
	ctx.beginPath();
	ctx.arc(600,1000,900,0,2*Math.PI);
	ctx.fillStyle="#4B0082";
	ctx.fill();
	ctx.closePath();
}

function smajliFejs(){	
	//krug
	ctx.beginPath();
	ctx.arc(70/100*cS,80/100*cD,40,0,2*Math.PI);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(67/100*cS,77/100*cD,4,0,2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(73/100*cS,77/100*cD,4,0,2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.arc(70/100*cS,82/100*cD,20,0,Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
}

function slika() {
	var sl=document.getElementById("mikrofon");
	ctx.drawImage(sl,pozicija,0);
	pozicija++;
	if(pozicija>cS){
		pozicija=-150;
	}
}