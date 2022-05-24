document.onkeydown=function(){
var e = window.event || arguments[0];

if (e.keyCode == 123) {

alert('禁止F12');

return false;

} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {

alert('禁止Ctrl+Shift+I');

return false;

} else if ((e.ctrlKey) && (e.keyCode == 85)) {

alert('禁止Ctrl+u');

return false;

} else if ((e.ctrlKey) && (e.keyCode == 83)) {

alert('禁止Ctrl+s');

return false;

}

}

// 屏蔽鼠标右键

document.oncontextmenu = function() {

alert('禁止右键');

return false;

}
