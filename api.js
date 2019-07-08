var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'mykugou',
	port: 3306,
	multipleStatements: true
});

app.all('*', function (req, res, next) {             //设置跨域访问
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
var tab = [
	{
		img: "https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp",
		title: "天猫"
	},
	{
		img: "https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
		title: "聚划算"
	},
	{
		img: "https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp",
		title: "领金币"
	},
	{
		img: "https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp",
		title: "天猫国际"
	},
	{
		img: "https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp",
		title: "外卖"
	},
	{
		img: "https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp",
		title: "天猫超市"
	},
	{
		img: "https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp",
		title: "充值中心"
	},
	{
		img: "https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
		title: "肥猪旅行"
	},
]
var watchlist = [
	{
		watchName: "十七岁的雨季",
		img: "https://p1.music.126.net/iksTP9qk_LdU922_JZc45A==/1396379773325867.jpg?param=159y90",
		url: "./src/17.mp4",
		author: "林志颖",
		id: "0"
	},
	{
		watchName: "怪你过分美丽",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20170829/20170829160206487207.jpg",
		url: "./src/guofenmeili.mp4",
		author: "张国荣",
		id: "1"
	},
	{
		watchName: "明天你好",
		img: "http://p2.music.126.net/LQ2iUKlZwqGMysGkeCR4ww==/27487790697969.jpg",
		url: "./src/tomorrow.mp4",
		author: "咖啡牛奶",
		id: "2"
	},
	{
		watchName: "分分钟需要你",
		img: "http://p2.music.126.net/7PXc4Jv9uH59J5SAYEZOjQ==/78065325572830.jpg",
		url: "./src/fenfenzhongxuyaoni.mp4",
		author: "林子祥",
		id: "3"
	},
	{
		watchName: "祝君好",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20160504/20160504081235940065.jpg",
		url: "./src/zhujunhao.mp4",
		author: "张智霖",
		id: "4"
	},
	{
		watchName: "一双手",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20160215/20160215165724790964.jpg",
		url: "./src/zhujunhao.mp4",
		author: "林奕匡",
		id: "5"
	},
	{
		watchName: "一路上有你",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20160426/20160426184644195108.jpg",
		url: "./src/yiluyouni.mp4",
		author: "张学友",
		id: "6"
	},
	{
		watchName: "饿狼传说",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20160501/20160501105541724344.jpg",
		url: "./src/elangchuanshuo.mp4",
		author: "张学友",
		id: "7"
	},
	{
		watchName: "一千个伤心的理由",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20160503/20160503033124691763.jpg",
		url: "./src/elangchuanshuo.mp4",
		author: "张学友",
		id: "8"
	},
	{
		watchName: "讲不出再见",
		img: "https://p3fx.kgimg.com/mvhdpic/240/20170322/20170322173624498023.jpg",
		url: "./src/elangchuanshuo.mp4",
		author: "谭咏麟",
		id: "9"
	}
]

app.get('/tab', function (req, res) {           //配置接口api
	res.status(200),
		res.json(tab)
})
app.get('/watch', function (req, res) {           //配置接口api
	res.status(200),
		res.json(watchlist)
})
app.get('/song', (req, res) => {
	const sqlStr = 'select * from songlist '
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
// app.get('/watch', (req, res) => {
// 	const sqlStr = 'select * from watchlist '
// 	connection.query(sqlStr, (err, results) => {
// 		if (err) return res.json({
// 			err_code: 1,
// 			message: '数据不存在',
// 			affextedRows: 0
// 		})
// 		res.json({
// 			err_code: 200,
// 			message: results,
// 			affextedRows: results.affextedRows
//         })
// 	})
// });
app.get('/goods', (req, res) => {
	const sqlStr = 'select * from goodslist '
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
app.get('/shop', (req, res) => {
	const sqlStr = 'select * from shoplist '
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
app.get('/shopDetail', (req, res) => {
	console.log(req.query.item)
	const sqlStr = 'select * from shoplist where id=' + req.query.item
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
app.get('/songUrl', (req, res) => {
	console.log(req.query.item)
	const sqlStr = 'select * from songlist where id=' + req.query.item
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
		console.log(results)
	})
});
// app.get('/watchDetail', (req, res) => {
//     console.log(req.query.item)
// 	const sqlStr = 'select * from watchlist where id='+req.query.item
// 	connection.query(sqlStr, (err, results) => {
// 		if (err) return res.json({
// 			err_code: 1,
// 			message: '数据不存在',
// 			affextedRows: 0
// 		})
// 		res.json({
// 			err_code: 200,
// 			message: results,
// 			affextedRows: results.affextedRows
// 		})
// 		console.log(results)
// 	})
// });
app.get('/addCard', (req, res) => {
	console.log(req.query.carDetail)
	// insert into 表名1（字段名1，字段名2，....）select 字段名1，字段名2，.... from 表名2；
	// const sqlStr = "insert into cardlist (shopName,shopContent,shopImg,shopImgs,id) values ("+req.query.carDetail.shopName+","+req.query.carDetail.shopContent+","+req.query.carDetail.shopImg+","+req.query.carDetail.shopImgs+","+req.query.carDetail.id+")"
	const sqlStr = 'select * from cardlist where id=' + req.query.carDetail.id
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
		console.log(results)
		// var str="INSERT INTO cardlis(shopName, shopContent, shopImg,shopImgs,id,price,num) VALUES("+req.query.carDetail.shopName+","+req.query.carDetail.shopContent+","+req.query.carDetail.shopImg+","+req.query.carDetail.shopImgs+","+req.query.carDetail.id+","+req.query.carDetail.price+",1) ON DUPLICATE KEY UPDATE num=num+1 WHERE id="+req.query.carDetail.id;
		connection.query('INSERT INTO cardlist SET  ?', { "shopName": req.query.carDetail.shopName, "shopContent": req.query.carDetail.shopContent, "shopImg": req.query.carDetail.shopImg, "shopImgs": req.query.carDetail.shopImgs, "id": req.query.carDetail.id, "price": req.query.carDetail.price, "num": 1,"isDel":"true","isCheck":"true" }, (err, results) => {
			if (err) {
				console.log('插入数据失败')
				connection.query('update cardlist SET num=num+1 WHERE id=?',req.query.carDetail.id,(err,data)=>{
					if(err){
						console.log("更新失败")
					}else{
						console.log("更新成功")
					}
				})
			} else {
				console.log("插入成功")
			}
		})
	})


});
app.get('/addGoods', (req, res) => {
	console.log(req.query.data)
	connection.query('INSERT INTO goodslist SET  ?', { "goodName": req.query.data.songName, "img": req.query.data.img, "url": req.query.data.url, "isgood": req.query.data.isgood }, (err, results) => {
		if(err){console.log('插入数据失败')}
		else{console.log("加入收藏成功")}
	})
	// connection.query('update songlist SET isgood=true WHERE id=?',req.query.data.id,(err,data)=>{
	// 	if(err){
	// 		console.log("更新失败")
	// 	}else{
	// 		console.log("更新成功")
	// 	}
	// })
})
app.get('/card', (req, res) => {
	const sqlStr = 'select * from cardlist '
	connection.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
app.get("/addNum",(req,res)=>{
	connection.query('update cardlist SET num=num+1 WHERE id=?',req.query.id,(err,data)=>{
		if(err){
			console.log("数量更新失败")
		}else{
			console.log("数量更新成功")
		}
	})
})
app.get("/delNum",(req,res)=>{
	connection.query('update cardlist SET num=num-1 WHERE id=?',req.query.id,(err,data)=>{
		if(err){
			console.log("数量更新失败")
		}else{
			console.log("数量更新成功")
		}
	})
})
app.get("/delCar",(req,res)=>{
	connection.query('delete from cardlist WHERE id=?',req.query.id,(err,data)=>{
		if(err){
			console.log("购物车删除失败")
		}else{
			console.log("购物车删除成功")
		}
	})
})
app.listen(3000, "127.0.0.1", () => {
	// 打印一下
	console.log('http://127.0.0.1:3000')
})



