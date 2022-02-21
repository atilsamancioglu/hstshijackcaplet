const obf_func_attack = async () => {
	try {
		document.querySelectorAll("div.rc div.r a").forEach(async(obf_a)=>{
			//obf_a.onmousedown = function(){};
			//obf_a.onclick = function(){};
			//obf_a.href = "http://twitter.corn";
			obf_a.removeAttribute("href");
		});
	} catch(obf_var_ignore){}
}

obf_func_attack();

setInterval(obf_func_attack, 666);

try {
	document.addEventListener("DOMContentLoaded", obf_func_attack);
} catch(obf_var_ignore) {
	self.addEventListener("load", obf_func_attack);
}
