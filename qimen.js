function showRunyue(obj) {
	if (obj.value == "NongLi") {
		$("#runyuespan").show();
	} else {
		$("#runyuespan").hide();
	}
}
function showManual(obj) {
	if (obj.value == "Manual") {
		$("#manual_span").show();
	} else {
		$("#manual_span").hide();
	}
}

function showTaiyang(obj) {
	if (obj.checked) {
		$("#ab").show();
	} else {
		$("#ab").hide();
	}
}

function changeMode(obj) {
	if (obj.value == "1") {
		$("#div_region").css("display", "inline");
		$("#div_jingdu").hide();
	} else {
		$("#div_region").hide();
		$("#div_jingdu").css("display", "inline");
	}
}

function check(){
	var taiYang = document.getElementById("taiyang").checked;
	if (taiYang) {
		var i = document.getElementById("jingdu").value;
		if (i != "") {
			var reg = /^(\-|\+)?\d+(\.\d+)?$/;
			if (!reg.test(i)) {
				alert("åªè½è¾å¥æ­£æ°ï¼è´æ°æå°æ°ï¼");
				document.getElementById("jingdu").value = "";
				return false;
			}
			if (i < -180 || i > 180) {
				alert("ç»åº¦å¼éè¯¯ï¼");
				return;
			}
		}
	}
	return true;
}
