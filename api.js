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

app.get('/addCard', (req, res) => {
	console.log(req.query.carDetail)
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



