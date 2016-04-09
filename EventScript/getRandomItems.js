// ItemType : 0 => Item
// ItemType : 1 => Weapon
// ItemType : 2 => Armor
var startNum = $gameVariables.value(32);
var endNum = $gameVariables.value(33);
var range = endNum - startNum;
var id = Math.floor(Math.random() * (range + 1)) + startNum;
var branch = Math.floor(Math.random() * 3);
switch(branch){
	case 0 :
		id = Math.ceil(id/=5);
		$gameParty.gainItem($dataItems[id], 1);
		$gameVariables.setValue(34, $dataItems[id].name);
		break;
	case 1 :
		var x = Math.floor(Math.random() * 8);
		$gameParty.gainItem($dataWeapons[id+x*40], 1, true);
		$gameVariables.setValue(34, $dataWeapons[id+x*40].name);
		break;
	case 2 :
		var x = Math.floor(Math.random() * 3);
		$gameParty.gainItem($dataArmors[id+x*40], 1, true);
		$gameVariables.setValue(34, $dataArmors[id+x*40].name);
		break;
}

// ------------------------------
// イベントスクリプト用
var startNum = $gameVariables.value(32);
var endNum = $gameVariables.value(33);
var range = endNum - startNum;
var id = Math.floor(Math.random() * (range + 1)) + startNum;
var branch = Math.floor(Math.random() * 3);
switch(branch){
case 0 : id = Math.ceil(id/=5); $gameParty.gainItem($dataItems[id], 1); $gameVariables.setValue(34, $dataItems[id].name); break;
case 1 : var x = Math.floor(Math.random() * 8); $gameParty.gainItem($dataWeapons[id+x*40], 1, true); $gameVariables.setValue(34, $dataWeapons[id+x*40].name); break;
case 2 : var x = Math.floor(Math.random() * 3); $gameParty.gainItem($dataArmors[id+x*40], 1, true); $gameVariables.setValue(34, $dataArmors[id+x*40].name); break; }
