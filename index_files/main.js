/**
 * pvp Page JS
 * Editor: sonichuang
 * Modify: 2017-06-07
 */

/* ҳ�潻�� ----------------------------------------------------------------------*/
(function () {

	//tab�л�
	need("biz.tabs", function (tabs) {
		tabs.init("newsTab", "news-list", { event: "mouseover" });
	})

	//�ֲ����
	var gets = {
		tag: function (p, o) {
			return document.getElementById(p).getElementsByTagName(o);
		}
	};
	//�ֲ� promo
	var t = 0;
	; (function () {
		var test = new tgAds({
			ggID: '15191'//��д�ֲ����������Ƶ��ID("Ƶ������"-"Ƶ��ID")
			, info: ['16040', '16041', '16042', '16043', '16044']//info��ֵֻ��1����ʽ��ֱ����д��Ҫ���⼸֡�Ĺ��λID�����д��6��7�����λID������ʵ��ֻ��3��4�����λ�й�棬���ᱨ�����Զ�����
			, box: 'ggBox'//��д���ù���div��ID
			//���²������ǿ�ѡ���ɲ���ɺ��ԣ�������~~~~
			, pgv: 'index.adsRolling.ad'// ,pgv:'mainAd'
			// [��ѡ����]pgv����2����ʽ����ͨ�����orPPT�����������ͨ�����'index.adsRolling.ad'��������ƣ���Ż��Զ��ӣ�eg��һ֡��:'index.adsRolling.ad1' |||||| PTT�����'mainAd'����������ƣ���Ż��Զ��ӣ����Զ��ϱ�:PTTSendClick('adRoll','mainAd1','�ֲ����1')
			, callBack: function () { }//[��ѡ����]�ڹ��׼����Ϻ����еĻص����������綯̬���ƹ�水ť�Ŀ���
			, auto: true//[��ѡ����]�ƶ��˽�ֹ�Զ������������Ӵ������trueΪ��ʱ�Զ�����
			, mouse: true//[��ѡ����,�����������ɾ������]��trueΪ��꾭��С��ť������ҳ��falseΪ���С��ť������ҳ��Ĭ��Ϊ�������������ǵ����������Ȼ�ε��ۻ�
		});
	})();
	//ͷ������
	function topNews() { var o; for (var i = 1; i < 6; i++) { o = g("newsList" + i).getElementsByTagName("li"); if (o && o.length >= 1) { o[0].className = "line-sp" } } }; topNews();

	// ����Ӣ�ۡ����Ƥ�� ������� add by sonic 2017-08-28
	var newHeroNewSkinFill = function () {
		loadScript("//game.qq.com/time/qqadv/Info_new_15719.js", function () {
			// alert("Info_new_15719")
			function fillData(id, data) {
				if (!id || !data) { return }
				console.log(data);
				var html = '<a href="' + data[1] + '" target="_blank" onclick="PTTSendClick(\'link\',\'new-hero-main\',\'����Ӣ��-��ͼ\');EAS.ADClick(this)"><img width="295" height="156" src="//game.gtimg.cn/upload/adw/' + data[2] + '"/></a>'
				html += '<div class="new_hero_bottom">';
				html += '   	<p class="new_hero_name">' + decodeURI(data[0]) + '</p>';
				html += '	<p>����ʱ�䣺' + data[10].substr(0, 10) + '</p>';
				html += '</div>';
				// alert(html)
				$(id).html(html);
			}

			if (oDaTaNew15719) {
				var newsHeroId = "pos" + $("#newHeroItem").attr("data-tgId");
				var newsSkinId = "pos" + $("#newSkinItem").attr("data-tgId");
				fillData("#newHeroItem", oDaTaNew15719[newsHeroId]);
				fillData("#newSkinItem", oDaTaNew15719[newsSkinId]);
			}
		});
	}();


	/* Ӣ���޷�ʱ����䣬һ��Ϊ��1-���� add by sonic 2017-06-01 */
	// ��ȡ��ǰ������ʱ��
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
		return set[0] + '-' + set[1] + '-' + set[2];
	}
	var freeHeroDayFill = function (d) {
		var d = d || new Date();
		var day = d.getDay();
		var d1, d2;
		switch (day) {
			case 0: //��
				d1 = getDateStr(d, +1);
				d2 = getDateStr(d, +7);
				break;
			case 1: //һ
				d1 = getDateStr(d, 0);
				d2 = getDateStr(d, +6);
				break;
			case 2: //��
				d1 = getDateStr(d, -1);
				d2 = getDateStr(d, +5);
				break;
			case 3: //��
				d1 = getDateStr(d, -2);
				d2 = getDateStr(d, +4);
				break;
			case 4: //��
				d1 = getDateStr(d, -3);
				d2 = getDateStr(d, +3);
				break;
			case 5: //��
				d1 = getDateStr(d, -4);
				d2 = getDateStr(d, +2);
				break;
			case 6: //��
				d1 = getDateStr(d, -5);
				d2 = getDateStr(d, +1);
				break;
		}
		if (d1) { $("#freeDayBegin").html(d1) }
		if (d2) { $("#freeDayEnd").html(d2) }
	}
	// �õ�ǰ������ʱ�����ó�����1 - ������
	getServerTime(freeHeroDayFill);

	//�������2��������㴦��
	//$(".quick_entrance a").eq(1).bind("click",function(){
	//	TGDialogS('zhushou');
	//	return false;
	//})
})();


