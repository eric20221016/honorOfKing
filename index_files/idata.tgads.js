//rukkihuang 2018-12-28  ����ptt��https�汾
//2019-4-9  update �Զ��嵥֡����ڵ�dom
//���
var tgAds=function(obj)
{
	this.info=obj.info;
	this.pics=[];
	this.imgs=[];
	this.btns=[];
	this.adsInfo=[];//��common��force��ץ���Ĺ�洢�浽����
	this.now=0;
	this.adBtnBox=null;
	this.box=document.getElementById(obj.box);
	this.autoRun=null;
	this.onBtns=false;
	if(obj.pgv) this.pgv=obj.pgv;
	this.ggID=obj.ggID;
	this.ing=true;
	this.mouse=obj.mouse;
	if(obj.noUrl) this.noUrl=true;
	else this.noUrl=false;
	if(obj.alertInfo) this.alertInfo=obj.alertInfo;
	else this.alertInfo=false;
	if(obj.callBack) this.callBack=obj.callBack;
	else this.callBack=function(){};
	//�ƶ���
	this.pUl=null;
	this.dist=0;
	this.xAll=0;
	this.yAll=0;
	if(typeof(obj.auto)=='undefined'||obj.auto) this.auto=true;
	else this.auto=false;
	//�ͻ��ˣ�
	this.ua=false;//false��PC true���ƶ���
	//�Ƿ���Ҫ�л���һҳ��һҳ��Ŀǰֻ�����ƶ���
	//console.log(this.noUrl)
	//run
	tgAds.loadjs('//ossweb-img.qq.com/images/clientpop/idata_ad/idata_ad_'+obj.ggID+'.js',this.letsGo,this)
};
tgAds.loadjs=function(url,succ,v)
{
	var elem=document.createElement("script"),lnk="src",tp="text/javascript",charset="utf-8";
	elem.setAttribute(lnk,url);elem.setAttribute("type",tp);elem.setAttribute("charset",charset);document.body.appendChild(elem);
	if((navigator.userAgent.indexOf('MSIE')==-1)?false:true)
	{
		elem.onreadystatechange=function()
		{
			if(this.readyState&&this.readyState=="loading") return;else succ(v);
		};
	}
	else elem.onload=function(){succ(v);};elem.onerror=function(){};
};
tgAds.process=function(gAds,id,ggID){
	var ad=false;
	if(gAds.force[id]) ad=gAds.force[id];
	else if(gAds.common[id]) ad=gAds.common[id];
	else console.log('û�������λ��ID:��'+id+'��������ȷ�Ϲ��λID��ȷ���������¼�');
	if(ad!=false) ad={adUrl:ad.adUrl,imgUrl:ad.imgUrl,Fname:ad.Fname,id:id,adId:ad.adId,ecode:ad.ecode,ggID:ggID};
	return ad;
};
tgAds.eas=function(thisAd,type){//idΪ���λID��typeΪ�عⷽʽ��1�ǵ����2���ع�
	var easImg=new Image(),tNow=new Date().getTime();
	var easUrl='https://logs.game.qq.com/easnew/go/eas.php?m=SendLog&show_ads='+thisAd.ggID+'.'+thisAd.id+'.'+thisAd.adId+'.'+thisAd.ecode+'&ad_url='+encodeURIComponent(thisAd.adUrl)+'&click_type='+type+'&t='+tNow;
	easImg.src=easUrl;
	//console.log(easUrl);
	if(type==2)console.log('iData�����ܼҹ��λ��ID:'+thisAd.id+'������ϱ�');
	if(type==1)console.log('iData�����ܼҹ��λ��ID:'+thisAd.id+'���ع��ϱ�');
};
tgAds.prototype.setClick=function(adshow,info,n){
	var that=this;
	adshow.onclick=function(){
		//window.open(that.info[n].adUrl);
		tgAds.eas(info,2);
		if(that.pgv) {
			try{
				if(typeof(setSite)!='undefined') {
					PTTSendClick('adRoll',that.pgv+(n+1),'�ֲ����'+(n+1));
				}
				else{
					pgvSendClick({hottag:that.pgv+(n+1)});
				}
			}catch(e){
				console.log('��㱨��tcss����PTTδ����Ŷ~')
			}
		}
	}
};
//PC
tgAds.prototype.innerPC=function()
{
	var box1=document.createElement('div');
	box1.className='adPic';
	this.adBtnBox=document.createElement('div');
	this.adBtnBox.className='adBtn';
	for(var i=0;i<this.info.length;i++)
	{
		var gA=document.createElement('a');
		gA.title=this.info[i].Fname;
		this.setClick(gA,this.info[i],i);
		if(!this.noUrl){
			gA.href=this.info[i].adUrl;
			gA.target='_blank';
		}
		if(this.alertInfo) {
			gA.href='javascript:alert("'+this.alertInfo+'")';
			gA.removeAttribute('target');
		}
		i==0?gA.style.left='0':gA.style.left='100%';
		var gP=document.createElement('img');
		if(i<2) gP.src=this.info[i].imgUrl;
		else
		{
			gP.setAttribute('rel',this.info[i].imgUrl);
			var gL=document.createElement('p');
			gL.innerHTML='<span class="loadI">'+decodeURIComponent('%E6%AD%A3%E5%9C%A8%E5%8A%A0%E8%BD%BD%E4%B8%AD%E2%80%A6%E2%80%A6')+'</span>';
			gA.appendChild(gL);
		}
		var gB=document.createElement('a');
		gB.title=this.info[i].Fname;
		gB.href='javascript:void(0)';
		gB.innerText=this.info[i].Fname;
		this.rollFnCtr(gB,i);
		gB.hideFocus="true";
		gA.appendChild(gP);
		box1.appendChild(gA);
		this.adBtnBox.appendChild(gB);
		this.pics.push(gA);
		this.btns.push(gB);
		this.imgs.push(gP);
		tgAds.eas(this.info[i],1);
	}
	if(i>0){
		this.btns[this.now].className='on';
	}
	this.box.appendChild(box1);
	this.box.appendChild(this.adBtnBox);
	if(i>1){
		var obj=this;
		obj.autoRun=setTimeout(function(){obj.rollFn(obj.now+1);obj.stopFn();},4000)
		obj.box.onmouseover=function(){obj.stopFn();obj.onBtns=true;};
		obj.box.onmouseout=function(){obj.autoRun=setTimeout(function(){obj.rollFn(obj.now+1);obj.stopFn();},4000);obj.onBtns=false};
	}
	else this.adBtnBox.style.display='none';
	this.callBack();
}
tgAds.prototype.rollFn=function(n)
{
	if(this.now==n) return;
	if(n==this.info.length) n=0;
	if(n<0) n=this.info.length-1;
	this.imgs[n].src==''&&(this.imgs[n].src=this.imgs[n].getAttribute('rel'));
	if(n>this.now)
	{
		for(var i=this.now+1; i<n;i++){this.pics[i].style.left='-100%';}
		this.goLeft(this.pics[this.now],this.pics[n],n)
	}
	else
	{
		for(var i=n+1;i<this.now;i++){this.pics[i].style.left='100%';}
		this.goRight(this.pics[this.now],this.pics[n],n)
	}
	for(var i=0;i<this.btns.length;i++){this.btns[i].className='';}
	this.btns[n].className='on';
}
tgAds.prototype.goLeft=function(e1,e2,n)
{
	e1.style.left=0;
	e2.style.left='100%';
	this.ing=false;
	var times=10,obj=this;
	(function(){
		e1.style.left=(times-11)*10+'%';
		e2.style.left=(times-1)*10+'%';
		times--;
		if(times>0) setTimeout(arguments.callee,15)
		else
		{
			obj.now=n;
			if(obj.autoRun===null&&obj.onBtns!=true) obj.autoRun=setTimeout(function(){obj.rollFn(obj.now+1);obj.stopFn();},4000)
			obj.ing=true;
		}
	})()
}
tgAds.prototype.goRight=function(e1,e2,n)
{
	e1.style.left=0;
	e2.style.left='-100%';
	this.ing=false;
	var times=10,obj=this;
	(function(){
		e1.style.left=(11-times)*10+'%';
		e2.style.left=-(times-1)*10+'%';
		times--;
		if(times>0) setTimeout(arguments.callee,15)
		else
		{
			obj.now=n;
			if(obj.autoRun===null&&obj.onBtns!=true) obj.autoRun=setTimeout(function(){obj.rollFn(obj.now+1);obj.stopFn();},4000)
			obj.ing=true;
		}
	})()
}
tgAds.prototype.stopFn=function()
{
	clearTimeout(this.autoRun);
	this.autoRun=null;
}
tgAds.prototype.rollFnCtr=function(e,n)
{
	var obj=this;
	if(obj.mouse)
	{
		e.onmouseover=function()
		{
			if(!obj.ing) return;
			obj.rollFn(n-0);
			obj.stopFn();
		}
	}
	else
	{
		e.onclick=function()
		{
			if(!obj.ing) return;
			obj.rollFn(n-0);
			obj.stopFn();
		}
	}	
}
//�ƶ���
tgAds.prototype.start=function()
{
	if(!event.touches.length){return;}
	this.moveW=0;
	this.x=event.touches[0].pageX;
	this.y=event.touches[0].pageY;
	this.xAll=0;
	this.yAll=0;
	this.stopFnM();
	this.drbr=null;
}
tgAds.prototype.move=function()
{
	if(!event.touches.length){return;}
	this.xAll+=Math.abs(event.touches[0].pageX-this.x);
	this.yAll+=Math.abs(event.touches[0].pageY-this.y);
	if(this.drbr==null){
		if(this.xAll>this.yAll*0.6){
			this.drbr=true;
		}
		else this.drbr=false;
	}
	if(this.drbr){
		event.preventDefault();
		this.moveW=event.touches[0].pageX-this.x;
		this.pUl.style.webkitTransform='translateX('+(this.dist+this.moveW)+'px)';
	}
	else{
		this.moveW=0;
		this.pUl.style.webkitTransform='translateX('+(this.dist+this.moveW)+'px)';
	}
};
tgAds.prototype.end=function()
{
	this.playFnM();
	if(this.drbr) {
		if (this.lastW && this.lastW == this.moveW) return
		else this.lastW = this.moveW;
		if (this.moveW < 0 && this.now < this.info.length - 1) {
			this.now++;
		}
		if (this.moveW > 0) {
			this.now = this.now == 0 ? 0 : this.now - 1
		}
	}
	this.rollFnM(this.now);
};
tgAds.prototype.rollFnM=function(n){
	this.liW=this.pics[0].offsetWidth;
	this.now=n;
	if(this.now>this.info.length-1) this.now=0;
	if(this.now<0) this.now=this.info.length-1;
	if(this.now<this.info.length-1){ var nowP=this.imgs[this.now+1]; if(nowP.src=='') nowP.src= nowP.getAttribute('rel')}
	this.dist=-this.now*this.liW;
	this.pUl.style.webkitTransform='translateX('+this.dist+'px)';
	for(var i=0;i<this.btns.length;i++)
	{
		this.btns[i].className='';
	}
	this.btns[this.now].className='on';
	if(this.auto) this.playFnM();
};
tgAds.prototype.playFnM=function(){
	var _this=this;
	if(_this.auto) if(_this.autoRunM===null) _this.autoRunM=setTimeout(function(){_this.stopFnM();_this.rollFnM(_this.now+1);},4000)
};
tgAds.prototype.stopFnM=function()
{
	var _this=this;
	clearTimeout(_this.autoRunM);
	_this.autoRunM=null;
};
tgAds.prototype.rollFnCtrM=function(btn,n){
	var _this=this;
	btn.onclick=function(){
		_this.rollFnM(n)
	}
};
tgAds.prototype.innerI=function()
{
	var box2=document.createElement('div');
	box2.className='adBtn';
	this.pUl=document.createElement('ul');
	this.pUl.style.width=(this.info.length+1)*100+'%';
	this.pUl.className='adPicUl';
	for(var i=0;i<this.info.length;i++)
	{
		var gLi=document.createElement('li');
		var gA=document.createElement('a');
		var gP=document.createElement('img');
		if(!this.noUrl){
			gA.href=this.info[i].adUrl;
			gA.target='_blank';
		}
		if(this.alertInfo) {
			gA.href='javascript:alert("'+this.alertInfo+'")';
			gA.removeAttribute('target');
		}
		this.setClick(gA,this.info[i],i);
		gA.title=this.info[i].Fname;
		gP.setAttribute('src',this.info[i].imgUrl);
		gA.appendChild(gP);
		gLi.appendChild(gA);
		gLi.style.width=1/(this.info.length+1)*100+'%';
		this.pUl.appendChild(gLi);
		var gB=document.createElement('a');
		gB.hideFocus="true";
		gB.innerText=this.info[i].Fname;
		this.rollFnCtrM(gB,i);
		box2.appendChild(gB);
		this.pics.push(gA);
		this.btns.push(gB);
		this.imgs.push(gP);
		tgAds.eas(this.info[i],1);
	}
	if(i>0){
		this.btns[this.now].className='on';
	}
	this.box.appendChild(this.pUl);
	this.box.appendChild(box2);
	var _this=this;
	if(i>1){
		if(_this.auto)_this.autoRunM=setTimeout(function(){_this.stopFnM();_this.rollFnM(_this.now+1);},4000)
		this.pUl.addEventListener("touchstart", function(){_this.start()},false);
		this.pUl.addEventListener("touchmove", function(){_this.move()},false);
		this.pUl.addEventListener("touchend", function(){_this.end()},false);
	}
	else {box2.style.display='none'}
	this.callBack();
};
tgAds.prototype.goBack=function(){
	if(this.ua) this.rollFnM(this.now-1);
	else this.rollFn(this.now-1);
};
tgAds.prototype.goNext=function(){
	if(this.ua) this.rollFnM(this.now+1);
	else  this.rollFn(this.now+1);
};
//run
tgAds.prototype.letsGo=function(obj)
{
	obj.allData=window['gAds'+obj.ggID];//obj.oDataNew
	var adsInfo=[];
	//���ﴦ��common��force
	for(var i=0;i<obj.info.length;i++){
		var adend=tgAds.process(obj.allData,obj.info[i],obj.ggID);
		if(typeof(adend)!='boolean'){adsInfo.push(adend)}
	}
	obj.info=adsInfo;
	//PC��
	if(navigator.userAgent.toLowerCase().indexOf("ipad")<0&&navigator.userAgent.toLowerCase().indexOf("iphone")<0&&navigator.userAgent.toLowerCase().indexOf("android")<0)
	{
		obj.ua=false;
		obj.innerPC();
	}
	//�ƶ���
	else
	{
		obj.ua=true;
		obj.innerI();
	}
};

