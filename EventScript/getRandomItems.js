// 使用する変数
// $gameVariables.value(32) : 乱数の開始値;
// $gameVariables.value(33) : 乱数の終了値;
// $gameVariables.value(34) : 取得したアイテムの名前を格納する変数;
// $gameVariables.value(35) : 取得するアイテムの分類ごとに分岐するための変数;

// Items
var itemCount = 8;
var ganreCount = 2;
var startNum = $gameVariables.value(32);
var endNum = $gameVariables.value(33);
var itemMaxCount = $gameVariables.value(36);
var range = endNum - startNum;
var correct = Math.ceil(itemMaxCount / itemCount);
var id = Math.floor(Math.random() * (range / correct + 1)) + startNum;
var x = Math.floor(Math.random() * ganreCount);
var targetId = Math.floor(id + x * itemCount);
$gameParty.gainItem($dataItems[targetId], 1, true);
$gameVariables.setValue(34, $dataItems[targetId].name);

// Weapons
var itemCount = 40;
var ganreCount = 8;
var startNum = $gameVariables.value(32);
var endNum = $gameVariables.value(33);
var itemMaxCount = $gameVariables.value(36);
var range = endNum - startNum;
var correct = Math.ceil(itemMaxCount / itemCount);
var id = Math.floor(Math.random() * (range / correct + 1)) + startNum;
var x = Math.floor(Math.random() * ganreCount);
var targetId = Math.floor(id + x * itemCount);
$gameParty.gainItem($dataWeapons[targetId], 1, true);
$gameVariables.setValue(34, $dataWeapons[targetId].name);

// Armors
var itemCount = 40;
var ganreCount = 2;
var startNum = $gameVariables.value(32);
var endNum = $gameVariables.value(33);
var itemMaxCount = $gameVariables.value(36);
var range = endNum - startNum;
var correct = Math.ceil(itemMaxCount / itemCount);
var id = Math.floor(Math.random() * (range / correct + 1));
var x = Math.floor(Math.random() * ganreCount);
var targetId = Math.floor(id + x * itemCount) + startNum;
$gameParty.gainItem($dataArmors[targetId], 1, true);
$gameVariables.setValue(34, $dataArmors[targetId].name);
