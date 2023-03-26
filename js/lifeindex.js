/*
[task_local]
0 0 7 ? * * https://raw.githubusercontent.com/deezertidal/shadowrocket-rules/main/js/lifeindex.js, tag=生活指数, enabled=true
*/
const apiurl = "https://www.tianqiapi.com/life/lifepro?appid=79171417&appsecret=LP9yfUKd"  //自行申请apikey,个人apikey请勿滥用

$task.fetch({ url: apiurl }).then(response => {
        var obj = JSON.parse(response.body);
        var title = obj.city+"生活指数"+obj.update_time;
        var subtitle = "下拉查看更多";
        var kongtiao=obj.data.kongtiao.name+":"+obj.data.kongtiao.level+","+obj.data.kongtiao.desc;
        var guomin=obj.data.guomin.name+":"+obj.data.guomin.level+","+obj.data.guomin.desc;
        var chenlian=obj.data.chenlian.name+":"+obj.data.chenlian.level+","+obj.data.chenlian.desc;
        var shushidu=obj.data.shushidu.name+":"+obj.data.shushidu.level+","+obj.data.shushidu.desc;
        var chuanyi=obj.data.chuanyi.name+":"+obj.data.chuanyi.level+","+obj.data.chuanyi.desc;
        var diaoyu=obj.data.diaoyu.name+":"+obj.data.diaoyu.level+","+obj.data.diaoyu.desc;
        var fangshai=obj.data.fangshai.name+":"+obj.data.fangshai.level+","+obj.data.fangshai.desc;
        var guangjie=obj.data.guangjie.name+":"+obj.data.guangjie.level+","+obj.data.guangjie.desc;
        var taiyangjing=obj.data.taiyangjing.name+":"+obj.data.taiyangjing.level+","+obj.data.taiyangjing.desc;
        var ganmao=obj.data.ganmao.name+":"+obj.data.ganmao.level+","+obj.data.ganmao.desc;
        var ganzao=obj.data.ganzao.name+":"+obj.data.ganzao.level+","+obj.data.ganzao.desc;
        var huachuan=obj.data.huachuan.name+":"+obj.data.huachuan.level+","+obj.data.huachuan.desc;
        var jiaotong=obj.data.jiaotong.name+":"+obj.data.jiaotong.level+","+obj.data.jiaotong.desc;
        var lukuang=obj.data.lukuang.name+":"+obj.data.lukuang.level+","+obj.data.lukuang.desc;
        var liangshai=obj.data.liangshai.name+":"+obj.data.liangshai.level+","+obj.data.liangshai.desc;
        var meifa=obj.data.meifa.name+":"+obj.data.meifa.level+","+obj.data.meifa.desc;
        var yeshenghuo=obj.data.yeshenghuo.name+":"+obj.data.yeshenghuo.level+","+obj.data.yeshenghuo.desc;
        var pijiu=obj.data.pijiu.name+":"+obj.data.pijiu.level+","+obj.data.pijiu.desc;
        var fengzheng=obj.data.fengzheng.name+":"+obj.data.fengzheng.level+","+obj.data.fengzheng.desc;
        var wuran=obj.data.wuran.name+":"+obj.data.wuran.level+","+obj.data.wuran.desc;
        var huazhuang=obj.data.huazhuang.name+":"+obj.data.huazhuang.level+","+obj.data.huazhuang.desc;
        var lvyou=obj.data.lvyou.name+":"+obj.data.lvyou.level+","+obj.data.lvyou.desc;
        var ziwaixian=obj.data.ziwaixian.name+":"+obj.data.ziwaixian.level+","+obj.data.ziwaixian.desc;
        var fenghan=obj.data.fenghan.name+":"+obj.data.fenghan.level+","+obj.data.fenghan.desc;
        var xiche=obj.data.xiche.name+":"+obj.data.xiche.level+","+obj.data.xiche.desc;
        var xinqing=obj.data.xinqing.name+":"+obj.data.xinqing.level+","+obj.data.xinqing.desc;
        var yundong=obj.data.yundong.name+":"+obj.data.yundong.level+","+obj.data.yundong.desc;
        var yuehui=obj.data.yuehui.name+":"+obj.data.yuehui.level+","+obj.data.yuehui.desc;
        var yusan=obj.data.yusan.name+":"+obj.data.yusan.level+","+obj.data.yusan.desc;
        var zhongshu=obj.data.zhongshu.name+":"+obj.data.zhongshu.level+","+obj.data.zhongshu.desc;
        var kouzhao=obj.data.kouzhao.name+":"+obj.data.kouzhao.level+","+obj.data.kouzhao.desc;
$notify(title,subtitle,"👕"+chuanyi+'\n'+"🧴"+fangshai+'\n'+"🤒"+ganmao+'\n'+"🌁"+wuran+'\n'+"🚗"+xiche+'\n'+"☂️"+yusan+'\n'+"🌡︎"+zhongshu);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
