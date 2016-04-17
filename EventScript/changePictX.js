// イベントスクリプト用
var id = $gameVariables.value(15)
var dir = "l"
var face = $gameVariables.value(16)
var actor = "actor" + id + "_" + dir + "_" + face
var directory = "actor" + id + "/" + "left"
var file = directory + "/" + actor
var x = $gameVariables.value(12)
var y = $gameVariables.value(14)
$gameScreen.showPicture(1, file, 1, x, y, 
85, 85, 255, 0);
