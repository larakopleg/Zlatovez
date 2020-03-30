var trenutno;

function inicijalizuj(){
	trenutno="on";
	var deloviMeni=document.querySelectorAll(".meniDeo");
	
	for(var i=0; i<deloviMeni.length; i++){
		deloviMeni[i].onmouseenter=prikaziPodmeni;
		deloviMeni[i].onmouseleave=sakrijPodmeni;
		if(deloviMeni[i].parentElement.getAttribute("divID")){
			deloviMeni[i].onclick=otvoriStranu;
		}
	}
}

function prikaziPodmeni(){
	var podmeni=this.querySelector(".podmeni");
	if(podmeni){
		podmeni.style.display="inline";
	}
}

function sakrijPodmeni(){
	var podmeni=this.querySelector(".podmeni");
	if(podmeni){
		podmeni.style.display="none";
	}
}

function otvoriStranu(){
	var elSak=document.getElementById(trenutno);
	elSak.style.display="none";
	var divId=this.parentElement.getAttribute("divID");
	var el=document.getElementById(divId);
	el.style.display="block";
	trenutno=divId;
}

function god(){
	var godina=document.getElementById("opcije").value;
}