//����
//var test=new tgAds({
//	ggID:'461'//��д�ֲ����������Ƶ��ID("Ƶ������"-"Ƶ��ID")
//	,info:['2024','2025','2026','2027','2033','2034']//,info:'201206'
//	//info��ֵ������2����ʽ��1.ֱ����д��Ҫ���⼸֡�Ĺ��λID�����д��6��7�����λID������ʵ��ֻ��3��4�����λ�й�棬���ᱨ���Զ�����
//	,box:'ggBox'//��д���ù���div��ID
//  ���²�����ѡ
//	,pgv:'index.adsRolling.ad' // ,pgv:'mainAd'
// [��ѡ����]pgv����2����ʽ����ͨ�����orPPT�����������ͨ�����'index.adsRolling.ad'��������ƣ���Ż��Զ��ӣ�eg��һ֡��:'index.adsRolling.ad1' |||||| PTT�����'mainAd'����������ƣ���Ż��Զ��ӣ�eg��һ֡��:PTTSendClick('adRoll','mainAd1','�ֲ����1')
//	,callBack:function(){console.log('һ����'+this.btns.length+'�����')}//[��ѡ����]�ڹ��׼����Ϻ����еĻص�����
//	//,auto:true//[��ѡ����]�ƶ��˽�ֹ�Զ�����������Ӵ������trueΪ��ʱ�Զ�����
//	//,mouse:false//[��ѡ����,�����������ɾ������]��trueΪ��꾭��С��ť������ҳ��falseΪ���С��ť������ҳ��Ĭ��Ϊ�������������ǵ����������Ȼ�ε��ۻ�
//	//,noUrl:true//[��ѡ����]Ĭ��false,�����չʾ���ܵ����ת������Ϊtrue
// //,alertInfo:'�����ڴ�'//[��ѡ����]�����չʾ����ת��������Ҫ�е�����ʾ�����ʹ��
//});
//
//document.getElementById('back').onclick=function(){
//	test.goBack();
//}
//document.getElementById('next').onclick=function(){
//	test.goNext();
//<a href="#" data-tgadieg="16344,22095" target="_blank" id="link"></a>
//	<a href="#" data-TGAD="16344,22096" target="_blank"></a>

