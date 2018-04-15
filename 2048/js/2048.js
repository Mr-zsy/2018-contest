var A1 = document.getElementById("a1");
var A2 = document.getElementById("a2");
var A3 = document.getElementById("a3");
var A4 = document.getElementById("a4");
var B1 = document.getElementById("b1");
var B2 = document.getElementById("b2");
var B3 = document.getElementById("b3");
var B4 = document.getElementById("b4");
var C1 = document.getElementById("c1");
var C2 = document.getElementById("c2");
var C3 = document.getElementById("c3");
var C4 = document.getElementById("c4");
var D1 = document.getElementById("d1");
var D2 = document.getElementById("d2");
var D3 = document.getElementById("d3");
var D4 = document.getElementById("d4");


// function start(){
	var N = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var blank = [];//存放空白位置序列号
	//传值到页面
	function pageShow(){
		A1.innerHTML = N[0];
		A2.innerHTML = N[1];
		A3.innerHTML = N[2];
		A4.innerHTML = N[3];
		B1.innerHTML = N[4];
		B2.innerHTML = N[5];
		B3.innerHTML = N[6];
		B4.innerHTML = N[7];
		C1.innerHTML = N[8];
		C2.innerHTML = N[9];
		C3.innerHTML = N[10];
		C4.innerHTML = N[11];
		D1.innerHTML = N[12];
		D2.innerHTML = N[13];
		D3.innerHTML = N[14];
		D4.innerHTML = N[15];
	}

	//**********************************************************
	///还没调用！！！！
	//**********************************************************
	//随机产生数字部分
	function change(){
		function showRn(){
			for(var i=0;i<N.length;i++){
				//检测空白位置存入blank数组
				if(!N[i]){
					blank.unshift(i);
				}
			}
			if(!blank.length){
				alert("game over!");
			}
			var r_index = Math.round(Math.random()*blank.length)//生成存放空白位置序列数组的随机序列号,生成出现数字的随机位置
			var r_num = (1+Math.round(Math.random()*1))*2;//生成产生值随机数，2 || 4
			N[blank[r_index]] = r_num;
		}
		showRn();
		showRn();
		pageShow();
	}

	//操作控制部分

	// 按右键
	function rightMove(){
		for(var m=0;m<4;m++){
			for(var i=3;i>=0;i--){
				if(!N[i]){//第一个为0数			
					for(var j=i-1;j>=0;j--){
						if(N[j]){//与左侧非零数互换
							var num = N[i];
							N[i] = N[j];//!0
							N[j] = num;//0
							if(N[i] == N[i-1]){
								N[i] = N[i]*2;
								N[i-1] = 0;
							}
						}
					}
				}else{//第一个非零数
					if(N[i] == N[i-1]){
						N[i] = N[i]*2;
						N[i-1] = 0;
					}
				}	
			}
		}
		//遍历第二行
		for(var m=0;m<4;m++){
			for(var i=7;i>=4;i--){
				if(!N[i]){//第一个非0数
					for(var j=i-1;j>=4;j--){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-1]){
									N[i] = N[i]*2;
									N[i-1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-1]){
						N[i] = N[i]*2;
						N[i-1] = 0;
					}
				}	
			}
		}
		//遍历第三行
		for(var m=0;m<4;m++){
			for(var i=11;i>=8;i--){
				if(!N[i]){//第一个非0数
					for(var j=i-1;j>=8;j--){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-1]){
									N[i] = N[i]*2;
									N[i-1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-1]){
						N[i] = N[i]*2;
						N[i-1] = 0;
					}
				}
			}
		}
		//遍历第四行
		for(var m=0;m<4;m++){
			for(var i=15;i>=12;i--){
				if(!N[i]){//第一个非0数
					for(var j=i-1;j>=12;j--){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-1]){
										N[i] = N[i]*2;
										N[i-1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-1]){
						N[i] = N[i]*2;
						N[i-1] = 0;
					}
				}
			}
		}
		change();
	}

	//按左键
	function leftMove(){
		for(var m=0;m<4;m++){
			for(var i=0;i<=3;i++){
				if(!N[i]){//第一个为0数			
					for(var j=i+1;j<=3;j++){
						if(N[j]){//与左侧非零数互换
							var num = N[i];
							N[i] = N[j];//!0
							N[j] = num;//0
							if(N[i] == N[i+1]){
								N[i] = N[i]*2;
								N[i+1] = 0;
							}
						}
					}
				}else{//第一个非零数
					if(N[i] == N[i+1]){
						N[i] = N[i]*2;
						N[i+1] = 0;
					}
				}	
			}
		}
		//遍历第二行
		for(var m=0;m<4;m++){
			for(var i=4;i<=7;i++){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=7;j++){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+1]){
									N[i] = N[i]*2;
									N[i+1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+1]){
						N[i] = N[i]*2;
						N[i+1] = 0;
					}
				}	
			}
		}
		//遍历第三行
		for(var m=0;m<4;m++){
			for(var i=8;i<=11;i++){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=11;j++){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+1]){
									N[i] = N[i]*2;
									N[i+1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+1]){
						N[i] = N[i]*2;
						N[i+1] = 0;
					}
				}
			}
		}
		//遍历第四行
		for(var m=0;m<4;m++){
			for(var i=12;i<=15;i++){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=15;j++){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+1]){
										N[i] = N[i]*2;
										N[i+1] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+1]){
						N[i] = N[i]*2;
						N[i+1] = 0;
					}
				}
			}
		}
		change();
	}

	// 按上键
	function upMove(){
		for(var m=0;m<4;m++){
			for(var i=0;i<=12;i+=4){
				if(!N[i]){//第一个为0数			
					for(var j=i+4;j<=12;j+=4){
						if(N[j]){//与左侧非零数互换
							var num = N[i];
							N[i] = N[j];//!0
							N[j] = num;//0
							if(N[i] == N[i+4]){
								N[i] = N[i]*2;
								N[i+4] = 0;
							}
						}
					}
				}else{//第一个非零数
					if(N[i] == N[i+4]){
						N[i] = N[i]*2;
						N[i+4] = 0;
					}
				}	
			}
		}
		//遍历第二行
		for(var m=0;m<4;m++){
			for(var i=1;i<=13;i+=4){
				if(!N[i]){//第一个非0数
					for(var j=i+4;j<=13;j+=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+4]){
									N[i] = N[i]*2;
									N[i+4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+4]){
						N[i] = N[i]*2;
						N[i+4] = 0;
					}
				}	
			}
		}
		//遍历第三行
		for(var m=0;m<4;m++){
			for(var i=2;i<=14;i+=4){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=14;j+=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+4]){
									N[i] = N[i]*2;
									N[i+4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+4]){
						N[i] = N[i]*2;
						N[i+4] = 0;
					}
				}
			}
		}
		//遍历第四行
		for(var m=0;m<4;m++){
			for(var i=3;i<=15;i+=4){
				if(!N[i]){//第一个非0数
					for(var j=i+4;j<=15;j+=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i+4]){
										N[i] = N[i]*2;
										N[i+4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i+4]){
						N[i] = N[i]*2;
						N[i+4] = 0;
					}
				}
			}
		}
		change();
	}

	//按下键
	function downMove(){
			//遍历第一列
		for(var m=0;m<4;m++){
			for(var i=12;i>=0;i-=4){
				if(!N[i]){//第一个为0数			
					for(var j=i-4;j>=0;j-=4){
						if(N[j]){//与左侧非零数互换
							var num = N[i];
							N[i] = N[j];//!0
							N[j] = num;//0
							if(N[i] == N[i-4]){
								N[i] = N[i]*2;
								N[i-4] = 0;
							}
						}
					}
				}else{//第一个非零数
					if(N[i] == N[i-4]){
						N[i] = N[i]*2;
						N[i-4] = 0;
					}
				}	
			}
		}
		//遍历第二行
		for(var m=0;m<4;m++){
			for(var i=13;i>=1;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=1;j-=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-4]){
									N[i] = N[i]*2;
									N[i-4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-4]){
						N[i] = N[i]*2;
						N[i-4] = 0;
					}
				}	
			}
		}
		//遍历第三行
		for(var m=0;m<4;m++){
			for(var i=14;i>=2;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=2;j-=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-4]){
									N[i] = N[i]*2;
									N[i-4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-4]){
						N[i] = N[i]*2;
						N[i-4] = 0;
					}
				}
			}
		}
		//遍历第四行
		for(var m=0;m<4;m++){
			for(var i=15;i>=3;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=3;j-=4){
						if(N[j]){//与非零数左侧第一个0位置互换
							var num = N[i];
							N[i] = N[j];
							N[j] = num;
							if(N[i] == N[i-4]){
										N[i] = N[i]*2;
										N[i-4] = 0;
							}
						}
					}
				}else{
					if(N[i] == N[i-4]){
						N[i] = N[i]*2;
						N[i-4] = 0;
					}
				}
			}
		}
		change();
	}

//方向键事件
document.onkeydown =function(event){
		event.preventDefault();
		var key = event.keyCode;
		if(key == 37){//按左键
			// alert("按了←键！");
			leftMove();
		}
		if(key == 38){//按上键
			 // alert("按了↑键！");
			upMove();
		}
		if(key == 39){//按右键
			// alert("按了→键！");
			rightMove();
		}
		if(key == 40){//按下键
			 // alert("按了↓键！");
			downMove();
		}
	}
// }

window.onload = function(){

	change();
	
}
var Btn = document.getElementById("btn");
//重新开始
Btn.onclick = function(){
	var N = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	pageShow();
}

