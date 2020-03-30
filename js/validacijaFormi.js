function provera(){
	return korisnickoIme() && proveraSifre() && proveraDatuma();
}

function korisnickoIme(){
	var i = document.forma.korisnicko.value;
	if(i.length>=4 && i.length<=8){
		return true;
	} else{
		alert("Korisničko ime mora da ima najmanje 4 znakova a najvise 8.");
		return false;
	}
}

function proveraSifre(){
			var s = document.forma.sifra.value;
			var malos=0;
			var vels=0;
			var broj=0;
			for(i = 0; i<=s.length; i++){
				if(s.charAt(i)>='a' && s.charAt(i)<='z'){
					malos++;
				} else if(s.charAt(i)>='A' && s.charAt(i)<='Z'){
					vels++;
				} else if(s.charAt(i)>='0' && s.charAt(i)<='9'){
					broj++;
				}
			}
			if(malos==0){
				alert("Mora postojati bar jedno malo slovo.");
				return false;
			}
			if(vels==0){
				alert("Mora postojati bar jedno veliko slovo.");
				return false;
			}
			if(broj==0){
				alert("Mora postojati bar jedan broj.");
				return false;
			}
			return true;
		}
		
function proveraDatuma(){
	var d = document.forma.datum.value;
	var tacka=0;
	var broj=0;
	var ostalo=0;
	if(d.length!=11){
		alert("Datum mora biti oblika: dd.mm.gggg.");
		return false;
	}
	for(var i=0; i<d.length; i++){
		if(i==0 || i==1 || i==3  || i==4 || i==6 || i==7 || i==8 || i==9){
			if(d.charAt(i)>='0' && d.charAt(i)<='9'){
				broj++;
			} else {
				ostalo++;
				alert("Znak na "+(i+1)+". poziciji mora biti broj.");
				return false;
			}
			if(i==0){
				if(d.charAt(i)==0){		
					if(d.charAt(i+1)==0){
						alert("Broj na "+(i+1)+". poziciji ne sme biti 0.");
						return false;
					}		
				} else if(d.charAt(i)>3){
					alert("Broj na 1. poziciji ne moze biti veci od 3.");
					return false;
				} else if(d.charAt(i)==3){
						if(d.charAt(i+1)>1){
							alert("Broj na 2. poziciji u ovom slucaju ne moze biti veci od 1.");
							return false;
						}
				}
			}

			if(i==3){
				if(d.charAt(i)==0){
					if(d.charAt(i+1)==0){
						alert("Broj na 4. i 5. poziciji u isto vreme ne mogu biti 0.");
						return false;
					}
				}
				if(d.charAt(i)>1){
					alert("Broj na 4. poziciji ne moze biti veci od 1.");
					return false;
				} else if(d.charAt(i)==1){
					if(d.charAt(i+1)>2){
						alert("Broj na 5. poziciji u ovom slucaju ne moze biti veci od 2.");
						return false;
					}
				}
			}
			if(i==6){
				if(d.charAt(i)==0){
					alert("Broj na "+(i+1)+". poziciji ne moze biti 0.");
					return false;
				}
				if(d.charAt(i)==1){
					if(d.charAt(i+1)<9){
						alert("U ovom slucaju broj na poziciji "+(i+2)+" mora biti 9.");
						return false;
					}
				}
			}
		}
	
		if(i==2 || i==5 || i==10){
			if(d.charAt(i)=='.'){
				tacka++;
			} else {
				ostalo++;
				alert("Znakovi na "+(i+1)+". poziciji mora biti tacka.");
				return false;
			}
		}
	}
	if(broj==8 && tacka==3){
		return true;
	} else{
		alert("Datum nije ispravan.");
		return false;
	}
}