########################################
#应用名称：  SpotifyVip
#脚本作者：  app2smile
#更新时间：  2024-05-18
#使用说明：  解锁部分premium,音质不能设置为超高
#使用步骤：  ✅登录后再打开脚本,重启app等待脚本生效
#脚本功能：  1.去除播放广告；2.歌手/专辑列表正常展示；3.去除随机播放
#通知频道：  https://t.me/ddgksf2021
#作者库地：  https://github.com/app2smile/rules
#脚本地址：  https://github.com/ddgksf2013/Rewrite/raw/master/UnlockVip/Spotify.conf
########################################


hostname = spclient.wg.spotify.com

^https?:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js
^https?:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/ url script-request-header https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