//��֡���
tgAds.SingleAds={};//������еĵ�֡�������
//���õ�֡����idata����ϱ�
tgAds.setSingleClick=function(a,info){
	var oClick= a.getAttribute('onclick');
	if(oClick===null) {oClick=''}
	a.setAttribute('onclick','tgAds.eas({ggID:\''+info.ggID+'\',id:\''+info.id+'\',adId:\''+info.adId+'\',ecode:\''+info.ecode+'\',adUrl:\''+info.adUrl+'\'},2);'+oClick)
};
//�������е�֡��������
tgAds.setSingleInfo=function(elem,ggInfo){
	var cliEvent=elem.getAttribute('onclick')===null?'':elem.getAttribute('onclick');
	//��δ���뵥֡����dom
	if(cliEvent.indexOf('tgAds.eas')<0){
		//��Ƶ���µĹ�����û����
		if(typeof(tgAds.SingleAds[ggInfo[0]])=='undefined'){
			tgAds.SingleAds[ggInfo[0]]={};//ggInfo[0];
			tgAds.SingleAds[ggInfo[0]].pindao=ggInfo[0];
			tgAds.SingleAds[ggInfo[0]].infos=[];
			//tgAds.SingleAds[ggInfo[0]].stat=false;//��δ������
		}
		//��Ƶ���µĹ���������
		tgAds.SingleAds[ggInfo[0]].infos.push({
			elem:elem,
			id:ggInfo[1],
			stat:false//��δ������
		});
	}
	//��������ݽṹ����Ƶ���µ����е�֡��涼���뵽ͬһ��Ƶ��ID��infos��
	//tgAds.SingleAds={
	//	'Ƶ��ID':{
	//		pindao:'Ƶ��ID',
	//		infos:[
	//			{elem:a,id:'���λID',stat:true},
	//			{elem:a,id:'���λID',stat:true},
	//			...
	//		]
	//	},
	//	....
	//};
};
//���õ�֡����dom
tgAds.setSingleDom=function(adend,obj){
	if(!obj.stat){
		var img=new Image();
		img.src=adend.imgUrl;
		obj.elem.innerHTML='';
		obj.elem.appendChild(img);
		obj.elem.href=adend.adUrl==''?'javascript:void(0)':adend.adUrl;
		obj.elem.setAttribute('title',adend.Fname);
		tgAds.eas(adend,1);
		tgAds.setSingleClick(obj.elem,adend);
		obj.stat=true;//�Ѿ������˹������
		if(obj.elem.getAttribute('data-dom')){
			var dataDom=document.createElement(obj.elem.getAttribute('data-dom'));
			dataDom.innerText=adend.Fname;
			obj.elem.appendChild(dataDom)
		}
	}
};
tgAds.run=tgAds.setSingleAds=function(){
	var elems=document.getElementsByTagName('a');
	for(var i=0;i<elems.length;i++){
		if(elems[i].getAttribute('data-tgadieg')||elems[i].getAttribute('data-TGAD')){
			var tagN=elems[i].getAttribute('data-tgadieg')?elems[i].getAttribute('data-tgadieg'):elems[i].getAttribute('data-TGAD');
			var ggInfo=tagN.split(',');
			tgAds.setSingleInfo(elems[i],ggInfo);
		}
	}
	for(var o in tgAds.SingleAds){
		//���û��load������������
		if(typeof(window['gAds'+tgAds.SingleAds[o].pindao])=='undefined'){
			tgAds.loadjs('//ossweb-img.qq.com/images/clientpop/idata_ad/idata_ad_'+tgAds.SingleAds[o].pindao+'.js',function(obj){
				var allData=window['gAds'+obj.pindao];
				for(var i=0;i<obj.infos.length;i++){
					var adend=tgAds.process(allData,obj.infos[i].id,obj.pindao);
					if(typeof(adend)!='boolean'){
						tgAds.setSingleDom(adend,obj.infos[i]);
					}
					else{
						obj.infos[i].elem.innerText='���λID:'+obj.infos[i].id+'û������,��ȷ�Ϲ��λID��ȷ���������¼�'
					}
				};
			},tgAds.SingleAds[o]);
		}
		//����Ѿ������Ƶ��idata��������
		else{
			var allData=window['gAds'+tgAds.SingleAds[o].pindao];
			for(var i=0;i<tgAds.SingleAds[o].infos.length;i++){
				if(!tgAds.SingleAds[o].infos[i].stat){
					var gg=tgAds.SingleAds[o].infos[i];
					var adend=tgAds.process(allData,gg.id,tgAds.SingleAds[o].pindao);
					if(typeof(adend)!='boolean') {
						tgAds.setSingleDom(adend, gg);
					}
					else{
						gg.elem.innerText='���λID:'+gg.id+'û������,��ȷ�Ϲ��λID��ȷ���������¼�'
					}
				}
			}
		}
	}
};
tgAds.run();
if(typeof (iData_New_Tplparser)=='undefined'){
	var iData_New_Tplparser=new Object();
	iData_New_Tplparser.run=tgAds.run;
}
