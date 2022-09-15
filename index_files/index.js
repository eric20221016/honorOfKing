/* 英雄id对应中文名 //game.gtimg.cn/images/yxzj/web201706/js/heroid.js ----------------------------------------------------------------------*/
// alert("local2")
/* [AMS] 赛事中心,KPL赛程 ----------------------------------------------------------------------*/
// (function(){
	var G_biz = 18;
	var G_Source = 'web';
	var subClass = '';
	var G_Detail = '../v/detail.shtml';
	var G_Go = '../v/detail.shtml';
	var nDetail = '/web201605/newsDetail.shtml';
	var getUrl = '/webplat/info/news_version3/15592/22661/22664/';
	// var ss = [962, 941, 757, 1384, 752, 753, 1753];  //赛事中心新闻[KPL职业联赛,KCC王者冠军杯,KOC王者全国大赛,王者高校联赛,TGA大赛,QGC联赛,微信游戏邀请赛]
	var matchCenterConf = [
		{   // KPL职业联赛
			'vIDv4': '962',   // 赛事视频V4ID（iType）
			'nIDv4': '193',   // 赛事新闻V4ID（iType）
			'pURLams': '29090/m17643/index.shtml',   // 赛事大图AMS模板地址
			'name': 'KPL',
			'tagId': 2660,
			'channelV4Id': 2598
		},
		{	// KCC王者冠军杯
			'vIDv4': '941',
			'nIDv4': '452',
			'pURLams': '36524/m17643/index.shtml',
			'name': '挑战者杯',
			'tagId': 2661,
			'channelV4Id': 1294
		},
		{	// KPLGT
			'vIDv4': '1756',
			'nIDv4': '574',
			'pURLams': '37661/m17643/index.shtml',
			'name': 'K甲联赛',
			'tagId': 2667,
			'channelV4Id': 2638
		},
		{	// KOC王者全国大赛
			'vIDv4': '5306',
			'nIDv4': '5305',
			'pURLams': '29091/m17643/index.shtml',
			'name': '全国大赛',
			'tagId': 5305,
			'channelV4Id': 5306
		},
		{	// 王者高校联赛
			'vIDv4': '5442',
			'nIDv4': '5337',
			'pURLams': '29095/m17643/index.shtml',
			'name': '高校联赛',
			'tagId': 5337,
			'channelV4Id': 5442
		},
		{	// TGA大赛
			'vIDv4': '752',
			'nIDv4': '317',
			'pURLams': '29092/m17643/index.shtml',
			'name': 'TGA',
			'tagId': 2664,
			'channelV4Id': 681
		},
		// {	// QGC联赛
		// 	'vIDv4': '753',
		// 	'nIDv4': '318',
		// 	'pURLams': '29093/m17643/index.shtml',
		// 	'name': 'QGC',
		// 	'tagId': 2665
		// },
		{	// 微信游戏邀请赛
			'vIDv4': '1753',
			'nIDv4': '571',
			'pURLams': '37481/m17643/index.shtml',
			'name': '微信游戏邀请赛',
			'tagId': 2666,
			'channelV4Id': 2641
		},
		{	// 模拟战大师赛
			'pURLams': '58603/m17643/index.shtml',
			'name': '模拟战大师赛',
			'tagId': 4645,
			'channelV4Id': 4645
		}
	]
	var tagMap = {
		655: { name: '新闻', class: 'type-xinwen' },
		656: { name: '公告', class: 'type-gonggao' },
		1139: { name: '活动', class: 'type-huodong' },
		658: { name: '赛事', class: 'type-saishi' }
	}
	/*
	var urldata = { //ams match news list
		'962': '25563/m16190/index.js',
		'1756': '37660/m16190/index.js',
		'1384': '25332/m15187/index.js',
		'757': '22665/m15187/index.js',
		'752': '22666/m15187/index.js',
		'753': '22667/m15187/index.js',
		'758': '23414/m15187/index.js',
		'941': '36523/m15187/index.js',
		'1753': '37482/m15187/index.js'
	};
		
	var imgurldata = {
		'962': '29090/m17643/index.shtml',
		'1756': '37661/m17643/index.shtml',
		'757': '29091/m17643/index.shtml',
		'752': '29092/m17643/index.shtml',
		'753': '29093/m17643/index.shtml',
		'758': '29094/m17643/index.shtml',
		'1384': '29095/m17643/index.shtml',
		'941': '36524/m17643/index.shtml',
		'1753': '37481/m17643/index.shtml'
	};
	*/
	var order = "sIdxTime" //初始化排序类型;
	var dataHero = {} || [];
	var herolist = {} || [];
	var herolistIds = {} || [];
	var heroJsondata=[];
	var PushData = function (data, num, str, iType) {
		var RetHTML = '';
		var length = data.length > num ? num : data.length;
		for (var x = 0; x < length; x++) {
			RetHTML += '<li class="tganime-fadein-trigger" onclick="PTTSendClick(\'raidersCenter\',\'' + iType + '-video' + x + '\',\'???????????-' + x + '\');' + data[x]['sLog'] + '">';
			RetHTML += '<a href="' + data[x]['sUrl'] + '" target="_blank" onclick="' + data[x]['sLog'] + '" title="' + data[x]['sTitle'] + '">';
			RetHTML += '<img src="' + data[x]['sIMG'] + '" width="173" height="110">';
			RetHTML += '<span class="clearfix play-bar">';
			RetHTML += '<em class="fl ico-play">' + data[x]['iTotalPlay'] + '</em><em class="fr">' + (data[x]['sIdxTime'] ? data[x]['sIdxTime'].substr(0, 10) : data[x]['sIdxTime'].substr(0, 10)) + '</em>';
			RetHTML += '</span>';
			RetHTML += '<span class="video-tit" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</span>';
			RetHTML += '';
			RetHTML += '<div class="mask pa tganime-fadein-child">';
			RetHTML += '<span class="mask-play-ico"></span>';
			RetHTML += '</div></a>';
			RetHTML += '</li>';
		}
		return RetHTML;
	};
	var PushMossData = function (data, num, str, iType) {
		var RetHTML = '';
		var length = data.length > num ? num : data.length;
		for (var x = 0; x < length; x++) {
			RetHTML += '<li class="tganime-fadein-trigger" onclick="PTTSendClick(\'raidersCenter\',\'' + iType + '-video' + x + '\',\'all-英雄视频-' + x + '\');">';
			RetHTML += '<a href="' + data[x].sUrl+ '" target="_blank">';
			RetHTML += '<img src="' + data[x].content_info.sIMG + '" width="173" height="110"/>';
			RetHTML += '<span class="clearfix play-bar">';
			RetHTML += '<em class="fl ico-play">' + data[x].content_info.iTotalPlay + '</em>';
			RetHTML += '</span>';
			RetHTML += '<span class="video-tit" title="' + data[x].content_info.sTitle + '">' + data[x].content_info.sTitle + '</span>';
			RetHTML += '<div class="mask pa tganime-fadein-child">';
			RetHTML += '<span class="mask-play-ico"></span>';
			RetHTML += '</div>';
			RetHTML += '</a>';
			RetHTML += '</li>';
		}
		return RetHTML;
	};
	
	var PushDataMath = function (data, num, str, iType) {
		var RetHTML = '';
		var length = data.length > num ? num : data.length;
		for (var x = 0; x < length; x++) {
			RetHTML += '<li class="tganime-fadein-trigger">';
			RetHTML += '<a href="' + data[x]['sUrl'] + '" target="_blank" onclick="PTTSendClick(\'matchCenter\',\'' + iType + '-video' + x + '\',\'???????????-' + x + '\');' + data[x]['sLog'] + '" title="' + data[x]['sTitle'] + '">';
			RetHTML += '<img src="' + data[x]['sIMG'] + '" width="173" height="110">';
			RetHTML += '<p class="video-tit">' + data[x]['sTitle'] + '</p>';
			RetHTML += '<p class="clearfix play-bar">';
			RetHTML += '<em class="fl ico-play">' + data[x]['iTotalPlay'] + '</em><em class="fr">' + data[x]['sIdxTime'].substr(0, 10) + '</em>';
			RetHTML += '</p>';
			RetHTML += '';
			RetHTML += '<div class="mask pa tganime-fadein-child">';
			RetHTML += '<span class="mask-play-ico db spr"></span>';
			RetHTML += '</div></a>';
			RetHTML += '</li>';
		}
		return RetHTML;
	};
	// 攻略初始化内容插入
	var PushDataUserHero = function (data, num, str, iType) {
		var RetHTML = '';
		var length = data.length > num ? num : data.length;
		for (var x = 0; x < length; x++) {
			RetHTML += '<li class="tganime-fadein-trigger" onclick="' + (iType.indexOf('userhero') == 0 ? ';PTTSendClick(\'raidersCenter\',\'' + iType + '-AIvideo' + x + '\',\'???????????????????-' + (iType[8]) + x + '\');' : ';PTTSendClick(\'raidersCenter\',\'' + iType + '-video' + x + '\',\'???????????-' + x + '\');') + '">';
			RetHTML += '<a  href="' + data[x]['sUrl'] + '" target="_blank" onclick="' + data[x]['sLog'] + '" title="' + data[x]['sTitle'] + '">';
			RetHTML += '<img src="' + data[x]['sIMG'] + '" width="173" height="110">';
			RetHTML += '<span class="clearfix play-bar">';
			RetHTML += '<em class="fl ico-play">' + data[x]['iTotalPlay'] + '</em><em class="fr">' + data[x]['sIdxTime'].substr(0, 10) + '</em>';
			RetHTML += '</span>';
			RetHTML += '<span class="video-tit" title="' + data[x]['sTitle'] + '">' + data[x]['sTitle'] + '</span>';
			RetHTML += '';
			RetHTML += '<div class="mask pa tganime-fadein-child">';
			RetHTML += '<span class="mask-play-ico"></span>';
			RetHTML += '</div></a>';
			RetHTML += '</li>';
		}
		return RetHTML;
	};
	
	var PushDataNews = function (newsDATA) {
		var RetHTML = ''
		for (var x in newsDATA) {
			x == 0 ? RetHTML += '<li class="line-sp">' : RetHTML += ' <li>';
			RetHTML += '<a target="_blank" onclick="PTTSendClick(\'link\',\'' + newsDATA[x]['index'] + '-indexnews' + x + '\',\'新闻中心新闻-' + x + '\');" href="' + newsDATA[x]['sUrl'] + '" class="fl news-txt news-txt1"><span class="news-type ' + newsDATA[x]['typeClass'] + '">' + newsDATA[x]['typeName'] + '</span><span class="news-title">' + newsDATA[x]['sTitle'] + '</span></a>';
			if (x == 0) {
				RetHTML += '<a target="_blank" href="' + newsDATA[x]['sUrl'] + '" class="fl news-txt news-txt1 news_sub_title">' + newsDATA[x]['sDesc'] + '</a>';
			}
			RetHTML += '<em class="fr news-time">' + newsDATA[x]['shortDate'] + '</em>';
			if (x > 7) {
				break;
			}
		}
		return RetHTML;
	}
	
	function makeSign(source) {
		var timestamp = parseInt(+new Date / 1000)
		var source = source
		var serviceId = 18
		var token = '234ce0aef3020cb83887883877b64869'
		var id = 4
		var sign = md5(token + source + serviceId + timestamp)
		return {
			exclusiveChannel: id,
			exclusiveChannelSign: sign,
			time: timestamp
		}
	}
	
	function getV4News() {
		var $news = $('#newsContent').find('.news-list');
		var newsUrl = '//apps.game.qq.com/cmc/cross';
		var channelParams = {
			serviceId: 18,
			filter: 'channel',
			sortby: 'sIdxTime',
			source: 'web_pc',
			limit: 8,
			logic: 'or',
			typeids: '1',
			withtop: 'yes'
		}
		var exclusive = makeSign(channelParams.source)
		channelParams.exclusiveChannel = exclusive.exclusiveChannel
		channelParams.exclusiveChannelSign = exclusive.exclusiveChannelSign
		channelParams.time = exclusive.time
		$news.each(function (index) {
			var channelId = $(this).attr('data-channelid')
			var tagId = $(this).attr('data-tagid')
			var $this = $(this)
			ajaxUrl = newsUrl
			channelParams.chanid = channelId
			$.ajax({
				url: newsUrl,
				dataType: 'json',
				data: channelParams,
				success: function (data) {
					if (data.status == 0) {
						var dataArr = data.data.items
						dataArr = dataArr.slice(0, 8);
						$.each(dataArr, function (i, val) {
							val.sUrl = '/web201706/newsdetail.shtml?tid=' + val.iId
							val.shortDate = val.sIdxTime.substring(5, 7) + '/' + val.sIdxTime.substring(8, 10)
							val.index = i
							if (channelId == 1760) {
								val.typeName = '热门'
								for (var key in tagMap) {
									if (val.sTagIds.indexOf(key) != -1) {
										val.typeName = tagMap[key].name
										val.typeClass = tagMap[key].class
									}
								}
							} else {
								val.typeName = tagMap[tagId].name
								val.typeClass = tagMap[tagId].class
							}
						})
						$this.html(PushDataNews(dataArr));
					} else {
						console.log(data);
					}
				}
			})
		})
	}
	
	// TODO: 开启v4资讯
	getV4News()
	
	//获取攻略中心视频信息
	var LoadSubTypeList = function (iType, iSubType, heroName, type, channelId) {
		if (iSubType == 0) {
			QueryTypeList(function (data) {
				var data = data['newlist' + iType];
				$('#videoList').removeClass('on');
				$('#videoList').html(PushData(data, 8, 'videoindexType', 'new' + iType));
				// $("img.lazy").lazyload();
	
				var fadeTimer = setTimeout(function () {
					$('#videoList').addClass('on');
					clearTimeout(fadeTimer);
				}, 10);
				// console.log("lazyload");
			});
		} else {
			var arr = []
			var exclusive = makeSign('web_pc')
			var url = '//apps.game.qq.com/cmc/cross?serviceId=18&typeids=2&sortby=sIdxTime&tagids=' + channelId + '&limit=8&source=web_pc&filter=tag&logic=or&typeids=2&exclusiveChannel=' + exclusive.exclusiveChannel + '&exclusiveChannelSign=' + exclusive.exclusiveChannelSign + '&time=' + exclusive.time
			$.ajax({
				url: url,
				dataType: 'json',
				success: function (data) {
					if (data.status == 0) {
						var dataArr = data.data.items;
						for (var j = 0; j < dataArr.length; j++) {
							dataArr[j].sUrl = '/v/detail.shtml?G_Biz=18&tid=' + dataArr[j].iId
							if (dataArr[j].iTotalPlay > 10000) {
								dataArr[j].iTotalPlay = (dataArr[j].iTotalPlay / 10000).toFixed(1) + '万';
							}
							arr.push(dataArr[j]);
						}
						var newData = arr.slice(0, 8);
						newData.sort(function (a, b) {
							return new Date(b['sIdxTime']).getTime() - new Date(a['sIdxTime']).getTime()
						})
						$('#matchVideoList').html(PushData(newData, 8, 'videoindexType', 'default'));
						$('#matchVideoList').removeClass('on');
						var fadeTimer = setTimeout(function () {
							$('#matchVideoList').addClass('on');
							clearTimeout(fadeTimer);
						}, 10);
					} else {
						console.log(data);
					}
				}
			})
	
		}
		// alert("lazyload!");
		// $(".lazy").lazyload();
		// setTimeout(function(){ $("img.lazy").lazyload();},1000 )
	};
	
	//加载英雄列表
	function getHeroList(tid, type) {
		$.ajax({
			url: '//pvp.qq.com/web201605/js/herolist.json',
			dataType: 'json',
			success: function (data) {
				dataHero = data;
				heroJsondata=data;
				QueryParentTypeInfo(function (data) {
					QueryTypeInfo(function (typeObj) {
						var RetHTML = '';
						// console.log("typeObj:",typeObj)
						// console.log("herolistIds:",herolistIds);
						// console.log("herolist:",herolist);
						if (tid == 0) {
							for (var j in herolist) {
								for (var i in typeObj) {
									var subType = typeObj[i];
	
									for (var k in subType) {
										if (herolist[j] === subType[k].sName) {
											RetHTML += '<li subType=' + subType[k].iType + '  data-src="moss" onclick="newBeeHeroDataFill.pick(8,\'' + subType[k].sName + '\',' + herolistIds[j] + ');PTTSendClick(\'tab\',\'heroSelect-' + subType[k].iType + '\',\'' + subType[k].sName + '\')">';
											RetHTML += '<a>';
											RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + herolistIds[j] + '/' + herolistIds[j] + '.jpg" width="60px" alt="' + subType[k].sName + '">' + subType[k].sName;
											RetHTML += '</a>';
											RetHTML += '</li>';
										}
									}
								}
							}
							$('#hero_list').html(RetHTML);
							return;
						}
						
						dataHero.reverse()
						for (var y in dataHero) {
							if (dataHero[y].hero_type == type) {
								RetHTML += '<li onclick="newBeeHeroDataFill.pick(8,\'' + dataHero[y].cname + '\',' + dataHero[y].ename + ');PTTSendClick(\'tab\',\'heroSelect-' + dataHero[y].ename + '\',\'' + dataHero[y].cname + '\')">';
								RetHTML += '<a>';
								RetHTML += '<img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/' + dataHero[y].ename + '/' + dataHero[y].ename + '.jpg" width="60px" alt="' + dataHero[y].cname + '">' + dataHero[y].cname;
								RetHTML += '</a>';
								RetHTML += '</li>';
							}
						}
	
						$('#hero_list').html(RetHTML);
					});
				})
			}
		})
	}
	//根据关键词获取视频信息
	var LoadDefaultData = function LoadDefaultData(Page, PageSize, order, Type, TypeId) {
		QuerySearchList(Page, PageSize, order, Type, TypeId, function (data) {
			if (data.status == 0) {
				$('.item_content #videoList').html(PushData(data['msg']['result'], PageSize, 'videosearch' + Type, TypeId));
			} else {
				$('.item_content #videoList').html(data.msg);
			}
			// console.log("lazyload2");
			$("img.lazy").lazyload();
	
			$('#videoList').removeClass('on');
			var fadeTimer = setTimeout(function () {
				$('#videoList').addClass('on');
				clearTimeout(fadeTimer);
			}, 10);
		});
	};
	
	//获取赛事中心分类
	QueryTypeInfo(function (subType) {
		subClass = subType;
		var RetHTML = "";
		var subTypeList = subType['typelist_751'];
	
		// 分类的顺序列有要求,这里按顺序拼 matchCenterConf[i]['vIDv4']
		var ll = (subTypeList.length > matchCenterConf.length) ? matchCenterConf.length : subTypeList.length;
		for (var i = 0; i < ll; i++) {
			RetHTML += '<a href="javascript:;"  onmouseenter="LoadSubTypeList(751,1,1,1,' + matchCenterConf[i]['channelV4Id'] + ');PTTSendClick(\'tab\',\'matchCenter-' + matchCenterConf[i]['channelV4Id'] + '\',\'' + matchCenterConf[i]['name'] + '\');" >' + matchCenterConf[i]['name'] + '</a><span class="split"></span>';
		}
	
		$('#VideoTypeId_751_index').html(RetHTML);
		//视频首页赛事tab切换
		$("#VideoTypeId_751_index a").bind("mouseenter", function () {
			// var num = $(this).attr('subType');
			var num = $('#VideoTypeId_751_index a').index($(this));
			$(this).addClass('on').siblings('a').removeClass('on');
			getMatchNews(num);
		}).eq(0).mouseenter();
		LoadSubTypeList(751, 962, 1, 1, matchCenterConf[0].channelV4Id);
	});
	
	//获取赛事中心新闻
	var getMatchNews = function (index) {
		var RetHTML = '';
		// var dataUrlV4 = 'https://apps.game.qq.com/wmp/v3.1/?p0=18&p1=searchNewsKeywordsList&page=1&pagesize=8&order=sIdxTime&r0=script&r1=NewsObj&type=iTag&id=' +  + '&source=wx_game_news';
		var dataUrlV4 = '//apps.game.qq.com/cmc/cross';
		var params = {
			serviceId: 18,
			filter: 'tag',
			sortby: 'sIdxTime',
			source: 'web_pc',
			limit: 7,
			logic: 'or',
			typeids: '1',
			tagids: matchCenterConf[index]['tagId']
		}
		var exclusive = makeSign(params.source)
		params.exclusiveChannel = exclusive.exclusiveChannel
		params.exclusiveChannelSign = exclusive.exclusiveChannelSign
		params.time = exclusive.time
		$.ajax({
			url: dataUrlV4,
			dataType: 'json',
			data: params,
			success: function (data) {
				var newsDATA = data.data.items;
				// console.log(newsDATA);
				for (var x in newsDATA) {
					x == 0 ? RetHTML += '<li class="line-sp">' : RetHTML += ' <li>';
					RetHTML += '<span class="fl news-type">' + matchCenterConf[index]['name'] + '</span>';
					RetHTML += '<a target="_blank" onclick="PTTSendClick(\'matchCenter\',\'' + index + '-news' + x + '\',\'赛事中心新闻-' + x + '\');" href="' + nDetail + '?G_Biz=' + G_Source + '&tid=' + newsDATA[x]['iId'] + '" class="fl news-txt news-txt1">' + newsDATA[x]['sTitle'] + '</a>';
					if (x == 0) {
						RetHTML += '<a target="_blank" href="' + nDetail + '?G_Biz=' + G_Source + '&tid=' + newsDATA[x]['iId'] + '" class="fl news-txt news-txt1 news_sub_title">' + newsDATA[x]['sDesc'] + '</a>';
					}
					RetHTML += '<em class="fr news-time">' + newsDATA[x]['sIdxTime'].substring(5, 10) + '</em>';
					if (x > 5) {
						break;
					}
				}
				$('#match-center').removeClass('on');
	
				$('.match-list-l').html(RetHTML);
	
				var fadeTimer = setTimeout(function () {
					$('#match-center').addClass('on');
					clearTimeout(fadeTimer);
				}, 10);
			}
		})
		$.get('//pvp.qq.com/webplat/info/news_version3/15592/29030/29082/29089/' + matchCenterConf[index]['pURLams'], function (data) {
			$("#match_news_pic").html(data);
		});
	}
	
	//$('#match_schedule')
	function dateFormat(val) {
		val = val.replace(/-/g, '/');
		var date = new Date(val);
		var month = date.getMonth() + 1 + '-';
		var day = date.getDate() + ' ';
		var hour = date.getHours() + ':';
		var mimute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
		return month + day + hour + mimute;
	}
	
	function sortByDate(a, b) {
		var aTime = a.stime;
		var bTime = b.stime;
		return ((aTime <= bTime) ? -1 : 1);
	}
	
	function getMatchSchedule() {
		var matchScheduleHtml = '';
		var matchId = $('#match_schedule_content').attr('data-matchid')
		$.ajax({
			url: 'https://itea-cdn.qq.com/file/ingame/smoba/matchlivelist' + matchId + '.json',
			dataType: 'json',
			success: function (data) {
				data.matchlist.sort(function (a, b) {
					return new Date(a.stime.replace(/-/g, '/')).getTime() - new Date(b.stime.replace(/-/g, '/')).getTime();
				})
				// data.matchlist && $.each(data.matchlist, function(index, match) {
				// 	match.stime = new Date(match.stime.replace(/-/g, '/')).getTime();
				// })
				// console.log(data.matchlist,'second solution');
				data.matchlist && $.each(data.matchlist, function (index, match) {
					matchScheduleHtml += '<li>';
					matchScheduleHtml += '<span class="' + 'match_time">' + dateFormat(match.stime) + '</span>';
					//$('#match_schedule_content ul').html(matchScheduleHtml);
					matchScheduleHtml += '<span class="' + 'team_name">';
					matchScheduleHtml += '<img src=' + match.alogo + ' ' + 'class="team_name_icon"' + '>'
					matchScheduleHtml += '<em>' + match.teama + '</em>';
					matchScheduleHtml += '</span>';
					matchScheduleHtml += '<span class="' + 'vs">VS</span><span class="team_name">';
					matchScheduleHtml += '<img src=' + match.blogo + ' ' + 'class="team_name_icon"' + '>';
					matchScheduleHtml += '<em>' + match.teamb + '</em>';
					matchScheduleHtml += '</span></li>';
					$('#match_schedule_content ul').html(matchScheduleHtml);
				})
			}
		})
	}
	getMatchSchedule();
	//获取最新视频
	function getNewHeroVideo() {
	
		// pgvSendClick({hottag:'pvp.index.getnewvideo'});
		if (document.cookie.indexOf('PVP_PERSONAL_HERO') > 0) {
			var personHero = document.cookie.split('PVP_PERSONAL_HERO=')[1].split(';')[0].split('_i_');
			var userArr = personHero[0].split('_'),
				userID = personHero[1];
			console.log('[??????ID??]:', userID);
			if (userID % 2 == 1) {
				if (dataHero.length > 0) {
					
				} else {
					getHeroList(1);
				}
			
			}
		}
	}
	
	//获取赛事精品、精品栏目最新
	function getColumNewest(mossid) {
		var iParentId, items;
		if (mossid == 'item1') {
			// items = [2507, 2508, 2132, 2509, 2135, 2510, 2504, 2511, 2512];
			iParentId = 931;
		} else if (mossid == 'item2') {
			items = [4780, 5090];
			// iParentId = 932;
		} else {
			// items = [TypeId]
			items = mossid
		}
		var retNHTML = '';
		var arr = [],
			index = 0;
		// var exclusive = makeSign('web_pc')
		// var url = '//apps.game.qq.com/cmc/cross?serviceId=18&typeids=2&sortby=sIdxTime&tagids=' + items.join(',') + '&limit=8&source=web_pc&filter=tag&logic=or&exclusiveChannel=' + exclusive.exclusiveChannel + '&exclusiveChannelSign=' + exclusive.exclusiveChannelSign + '&time=' + exclusive.time
		var url = 'https://app.ingame.qq.com/gingame/content/content_list_by_channel?game=smoba&ingame_channel_id='+items+'&order=1&src=0&type=2&start=0&num=8';
		$.ajax({
			url: url,
			dataType: 'json',
			success: function (data) {
	
				console.log("内容中心数据：",data);
				if (data.code == 0) {
	
					var dataArr = data.data.content_list;
					for (var j = 0; j < dataArr.length; j++) {
						dataArr[j].sUrl = 'https://pvp.qq.com/v/detail.shtml?G_Biz=18&tid=' + dataArr[j].content_info.srcId;
						if (dataArr[j].content_info.iTotalPlay > 10000) {
							dataArr[j].content_info.iTotalPlay = (dataArr[j].content_info.iTotalPlay/ 10000).toFixed(1) + '万';
						}
						arr.push(dataArr[j]);
					}
					var newData = arr.slice(0, 8);
					$('#videoList').html(PushMossData(newData, 8, 'videoindexType', 'default'));
					// console.log("lazyload6");
					// $("img.lazy").lazyload();
					$('#videoList').removeClass('on');
					var fadeTimer = setTimeout(function () {
						$('#videoList').addClass('on');
						clearTimeout(fadeTimer);
					}, 10);
				} else {
					console.log(data);
				}
			}
		})
	}
	
	function compareTime(a) {
		return parseInt(new Date(Date.parse(a)).getTime());
	}
	// getNewHeroVideo();
	
	
	// 赛事中心 功能初始化
	if (typeof (pgvMain) == 'function') pgvMain();
	var dropdown = $('.dropdown'),
		strategy_list = $('.strategy_center .item_subnav a'),
		strategy_item = $('.strategy_center .item_thirdnav'),
		skin_list = $('.skin_center .item_subnav a'),
		skin_item = $('.skin_center .item_content');
	
	var ss = setTimeout(function () {
		dropdown.hide()
	}, 300);
	$('#item_hero').mouseenter(function () {
		dropdown.show();
	});
	dropdown.bind("mouseenter", function () {
		clearTimeout(ss);
		dropdown.show();
	});
	dropdown.bind("mouseleave", function () {
		// alert("mouseout");
		dropdown.hide();
	});
	
	// 内容中心(精品栏目|赛事精品)-下面的子标签鼠标移入-请求数据
	$("#item_thirdnav0 a,#item_thirdnav1 a").mouseenter(function () {
		$(this).addClass('on').siblings('a').removeClass('on');
		var kid = $(this).attr('data-key');
		var mossid = $(this).attr('data-moss');
		Type = 'iTag';
		TypeId = kid;
		// getColumNewest(TypeId);
		
		getColumNewest(mossid);
	});
	
	// 首页 英难/皮肤 选项卡  mark by sonic 2017-12-08
	function searchItem(navlist, navcontent) {
		navlist.each(function (index, element) {
			var that = $(this);
			that.mouseenter(function () {
				navlist.removeClass("on");
				that.addClass("on");
				$("img.lazy").lazyload();
			})
		})
	}
	// 拉取-内容中心-英雄攻略数据
	function searchItem1(navlist, navcontent) {
		navlist.each(function (index, element) {
			var that = $(this);
			that.mouseenter(function () {
				navlist.removeClass("on");
				that.addClass("on");
				// alert("show: "+index);
	
				navcontent.removeClass('on');
				// $(navcontent[index]) ? $(navcontent[index]).show() : "";
				$(navcontent[index]).addClass('on');
	
				// 如果是英雄攻略
				if (index == 2) {
					newBeeHeroDataFill.pick(8, 'all', 'all');
					dropdown.hide();
				} else {
					// alert("#item_thirdnav"+index+" a")
					console.log(index);
					// 加载内容中心-精品栏目-最新内容
					$("#item_thirdnav" + index + " a").eq(0).mouseenter();
				}
			})
		});
	
		$(document).ready(function () {
			navlist.eq(0).mouseenter();
			$("img.lazy").lazyload();
		})
	}
	searchItem1(strategy_list, strategy_item);
	searchItem(skin_list, skin_item);
	
	
	// 攻略内容按照常用推送
	$(window).load(function () {
		$('#videoList').on('click', 'li', function () {
			var n1 = $('.item_subnav .on').index() / 2,
				n2 = $(this).index();
			PTTSendClick('raidersCenter', 'video' + n1 + n2, '???????????' + n1 + n2);
		});
	
	
		$("#herolist li").bind("mouseenter", function () {
			var tid = $(this).attr('data-id');
			var type = $(this).attr('data-type')
			var n = $(this).index();
			if (tid == 0) {
				//????dz????20???
				getTopHeros(0)
			} else {
				//????????????????
				getHeroList(tid, type);
			}
			PTTSendClick('raidersCenter', 'herolist' + n, '??????' + n);
		})
		getTopHeros(0);
	});
	
	function getTopHeros(tid) {
		var encodeParam = 'E5CB3C064B7A772867B1B552594434FCA26621A002CCB5AF47407E70297E2D6EE7962AC5C4D05234943B0144EDFBDCC4C2A285820C8983E5DE4E22B38EF167CCCA62220D5B3FF8BF83283431B8FF17FB790EDAA0932201873DEC7556F3CFF3AD325B51D6FF5A451618921BA48FF6818B53191FA3C7ED56E51021350FDC66A01CB44BB53178F3C501';
		$.ajax({
			url: '//pvp.ingame.qq.com/php/ingame/smoba/top_heros.php?partition=1119&roleid=90876401&area=1&physicalID=1&algorithm=v2&version=2.14.6a&timestamp=1493112232746&appid=1104466820&sig=11a92c24e8f0d1fc74e31bb8c5203a09&encode=2&msdkEncodeParam=' + encodeParam + '&game=smoba&start=1&num=20&ordertype=1&filter=0&grade=-1&herotype=0&matchtype=2',
			dataType: 'jsonp',
			'success': function (data) {
				var RetHTML = '';
				if (data.status == 'SUCCESS') {
					var hdata = data.data.herolist;
					for (var x in hdata) {
						var hid = hdata[x].heroid;
						if (module_exports[hid] != "") {
							herolist[x] = module_exports[hid];
							herolistIds[x] = hid;
						}
					}
					getHeroList(0);
				}
			}
		})
	}
	
	
	//------------------------------------------- 通过新V4接口取英雄视频/列表 （add by sonic 2018-06-06）-----------
	// LoadSubTypeList(1,638,'孙悟空',0);
	// newBeeHeroDataFill.pick(8,'项羽',135)
	
	var newBeeheroData1 = {},
		newBeeheroData2 = {},
		newbee_hero_list_callback = function () { };
	var newBeeHeroDataFill = (function () {
		var heroName = "",
			heroId = "",
			newBeeheroDataUrl1 = '//gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_NEWBEE_DATA_V1.js',
			newBeeheroDataUrl2 = '//gicp.qq.com/wmp/data/js/v3/WMP_PVP_WEBSITE_DATA_18_VIDEO_V3.js';
		var util = {},
			init = function () { };
	
		// 英雄视频图文接口请求
		util.pickHeroVideo = function (dataNum, roleName, roleId) {
			if (!dataNum || !roleName || !roleId) {
				return
			}
			// heroName = roleName;
			// heroId = roleId;
			var mossId = roleId;
	
			if (!roleId) {
				return;
			}
			if (roleName == 'all') {
				mossId = 3513
			}else{
				for(var i=0;i<heroJsondata.length;i++)	{
					if(heroJsondata[i].ename==mossId){
	
					   mossId=heroJsondata[i].moss_id
					}
	
				}
	
			}
			
			// var exclusive = makeSign('web_pc')
			
			// var url = '//apps.game.qq.com/cmc/cross?serviceId=18&typeids=2&sortby=sIdxTime&tagids=' + tagId + ',619&limit=8&source=web_pc&filter=tag&exclusiveChannel=' + exclusive.exclusiveChannel + '&exclusiveChannelSign=' + exclusive.exclusiveChannelSign + '&time=' + exclusive.time
			var url = 'https://app.ingame.qq.com/gingame/content/content_list_by_channel?game=smoba&ingame_channel_id='+mossId+'&order=1&src=0&type=2&start=0&num=8';
			$.ajax({
				type: 'GET',
				url: url,
				dataType: 'json',
				success: function (data) {
					console.log("英雄攻略数据：",data)
					util.pushDataHeroVideo(data.data.content_list, 8)
				},
				error: function () {
					console.log('get newBeeheroDataUrl1 error!')
				}
			});
		},
	
			// 英雄视频图文取回数据填充
			// util.asetHeroVideoHtml = function (dataNum, roleName, roleId) {
			// 	heroName = roleName;
			// 	heroId = roleId;
	
			// 	// 从第一个接口取两个播放量最高的视频
			// 	var ahtml = newBeeheroData1.video[roleName];
			// 	ahtml.sort(function (a, b) {
			// 		return b.iTotalPlay.substring(0, b.iTotalPlay.length - 1) - a.iTotalPlay.substring(0, a.iTotalPlay.length - 1);
			// 	}) //按播放数重排数组
			// 	ahtml = util.pushDataHeroVideo(ahtml, 2);
			// 	// console.log(ahtml);
	
			// 	// 从第二个接口取 6条进阶功略视频
			// 	var bhtml = newBeeheroData2[roleIdPair[roleId]].jData;
			// 	bbhtml = util.pushDataHeroVideo(bhtml, dataNum - 2);
			// 	// console.log(bhtml);
	
			// 	var chtml = ahtml + bbhtml;
	
			// },
	
			// 拼装英雄视频html
			util.pushDataHeroVideo = function (data, num) {
				console.log("当前英雄视频：",data)
				var RetHTML = '',
					length = data.length > num ? num : data.length;
					var dataArr = data;
					var arr=[];
					for (var j = 0; j < dataArr.length; j++) {
						if (dataArr[j].content_info.iTotalPlay > 10000) {
							dataArr[j].content_info.iTotalPlay = (dataArr[j].content_info.iTotalPlay/ 10000).toFixed(1) + '万';
						}
						arr.push(dataArr[j]);
					}
	
				for (var x = 0; x < length; x++) {
					if (arr[x].content_info.sVID) {
						RetHTML += '<li class="tganime-fadein-trigger" onclick="PTTSendClick(\'raidersCenter\',\'' + heroId + '-video' + ((num > 2) ? x + 2 : x) + '\', \'' + heroName + '-英雄视频' + ((num > 2) ? x + 2 : x) + '\');">';
						RetHTML += '<a href="/v/detail.shtml?G_Biz=' + G_biz + '&tid=' + arr[x].content_info.srcId + '" target="_blank" >';
						RetHTML += '<img src="' + arr[x].content_info.sIMG + '" width="173" height="110">';
						RetHTML += '<span class="clearfix play-bar">';
						// RetHTML += '<em class="fl ico-play">' + data[x].content_info.iTotalPlay + '</em><em class="fr">' + ReloadPubdate('2019-04-15?18:50:00') + '</em>';
						RetHTML += '<em class="fl ico-play">' + arr[x].content_info.iTotalPlay + '</em>';
						RetHTML += '</span>';
						RetHTML += '<span class="video-tit" title="' + arr[x].content_info.sTitle + '">' + arr[x].content_info.sTitle + '</span>';
						RetHTML += '<div class="mask pa tganime-fadein-child">';
						RetHTML += '<span class="mask-play-ico"></span>';
						RetHTML += '</div></a>';
						RetHTML += '</li>';
					} else if (length < 20 && length < arr.length) {
						length = length + 1;
					}
				}
				$('#videoList').html(RetHTML);
				// console.log(chtml);
				// 
				$("#item_thirdnav2 .dropdown").hide();
			}
	
		return {
			pick: function (dataNum, roleName, roleId) {
				util.pickHeroVideo(dataNum, roleName, roleId)
			}
		}
	})();
	//------------------------------------------- 通过新V4接口取英雄视频/列表  End ---------------------------------
	var IndexAni = (function () {
		function Ani(canvasId, option) {
			this.option = option;
			this.canvas = document.getElementById(canvasId);
			this.ctx = this.canvas.getContext('2d');
			this.diamonds = [];
			this.amount = option.amount;
			this.size = 15;
			this.v = option.to - option.from > 0 ? 3 : -3;
			this.padding = 30;
			this.color = {
				r: option.r,
				g: option.g,
				b: option.b
			};
	
			this.start();
		}
	
		Ani.prototype = {
			start: function () {
				var self = this;
	
				for (var i = 0; i < this.amount; i++) {
					var scale = parseFloat(Math.random().toFixed(2)),
						newSize = parseInt(this.size * scale),
						opacity = Math.random().toFixed(2),
						strokeOpacity = Math.random().toFixed(2),
						x = this.canvas.width * Math.random() < this.padding ? this.padding : this.canvas.width *
							Math.random(),
						y = this.canvas.height * Math.random(),
						v = parseFloat((Math.random().toFixed(2) + 1) / 2) * this.v;
	
					if (x > this.canvas.width - this.padding) {
						x = this.canvas.width - this.padding;
					}
	
					if (v > -0.5 && v < 0) {
						v = (1 + v) * -1;
					}
					if (v < 0.5 && v >= 0) {
						v = 1 - v;
					}
	
					var diaObj = {
						size: newSize,
						opacity: opacity,
						strokeOpacity: strokeOpacity,
						x: x,
						y: y,
						v: v,
						color: {
							r: self.color.r,
							g: self.color.g,
							b: self.color.b
						},
						lineColor: {
							r: self.color.r,
							g: self.color.g,
							b: self.color.b
						},
						maxDis: Math.random().toFixed(2) * this.canvas.height
					};
	
					this.diamonds.push(diaObj);
					var newDiamond = new Diamond(diaObj, this.canvas);
				}
	
				var moveTimer = setInterval(function () {
					self.move();
				}, self.option.moveDur);
	
				var createTimer = setInterval(function () {
					self.createNew();
				}, self.option.newDur)
			},
			move: function () {
				var self = this;
	
				self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
				for (var i = 0; i < self.diamonds.length; i++) {
					self.diamonds[i].y = self.diamonds[i].y + self.diamonds[i].v;
					if (self.v > 0 && self.diamonds[i].y > self.diamonds[i].maxDis) {
						self.diamonds.splice(i, 1);
					}
					if (self.v < 0 && self.diamonds[i].y < self.canvas.height - self.diamonds[i].maxDis) {
						self.diamonds.splice(i, 1);
					}
				}
				for (i = 0; i < self.diamonds.length; i++) {
					var newOpa = self.diamonds[i].opacity - 0.001 < 0 ? 1 : self.diamonds[i].strokeOpacity - 0.001,
						newStrokeOpa = self.diamonds[i].strokeOpacity - 0.001 < 0 ? 1 : self.diamonds[i].strokeOpacity;
	
					self.diamonds[i].opacity = newOpa;
					self.diamonds[i].strokeOpacity = newStrokeOpa;
	
					var item = self.diamonds[i];
	
					self.ctx.fillStyle = 'rgba(' + item.color.r + ',' + item.color.g + ',' + item.color.b + ',' +
						item.opacity +
						')';
					self.ctx.beginPath();
					self.ctx.moveTo(item.x, item.y);
					self.ctx.strokeStyle = 'rgba(' + item.lineColor.r + ',' + item.lineColor.g + ',' + item.lineColor
						.b +
						',' +
						item.strokeOpacity +
						')';
					self.ctx.fillRect(item.x, item.y, item.size, item.size);
					self.ctx.strokeRect(item.x, item.y, item.size, item.size);
				}
			},
			createNew: function () {
				var scale = parseFloat(Math.random().toFixed(2)),
					newSize = parseInt(this.size * scale),
					opacity = Math.random().toFixed(2),
					strokeOpacity = Math.random().toFixed(2),
					x = this.canvas.width * Math.random() < 20 ? 20 : this.canvas.width * Math.random(),
					y = this.option.from,
					v = parseFloat((Math.random().toFixed(2) + 1) / 2) * this.v;
	
				if (x > this.canvas.width - 20) {
					x = this.canvas.width - 20;
				}
	
				if (v > -0.5 && v < 0) {
					v = -1 * (1 + v);
				}
	
				if (v < 0.5 && v >= 0) {
					v = 1 - v;
				}
	
				// if(this.canvas.id == 'bottom-canvas') {
				//   console.log(v);
				// }
	
				var diaObj = {
					size: newSize,
					opacity: opacity,
					strokeOpacity: strokeOpacity,
					x: x,
					y: y,
					v: v,
					color: {
						r: this.color.r,
						g: this.color.g,
						b: this.color.b
					},
					lineColor: {
						r: this.color.r,
						g: this.color.g,
						b: this.color.b
					},
					maxDis: Math.random().toFixed(2) * this.canvas.height
				};
	
				this.diamonds.push(diaObj);
				var newDiamond = new Diamond(diaObj, this.canvas);
			}
		}
	
		function Diamond(obj, canvas) {
			this.create(obj, canvas);
		}
	
		Diamond.prototype = {
			create: function (obj, canvas) {
				var ctx = canvas.getContext('2d');
	
				ctx.fillStyle = 'rgba(' + obj.color.r + ',' + obj.color.g + ',' + obj.color.b + ',' + obj.opacity +
					')';
				ctx.beginPath();
				ctx.moveTo(obj.x, obj.y);
				ctx.strokeStyle = 'rgba(' + obj.lineColor.r + ',' + obj.lineColor.g + ',' + obj.lineColor.b + ',' +
					obj.strokeOpacity +
					')';
				ctx.fillRect(obj.x, obj.y, obj.size, obj.size);
				ctx.strokeRect(obj.x, obj.y, obj.size, obj.size);
			}
		}
	
		return {
			init: function (canvasId, option) {
				var newAni = new Ani(canvasId, option);
			}
		}
	})()
		// IndexAni.init('download-canvas', {
		// 	r: 234,
		// 	g: 216,
		// 	b: 103,
		// 	amount: 30,
		// 	from: 0,
		// 	to: 183,
		// 	moveDur: 30,
		// 	newDur: 200
		// });
		// IndexAni.init('bottom-canvas', {
		// 	r: 233,
		// 	g: 233,
		// 	b: 233,
		// 	amount: 300,
		// 	from: 150,
		// 	to: 0,
		// 	moveDur: 30,
		// 	newDur: 40
		// });
	
		// })();
	
	
		// 增加适龄提示弹窗
		$('#shiling').on('click', function(){
			$('#shilingPop').show()
		})
	
		$('#shilingPop .pop-close').on('click', function(){
			$('#shilingPop').hide()
		})