// ���µ���
(function () {
	function createChannel(wrapId, cid, width, height) {
		$.getScript("//game.gtimg.cn/images/js/swfobject.js", function () {
			$.getScript("//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_jq.js", function () {
				var video = new tvp.VideoInfo();
				video.setChannelId(cid);
				var player = new tvp.Player();
				player.create({
					width: width,
					height: height,
					type: 1,
					video: video,
					modId: wrapId,
					autoplay: true
				});
			})
		})
	}

	function dragVideo() {
		var box = document.getElementById('videoSpop');
		box.onmousedown = function (event) {
			var e = event || window.event,
				t = e.target || e.srcElement,
				x1 = e.clientX,
				y1 = e.clientY,
				dragLeft = this.offsetLeft,
				dragTop = this.offsetTop;
			document.onmousemove = function (event) {
				var e = event || window.event,
					t = e.target || e.srcElement,
					x2 = e.clientX,
					y2 = e.clientY,
					x = x2 - x1,
					y = y2 - y1;
				box.style.left = (dragLeft + x) + 'px';
				box.style.top = (dragTop + y) + 'px';
			}
			document.onmouseup = function () {
				this.onmousemove = null;
			}
		}
	}

	function popVideo() {
		$("#video_pop").css("background", "url(" + popData.img + ") no-repeat 0 0");
		createChannel("mod_player", cid, '100%', 490);
		setTimeout(function () {
			TGDialogS('video_pop');
		}, 500);
	}
	if (typeof popData === 'object') {
		var cid = popData.vid,
			num = popData.num,
			showpop,
			showflag = false;
		if (cid !== '0') {
			if (num == '1') {
				var mvShowed = JSON.parse(localStorage.getItem('mvshowflag'));
				if (!mvShowed || (mvShowed && +new Date().getTime() - mvShowed.expire > 1000 * 60 * 60 * 24)) {
					popVideo();
					localStorage.setItem('mvshowflag', JSON.stringify({ 'show': true, 'expire': new Date().getTime() }));
				}
			} else {
				popVideo();
			}
		}
	}
	$(".pop-video-small").on("click", function () {
		$("#videoSpop").show();
		$(".pop-video").hide();
		$("#_overlay_").hide();
		$("#mod_player").html("");
		createChannel("vpop", cid, 420, 260);
	})
	$(".clspop").on("click", function () {
		$("#vpop").html("");
		$("#videoSpop").hide();
		$("#video_pop,#_overlay_").hide();
	});

	// ֱ��dialog�ز���������JS����
	$(".pop-video-close").on("click", function () {
		$("#video_pop,#_overlay_").hide();
		$("#video_pop").remove();
	});

})();
