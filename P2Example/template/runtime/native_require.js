
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"physics/physics.js",
	"polyfill/promise.js",
	"bin-debug/example/Platformer.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/example/Box.js",
	"bin-debug/example/BoxTest.js",
	"bin-debug/example/Buoyancy.js",
	"bin-debug/example/Car.js",
	"bin-debug/example/Character.js",
	"bin-debug/example/Ice.js",
	"bin-debug/example/Interpolation.js",
	"bin-debug/example/MouseJoint.js",
	"bin-debug/constant/GameConst.js",
	"bin-debug/example/RaycastingD.js",
	"bin-debug/example/Rayreflect.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/scene/ExampleScene.js",
	"bin-debug/scene/GameScene.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/utils/KeyListener.js",
	"bin-debug/utils/p2DebugDraw.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};