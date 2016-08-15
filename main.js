/**
 * Created by Administrator on 2014/12/26.
 */
window.onload = function(){
    document.addEventListener('WeixinJSBridgeReady',
        function onBridgeReady() {
            cc.game.onStart = function(){
                var mode = cc.sys.isMobile? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;
                cc.view.setDesignResolutionSize(640,960,mode);
                cc.view.resizeWithBrowserSize(true);
                cc.view.enableAutoFullScreen(true);
//                  var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.FIXED_HEIGHT : cc.sys.isMobile ? cc.ResolutionPolicy.FIXED_WIDTH : cc.ResolutionPolicy.SHOW_ALL;
//                  cc.view.setDesignResolutionSize(640, 831, mode);
                //load resources
                MyLoaderScene.preload(g_resources, function () {
                    cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
                    cc.spriteFrameCache.addSpriteFrames(res.cowPlist_plist,res.cowPlist_png);
                    cc.director.runScene(new PlayingScene());
                }, this);
            };
            cc.game.run("gameCanvas");
        });

//    cc.game.onStart = function(){
//
//        var mode = cc.sys.isMobile? cc.ResolutionPolicy.EXACT_FIT : cc.ResolutionPolicy.SHOW_ALL;
//        cc.view.setDesignResolutionSize(640,960,mode);
//        cc.view.resizeWithBrowserSize(true);
//        cc.view.enableAutoFullScreen(true);
////                  var mode = cc.sys.isMobile && window.navigator.userAgent.indexOf("MicroMessenger") != -1 ? cc.ResolutionPolicy.FIXED_HEIGHT : cc.sys.isMobile ? cc.ResolutionPolicy.FIXED_WIDTH : cc.ResolutionPolicy.SHOW_ALL;
////                  cc.view.setDesignResolutionSize(640, 831, mode);
//        //load resources
//        MyLoaderScene.preload(g_resources, function () {
//            cc.spriteFrameCache.addSpriteFrames(res.allPicPlist_plist,res.allPicPlist_png);
//            cc.spriteFrameCache.addSpriteFrames(res.cowPlist_plist,res.cowPlist_png);
//            cc.director.runScene(new PlayingScene());
//        }, this);
//    };
//    cc.game.run("gameCanvas");
};