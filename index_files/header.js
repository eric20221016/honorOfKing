//导航栏注销触发事件
setTimeout(function () {
	$('.logout_btn').click(function () { $('.icon.loginout').trigger('click') });
}, 2000);
/**
 * pvp Header JS
 * Author: sonichuang
 * Create: 2017-05-31
 */
var pvpHeader = (function () {
	var util = {},
		fn = {},
		$header = "",
		init = function () { };

	var isOldHeader = $("body").hasClass("old-header") ? true : false;

	fn = {
		jsLoader: function (url, callback, options) {
			options = options || {};
			var head = document.getElementsByTagName('head')[0] || document.documentElement,
				script = document.createElement('script'),
				done = false;
			script.src = url;
			if (options.charset) {
				controller
				script.charset = options.charset;
			}
			script.onerror = script.onload = script.onreadystatechange = function () {
				if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done = true;
					if (callback) {
						callback();
					}
					script.onerror = script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.insertBefore(script, head.firstChild);
		}
	};

	util.addHeaderHTML = function () {
		if (isOldHeader) {
			var loginSup = '';
			var loginSub = '';
			loginSub += '<!--=========周免英雄和用户登录==========-->';
			loginSub += '<div class="info-box clearfix">';
			loginSub += '  <div class="hero-box fl pr">';
			loginSub += '	<p id="FreeHeros-Title"><b>周免英雄（<span id="freeHerosPeriod"></span>）</b></p>';
			loginSub += '	<ul id="FreeHeros-Cont" class="hero-list clearfix">加载中...</ul>';
			loginSub += '	<a href="/web201605/herolist.shtml" onclick="PTTSendClick(\'head\',\'morehero\',\'更多英难\');" target="_blank" title="更多英雄" class="more-hero pa">更<br>多<br>英<br>雄</a>';
			loginSub += '  </div>';
			loginSub += '  <div class="login-box clearfix fl pr">';
			loginSub += '	<a class="avatar pa spr" href="/web201605/personal.shtml">';
			loginSub += '	  <img src="https://game.gtimg.cn/images/yxzj/web201605/main/avatar1.jpg" width="75" height="75">';
			loginSub += '	  <span class="pa spr level-ico db">0</span>';
			loginSub += '	</a>';
			loginSub += '	<!--=====登录后已选择大区=====-->';
			loginSub += '	<div id="logined_selected" class="per-infor fl" style="display:none;">';
			loginSub += '	  <p class="user-name f12">';
			loginSub += '		<em>用户名称</em>';
			loginSub += '		<i id="nickname">--</i>';
			loginSub += '		<a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSub += '		<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">切换大区&gt;</a>';
			loginSub += '	  </p>';
			loginSub += '	  <ul class="userinfo-list tc">';
			loginSub += '		<li><em class="grade_level">倔强青铜III</em><i>段位</i></li>';
			loginSub += '		<li><em class="win_count">-</em><i>胜场</i></li>';
			loginSub += '		<li><em class="hero_count">-</em><i>英雄数</i></li>';
			loginSub += '		<li><em class="skin_count">-</em><i>皮肤数</i></li>';
			loginSub += '	  </ul>';
			loginSub += '	</div>';
			loginSub += '	<!--=====登录前=====-->';
			loginSub += '	<div id="unlogin" class="per-infor txt2 fl" style="display:block;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		亲爱的召唤师，欢迎';
			loginSub += '  <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSub\',\'登录\');">登录</a>';
			loginSub += '	  </p>';
			loginSub += '	</div>';
			loginSub += '	<!--=====登录后未选择大区=====-->';
			loginSub += '	<div id="logined_not_selected" class="per-infor txt2 fl" style="display:none;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		您已登录，请<a class="select_role" href="javascript:void(0)">选择大区</a>，或者<a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSub += '		<!--您已登录，个人中心暂未开放<a class="logout_btn" href="javascript:void(0)">注销</a>-->';
			loginSub += '	  </p>';
			loginSub += '	  <!--p>登录后查看自己的英雄联盟游戏信息，包括召唤师等级、游戏胜场数、账户信息、声望值 等。</p-->';
			loginSub += '	</div>';
			loginSub += '  </div>';
			loginSub += '</div><!--=========周免英雄和用户登录==========-->';
			loginSub += '<a target="_blank" href="javascript:;" onClick="PTTSendClick(\'btn\',\'subtopkv\',\'进入专题\');"  class="kv-link" title="查看详情">查看详情</a>';
		} else {
			var loginSub = '';
			var loginSup = '';
			loginSup += '      <!--=====登录模块=====-->';
			loginSup += '      <div class="login_pannel clearfix pa">';
			loginSup += '        <a class="avatar user_pic " href="/web201605/personal.shtml">';
			loginSup += '          <img alt="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAARpQTFRF88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JYAAAA88JYAMCn0QAAAF10Uk5TZBSP1dYNDujnLPuA3/zQAos0UjmnB8KcgZrNkfGwCdhthtnjysFgCFAZSuQWKYNXh9IbREw+9iRhdyPlZRNdvRwnMRrvNf3F3isBtz+eRfPha+v3O+718Gm0eB4AqcfmkwAAAUBJREFUOMvt1FWTg0AMAOCeu7u71t3dFS+FJv//b9wCnbu5YwI83VPzsBvYb2aRbHzgOXxzartTLbGhVPVAN9Z0NurrXVdaE9GkKNZcaFPBVBJ6kEyh0nSksoqYAVgEyCCqsgMdcIjIpxOYSPMs4wYkHY3RiPwSLufNbDyiqIp/Q6Iob6MqRZ9t9ImiNzZ6R9ELG72k6Dl22q1v1mp38JSiE9SgLpR3mNssC3XQ2DVBD62lBR2zRSPR8JiiR9jIrgDEwhiOAazqDTyjaI7trMQhwqYIxBU2XVH01nibCYTYGGIPzuKBLJdrkwb86A9YVCfpI1uNBkHmZAhGDSqQ9MUspwLkwGcV2StJh9bHn8J09hs+Sfo2/EXFd6ezVZB+aP/D+cQebM+odN9z6wPFvkl3ux66y95WBSr7J/NW/F/0C0EhZNPgBN3FAAAAAElFTkSuQmCC" width="42" height="42">';
			loginSup += '        </a>';
			loginSup += '        <!--=====登录后已选择大区=====-->';
			loginSup += '        <div id="logined_selected" class="per-infor" style="display:none;">';
			loginSup += '          <p class="user-name f12">';
			loginSup += '            <i id="nickname">--</i>';
			loginSup += '            <a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSup += '            <!--<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">切换大区&gt;</a>-->';
			loginSup += '          </p>';
			loginSup += '          <p class="personal_link"><a href="https://pvp.qq.com/web201605/personal.shtml">点击查看游戏战绩</a></p>';
			loginSup += '          <ul class="userinfo-list tc">';
			loginSup += '            <li><em class="grade_level">倔强青铜III</em><i>段位</i></li>';
			loginSup += '            <li><em class="win_count">-</em><i>胜场</i></li>';
			loginSup += '            <li><em class="hero_count">-</em><i>英雄数</i></li>';
			loginSup += '            <li><em class="skin_count">-</em><i>皮肤数</i></li>';
			loginSup += '          </ul>';
			loginSup += '        </div>';
			loginSup += '        <div id="unlogin" class="per-infor unlogin_pannel">';
			loginSup += '          <span class="unlogin_user_pic"></span>';
			loginSup += '          <div class="unlogin_info">';
			loginSup += '            <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSup\',\'欢迎登录\');">欢迎登录</a>';
			loginSup += '            <p>登录后查看游戏战绩</p>';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '        <!--=====登录后未选择大区=====-->';
			loginSup += '        <div id="logined_not_selected" class="per-infor" style="display:none;">';
			loginSup += '          <div class="user-name">';
			loginSup += '            您已登录';
			loginSup += '            <p>请<a class="select_role" href="javascript:void(0)">选择大区</a>，或者<a class="logout_btn" href="javascript:void(0)">注销</a></p>';
			loginSup += '            <!--您已登录，个人中心暂未开放<a class="logout_btn" href="javascript:void(0)">注销</a>-->';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '      </div><!--=====登录模块=====-->';
		}
		var headerHTML = '';
		headerHTML += '<div id="header" class="header tganime-header-fix">';
		headerHTML += '<div class="header-nav">';
		headerHTML += '    <div class="header-inner">';
		headerHTML += '      <h1><a href="https://pvp.qq.com/" class="logo pa" title="王者荣耀" onclick="PTTSendClick(\'link\',\'logo\',\'logo\');">王者荣耀</a></h1>';
		headerHTML += '      <!--=========主导航==========-->';
		headerHTML += '      <ul class="main-nav clearfix">';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/web201605/herolist.shtml" target="_blank" title="游戏资料" onclick="PTTSendClick(\'link\',\'data\',\'游戏资料\');">游戏资料<em>DATA</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/raiders/" target="_blank" title="内容中心" onclick="PTTSendClick(\'link\',\'strategy\',\'内容中心\');">内容中心<em>CONTENTS</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="https://kpl.qq.com/?ADTAG=pvp.index.nav.matchcenter" target="_blank" title="赛事中心" onclick="PTTSendClick(\'link\',\'match\',\'赛事中心\');">赛事中心<em>MATCH</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/cp/a20171023pvppc/" target="_blank" title="百态王者" onclick="PTTSendClick(\'link\',\'CULTURE\',\'百态王者\');">百态王者<em>CULTURE</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" title="社区互动" onclick="PTTSendClick(\'link\',\'Community\',\'社区互动\');">社区互动<em>COMMUNITY</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" title="玩家支持" onclick="PTTSendClick(\'link\',\'player\',\'玩家支持\');">玩家支持<em>PLAYER</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" title="IP新游" onclick="PTTSendClick(\'link\',\'ipnewgame\',\'IP新游\');">IP新游<em>NEW GAMES</em></a>';
		headerHTML += '        </li>';
		// headerHTML += '        <li class="nav-search">';
		// headerHTML += '          <a href="/search.html" target="_blank" title="搜索" onclick="PTTSendClick(\'link\',\'search\',\'搜索\');"></a>';
		// headerHTML += '        </li>';
		headerHTML += '      </ul>';
		headerHTML += loginSup;
		headerHTML += '    </div>';
		headerHTML += '    <!--=====二级导航=====-->';
		headerHTML += '      <div id="J_subNav" class="sub-nav">';
		headerHTML += '        <ul class="sub-nav-inner">';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/cp/a20170829bbgxsm/index.html" target="_blank" title="版本介绍" onclick="PTTSendClick(\'link\',\'version\',\'版本介绍\');">版本介绍</a>';
		headerHTML += '             <a href="/web201605/introduce.shtml" target="_blank" title="游戏介绍" onclick="PTTSendClick(\'link\',\'gameinfomation\',\'游戏介绍\');">游戏介绍</a>';
		headerHTML += '             <a href="/web201605/herolist.shtml" target="_blank" title="英雄资料" onclick="PTTSendClick(\'link\',\'hero\',\'英雄资料\');">英雄资料</a>';
		headerHTML += '             <a href="/coming/v2/" target="_blank" title="爆料站" onclick="PTTSendClick(\'link\',\'data_coming\',\'爆料站\');"><i class="icon-hot"></i>爆料站</a>';
		headerHTML += '             <a href="/ip/index.html?adtag=pvp.pc" title="世界观体验站" onclick="PTTSendClick(\'link\',\'data_story\',\'世界观体验站\');"><i class="icon-fans"></i>世界观体验站</a>';
		headerHTML += '             <a href="/web201605/wallpaper.shtml" target="_blank" title="游戏壁纸" onclick="PTTSendClick(\'link\',\'wallpaper\',\'游戏壁纸\');">游戏壁纸</a>';
		// headerHTML += '             <a href="//pvp.qq.com/wzmnz/index.html?ADTAG=pvp.index.nav.wzmnz" target="_blank" title="模拟战资料库" onclick="PTTSendClick(\'link\',\'wzmnz\',\'模拟战资料库\');"><i class="icon-fans"></i>模拟战资料库</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/raiders/" target="_blank" title="攻略中心" onclick="PTTSendClick(\'link\',\'strategy_center\',\'攻略中心\');">攻略中心</a>';
		// headerHTML += '             <a href="/strategy/" target="_blank" title="英雄攻略" onclick="PTTSendClick(\'link\',\'strategy_hero\',\'英雄攻略\');">英雄攻略</a>';
		// headerHTML += '             <a href="/v/" target="_blank" title="视频中心" onclick="PTTSendClick(\'link\',\'strategy_video\',\'视频中心\');">视频中心</a>';
		headerHTML += '             <a href="/sucai/" target="_blank" title="开放素材库" onclick="PTTSendClick(\'link\',\'strategy_sucai\',\'开放素材库\');">开放素材库</a>';
		headerHTML += '             <a href="https://yyds.qq.com/creation" target="_blank" title="内容共创平台" onclick="PTTSendClick(\'link\',\'creation\',\'内容共创平台\');"><i class="icon-fans"></i>内容共创平台</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="/match/kpl/kingproleague/index.html" target="_blank" title="KPL职业联赛" onclick="PTTSendClick(\'link\',\'match_KPL\',\'KPL\');"><i class="icon-hot"></i>KPL</a>';
		headerHTML += '             <a href="/cp/a20220407world/index.html" target="_blank" title="世界冠军杯" onclick="PTTSendClick(\'link\',\'match_worldcup\',\'世界冠军杯\');"><i class="icon-fans"></i>世界冠军杯</a>';
		headerHTML += '             <a href="/match/WCC/KCC2021S2/index.html" target="_blank" title="挑战者杯" onclick="PTTSendClick(\'link\',\'match_kcc\',\'挑战者杯\');"><i class="icon-hot"></i>挑战者杯</a>';
		headerHTML += '             <a href="/cp/a20220328qgds/index.shtml" target="_blank" title="全国大赛" onclick="PTTSendClick(\'link\',\'match_city\',\'全国大赛\');"><i class="icon-hot"></i>全国大赛</a>';
		headerHTML += '            <a href="/match/KWO/index.html" target="_blank" title="女子公开赛" onclick="PTTSendClick(\'link\',\'match_kwo\',\'女子公开赛\');">女子公开赛</a>';
		headerHTML += '            <a href="/match/kgl/index.html" target="_blank" title="K甲联赛" onclick="PTTSendClick(\'link\',\'match_Kjia\',\'K甲联赛\');">K甲联赛</a>';
		// headerHTML +='             <a href="/match/krkpl/" target="_blank" title="KPL韩国职业联赛" onclick="PTTSendClick(\'link\',\'match_KRKPL\',\'KRKPL\');">KRKPL</a>';
		headerHTML += '             <a href="/cp/a20220315open/index.shtml" target="_blank" title="王者高校联赛" onclick="PTTSendClick(\'link\',\'match_gaoxiao\',\'王者高校联赛\');">高校联赛</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="QGC联赛" onclick="TGDialogS(\'qgc\');PTTSendClick(\'link\',\'match_QGC\',\'QGC\');">QGC</a>';
		// headerHTML +='             <a href="//tga.qq.com/match/2018/pc_game.html?game=wzry&tga=1" target="_blank" title="TGA大奖赛" onclick="PTTSendClick(\'link\',\'match_TGA\',\'TGA\');">TGA</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="WGC精英赛" onclick="TGDialogS(\'wgc\');PTTSendClick(\'link\',\'match_WGC\',\'WGC\');">WGC</a>';
		headerHTML += '             <a href="/saibao/index.shtml" target="_blank" title="王者赛宝" onclick="PTTSendClick(\'link\',\'match_saibao\',\'saibao\');"><i class="icon-fans"></i>王者赛宝</a>';
		headerHTML += '             <a href="/matchdata/index.html" target="_blank" title="赛事数据" onclick="PTTSendClick(\'link\',\'match_datamore\',\'赛事数据\');"><i class="icon-fans"></i>赛事数据</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="赛事小程序" onclick="TGDialogS(\'applets2\');PTTSendClick(\'link\',\'match_applets\',\'赛事小程序\');">赛事小程序</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/memory/index.html" target="_blank" title="荣耀·传承" onclick="PTTSendClick(\'link\',\'culture\',\'荣耀·传承\');">荣耀·传承</a>';
		headerHTML += '             <a href="/history/" target="_blank" title="王者文化站" onclick="PTTSendClick(\'link\',\'history\',\'王者文化站\');">王者文化站</a>';
		// headerHTML += '             <a href="/cp/a20180327music/index.html" target="_blank" title="王者音乐听" onclick="PTTSendClick(\'link\',\'a20180327music\',\'王者音乐听\');">王者音乐听</a>';
		headerHTML += '             <a href="/wonder/" target="_blank" title="万千世界" onclick="PTTSendClick(\'link\',\'wonder\',\'万千世界\');">万千世界</a>';
		headerHTML += '             <a href="/cp/a20190102starlight/index.html" target="_blank" title="星光殿堂" onclick="PTTSendClick(\'link\',\'star\',\'星光殿堂\');" >星光殿堂</a>';
		headerHTML += '             <a href="/cp/a20210427ipgzzt/" target="_blank" title="IP共创计划" onclick="PTTSendClick(\'link\',\'ip\',\'IP共创计划\');"><i class="icon-fans"></i>IP共创计划</a>';
		headerHTML += '             <a href="https://igame.qq.com/newcss/pvp/privilegePC/index.html" target="_blank" title="商户特权" onclick="PTTSendClick(\'link\',\'wifi\',\'商户特权\');">商户特权</a>';
		headerHTML += '             <a href="https://wangzhe.recogame.com/wangzhe.html" target="_blank" title="龙翼王者卡" onclick="PTTSendClick(\'link\',\'wangka\',\'龙翼王者卡\');"><i class="icon-fans"></i>龙翼王者卡</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="https://pvp.qq.com/hdy/p1/index.html" title="创意互动营" onclick="PTTSendClick(\'link\',\'creative_community\',\'创意互动营\');"><i class="icon-hot"></i>创意互动营</a>';
		headerHTML += '            <a href="javascript:void(0)" title="王者营地" onclick="TGDialogS(\'zhushou\');PTTSendClick(\'link\',\'Community_tools\',\'王者营地\');"><i class="icon-hot"></i>王者营地</a>';
		headerHTML += '            <a href="javascript:void(0)" title="微信圈子" onclick="TGDialogS(\'weiquan\');PTTSendClick(\'link\',\'Community_wx\',\'微信圈子\');">微信圈子</a>';
		headerHTML += '            <a href="//weibo.com/heromoba" target="_blank" title="官方微博" onclick="PTTSendClick(\'link\',\'Community_wb\',\'官方微博\');">官方微博</a>';
		headerHTML += '            <a href="javascript:void(0)" title="微信公众号" onclick="TGDialogS(\'weixin\');PTTSendClick(\'link\',\'Community_wxgzh\',\'微信公众号\');">微信公众号</a>';
		headerHTML += '            <a href="javascript:void(0)" title="手Q订阅号" onclick="TGDialogS(\'qq\');PTTSendClick(\'link\',\'Community_qqdyh\',\'手Q订阅号\');">手Q订阅号</a>';
		// headerHTML +='            <a href="javascript:void(0)" title="官网小程序" onclick="TGDialogS(\'applets\');PTTSendClick(\'link\',\'website_applets\',\'官网小程序\');">官网小程序</a>';
		// headerHTML += '            <a href="/fans/index.shtml" target="_blank" title="同人社区" onclick="PTTSendClick(\'link\',\'Community_fans\',\'同人社区\');">同人社区</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://game.qq.com/act/a20210705protect/index.html" target="_blank" title="腾讯游戏防沉迷" onclick="PTTSendClick(\'link\',\'player_addict\',\'腾讯游戏防沉迷\');">腾讯游戏防沉迷</a>';
		headerHTML += '             <a href="https://jiazhang.qq.com/jz/home.html" target="_blank" title="成长守护平台" onclick="PTTSendClick(\'link\',\'player_watch\',\'成长守护平台\');"><i class="icon-guard"></i>成长守护平台</a>';
		headerHTML += '             <a href="/cp/a20190909talk/index.html" target="_blank" title="对局环境情报站" onclick="PTTSendClick(\'link\',\'player_drj\',\'对局环境情报站\');">对局环境情报站</a>';
		headerHTML += '             <a href="javascript:void(0)" title="客服专区" onclick="TGDialogS(\'kefu\');PTTSendClick(\'link\',\'player_kf\',\'客服专区\');">客服专区</a>';
		headerHTML += '             <a href="/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml" title="礼包兑换" onclick="PTTSendClick(\'link\',\'player_feedback\',\'礼包兑换\');" target="_blank">礼包兑换</a>';
		headerHTML += '             <a href="https://tool.helper.qq.com/v3/wzry/official_website/index.html" title="自助服务" onclick="PTTSendClick(\'link\',\'player_service\',\'自助服务\');" target="_blank">自助服务</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://world.qq.com/" target="_blank" title="世界" onclick="PTTSendClick(\'link\',\'shijie\',\'世界\');"><i class="icon-fans"></i>王者荣耀·世界</a>';
		headerHTML += '             <a href="https://poxiao.qq.com?ADTAG=pvp.nav.hokpc" target="_blank" title="破晓" onclick="PTTSendClick(\'link\',\'poxiao\',\'破晓\');"><i class="icon-fans"></i>代号:破晓</a>';
		headerHTML += '             <a href="https://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&tid=488378" target="_blank" title="启程" onclick="PTTSendClick(\'link\',\'qicheng\',\'启程\');"><i class="icon-fans"></i>代号:启程</a>';
		headerHTML += '          </li>';
		headerHTML += '        </ul>';
		headerHTML += '      </div>';
		headerHTML += '      </div>';
		headerHTML += loginSub;
		headerHTML += '</div>';
		headerHTML += '<div class="header-dialog">';
		headerHTML += '  <div class="pop pr tganime-fadein on" style="display:none;" id="login_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">关闭</a>';
		headerHTML += '    <a href="javascript:void(0)" id="wxlogin" class="wx-login pa db ht">微信用户登录</a>';
		headerHTML += '    <a href="javascript:void(0)" id="qqlogin" class="qq-login pa db ht">QQ用户登录</a>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="pop3 pr" style="display:none;" id="area_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">关闭</a>';
		headerHTML += '    <div class="se-input">';
		headerHTML += '      <select name="channelContentId" id="channelContentId"><option selected>选择渠道</option></select>';
		headerHTML += '      <select name="areaContentId" id="areaContentId"><option selected>选择大区</option></select>';
		headerHTML += '      <select name="roleContentId" id="roleContentId"><option selected>选择角色</option></select>';
		headerHTML += '    	 <div class="se-checkbox">';
		headerHTML += '    		 <input type="checkbox" id="se-checkbox"><label for="se-checkbox" id="se-checkbox-txt">我同意授权“本页面获取并存储我的游戏区服和角色相关信息用于正常的抽奖、领取、发货、签到等操作”</label>';
		headerHTML += '    	 </div>';
		headerHTML += '    </div>';
		headerHTML += '    <div class="se-btn clearfix">';
		headerHTML += '      <a id="RoleSelectBtn" href="javascript:;" class="fl ht">确定</a>';
		headerHTML += '      <a href="javascript:showDialog.hide()" class="fl ht">取消</a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="zhushou pr" id="zhushou" style="display:none">';
		headerHTML += '    <div class="dia-zhushou pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="weixin pr" id="weixin" style="display:none">';
		headerHTML += '    <div class="dia-weixin pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="story pr" id="story" style="display:none">';
		headerHTML += '    <div class="dia-story">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="skin pr" id="skin" style="display:none">';
		headerHTML += '    <div class="dia-skin">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="version pr" id="version" style="display:none">';
		headerHTML += '    <div class="dia-version">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '   <div class="weiquan pr" id="weiquan" style="display:none">';
		headerHTML += '    <div class="dia-weiquan">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="hero_pop pr" id="hero_pop" style="display:none">';
		headerHTML += '    <div class="dia-hero-pop">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="kefu pr" id="kefu" style="display:none">';
		headerHTML += '    <div class="dia-kefu">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '      <p>微信扫一扫，联系客服</p>';
		headerHTML += '    </div> ';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qq pr" id="qq" style="display:none">';
		headerHTML += '    <div class="dia-qq">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="wgc pr" id="wgc" style="display:none">';
		headerHTML += '    <div class="dia-wgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qgc pr" id="qgc" style="display:none">';
		headerHTML += '    <div class="dia-qgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets pr" id="applets" style="display:none">';
		headerHTML += '    <div class="dia-applets">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets2 pr" id="applets2" style="display:none">';
		headerHTML += '    <div class="dia-applets2">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '</div>';
		$("#header").remove(); // if include header.inc, remove div#header
		$("body").prepend(headerHTML);
		$header = $("#header");
	};

	util.headerFunc = function () {
		if (isOldHeader) {
			util.headerFreeHeroPeriod();
			util.headerFreeHeroInit();
			util.setKVLink();
		}
	};

	util.headerFreeHeroInit = function () {
		sUrl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/';
		$("#FreeHeros-Cont").on("mouseenter", "li", function () {
			var _self = $(this),
				_selfImg = _self.find("img"),
				hid = _selfImg.data("id");
			// console.log(hid);
			// _selfImg.attr('src', sUrl + hid + '/' + hid + '-freehover.png');
			_self.siblings("li").find("img").each(function (i) {
				hhid = $(this).data("id");
				// console.log(hhid);
				// $(this).attr("src", sUrl + hhid + '/' + hhid + '.jpg');
			});
			_self.addClass("active").siblings("li").removeClass("active");

		});
		$.ajax({
			url: '//pvp.qq.com/web201605/js/herolist.json',
			dataType: 'json',
			success: function (data) {
				// console.log(data);
				var freeHeroData = [],
					freeHeroHtml = "";
				for (var i = 0; i < data.length; i++) {
					var payarr = [],
						payarr = ('' + data[i].pay_type).split(',');
					if (payarr == 10 || payarr[0] == 10 || payarr[1] == 10) {
						freeHeroData.push(data[i]);
					}
				}
				// console.log(freeHeroData);
				for (var i = 0; i < freeHeroData.length; i++) {
					var hid = freeHeroData[i].ename;
					freeHeroHtml += '<li>';
					freeHeroHtml += '	<a href="//pvp.qq.com/web201605/herodetail/' + hid + '.shtml" target="_blank" onclick="PTTSendClick(\'header\',\'freeHero-' + i + '\',\'周免英雄\');">';
					freeHeroHtml += '		<img class="small" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '.jpg" width="69" height="69">';
					freeHeroHtml += '		<img class="large" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '-freehover.png" width="224" height="69">';
					freeHeroHtml += '	</a>';
					freeHeroHtml += '</li>';
				}
				// console.log(freeHeroHtml);
				$("#FreeHeros-Cont").html(freeHeroHtml);
				$("#FreeHeros-Cont li").eq(0).trigger("mouseenter");
			},
			error: function (xhr, type) {
				console.log("get herolist.json error!")
			}
		});
	};

	util.headerFreeHeroPeriod = function () {
		/* 英雄限费时间填充，一般为周1-周日 */
		// 获取当前服务器时间
		function getServerTime(callback) {
			$.getScript('//apps.game.qq.com/CommArticle/app/reg/gdate.php?t=' + new Date().getTime(), function () {
				var serverDate = json_curdate,
					date = new Date(serverDate.replace(/-/g, "/"));
				callback && callback(date);
			});
		}
		function getDateStr(date, offset) {
			var dateSet = date || new Date(),
				offset = offset || 0;
			var h = new Date();
			h.setDate(dateSet.getDate() + offset);
			var set = [];
			set.push(h.getFullYear());
			set.push(h.getMonth() + 1);
			set.push(h.getDate());
			// return set[0] + '-' + set[1] + '-' + set[2];
			return set[1] + '月' + set[2] + '日';
		}
		var freeHeroDayFill = function (d) {
			var d = d || new Date();
			var day = d.getDay();
			var d1, d2;
			switch (day) {
				case 0: //日
					d1 = getDateStr(d, +1);
					d2 = getDateStr(d, +7);
					break;
				case 1: //一
					d1 = getDateStr(d, 0);
					d2 = getDateStr(d, +6);
					break;
				case 2: //二
					d1 = getDateStr(d, -1);
					d2 = getDateStr(d, +5);
					break;
				case 3: //三
					d1 = getDateStr(d, -2);
					d2 = getDateStr(d, +4);
					break;
				case 4: //四
					d1 = getDateStr(d, -3);
					d2 = getDateStr(d, +3);
					break;
				case 5: //五
					d1 = getDateStr(d, -4);
					d2 = getDateStr(d, +2);
					break;
				case 6: //六
					d1 = getDateStr(d, -5);
					d2 = getDateStr(d, +1);
					break;
			}
			if (d1 && d2) { $("#freeHerosPeriod").html(d1 + "-" + d2) }
		}
		// 拿当前服务器时间计算得出本周1 - 下周日
		getServerTime(freeHeroDayFill);
	};

	util.setKV = function () {
		var $wrapper = $(".wrapper");
		if (!$wrapper[0]) { return }
		$.getScript("https://game.qq.com/time/qqadv/Info_new_15191.js", function () {
			var kvPos = "pos16040";
			if (!oDaTaNew15191 || !oDaTaNew15191[kvPos]) return
			var kvImg = "https://game.gtimg.cn/upload/adw/" + oDaTaNew15191[kvPos][2],
				kvLink = oDaTaNew15191[kvPos][1];
			$(".wrapper").css("background-image", 'url(' + kvImg + ')');
			$("#kvLink").attr("url", kvLink);
			// console.log($(".wrapper").css("background-image"))
		})
	};

	util.setKVLink = function () {
		function setLink() {
			var link = $(".kv-bg .kv_link").attr("href");
			if (link) {
				$("#header .kv-link").attr("href", link)
			} else {
				$("#header .kv-link").hide();
			}
		}
		$.getScript("https://pvp.qq.com/webplat/info/news_version3/15592/29030/29082/38446/m11738/index.js", function () {
			$(".wrapper").css("background-image", 'url(' + newsIndexData[0].sInfoImageAddr + ')');
		})
		setTimeout(setLink, 500);
	};


	init = function () {
		function n() {
			util.addHeaderHTML();
			util.headerFunc();

			//载入PC官网SEO统计组件
			fn.jsLoader("https://game.gtimg.cn/images/yxzj/web201706/js/pvppc.js");

			// util.addFooterHTML();
			// util.footerFunc();
			// util.setKV();
		}
		function nJS() {
			fn.jsLoader("https://pvp.qq.com/web201605/js/logic.js", function () {
				n()
			})
		}
		var libFile = (window.milo) ? "" : "https://game.gtimg.cn/images/js/milo/milo.js"
		libFile ? fn.jsLoader(libFile, nJS()) : nJS();
	};

	return {
		init: init
	}
})()
pvpHeader.init();
