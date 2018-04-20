var cell0 = document.getElementById("a1");
var cell1 = document.getElementById("a2");
var cell2 = document.getElementById("a3");
var cell3 = document.getElementById("a4");
var cell4 = document.getElementById("b1");
var cell5 = document.getElementById("b2");
var cell6 = document.getElementById("b3");
var cell7 = document.getElementById("b4");
var cell8 = document.getElementById("c1");
var cell9 = document.getElementById("c2");
var cell10 = document.getElementById("c3");
var cell11 = document.getElementById("c4");
var cell12 = document.getElementById("d1");
var cell13 = document.getElementById("d2");
var cell14 = document.getElementById("d3");
var cell15 = document.getElementById("d4");
var showScore = document.querySelector("#score dt");

// function start(){
	var N = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var score = 0;//得分
	//传值到页面
	function pageShow(){
		for(var i=0;i<16;i++){
			var cellNum = document.querySelectorAll(".cell")[i];

			if(!N[i]){
				cellNum.innerHTML = "&nbsp";
			}
			if(N[i]){//不为0
				cellNum.innerHTML = N[i];		
		
			}

		}
		showScore.innerHTML = score;//分数显示
	}

		//随机产生数字
	function showRn(){
		var blank = [];//存放空白位置序列号
		for(var i=0;i<16;i++){
			//检测空白位置存入blank数组
			if(!N[i]){
				blank.push(i);
			}
		}
		var r_index = Math.round(Math.random()*(blank.length-1));//生成blank数组的随机索引值,生成出现数字的随机位置
		var r_num = (1+Math.round(Math.random()*1))*2;//生成产生值随机数，2 || 4
		N[blank[r_index]] = r_num;
		var cellNum = document.querySelectorAll(".cell")[blank[r_index]];


		//游戏结束判断
		//**********************************************************
		if(!blank.length){
			var falseNum = 0;//记录不等情况
			for(var i=0;i<3;i++){
				if(N[i]!=N[i+1]&&N[i]!=N[i+4]){
					falseNum++;
				}
			}
			if(falseNum==3){
				falseNum = 0;//置零
				for(var i=4;i<7;i++){
					if(N[i]!=N[i+1]&&N[i]!=N[i+4]){
						falseNum++;
					}
				}
				if(falseNum==3){
					falseNum = 0;
					for(var i=8;i<11;i++){
						if(N[i]!=N[i+1]&&N[i]!=N[i+4]){
							falseNum++;
						}
					}
					if(falseNum==3){
						falseNum = 0;
						for(var i=12;i<15;i++){
							if(N[i]!=N[i+1]){
								falseNum++;
							}
						}
						if(falseNum==3){
							falseNum = 0;
							for(var i=3;i<15;i+=4){
								if(N[i]!=N[i+4]){
									falseNum++;
								}								
							}
							if(falseNum==3){
								alert("game over!");
								event.preventDefault();//阻止浏览器提示弹框

							}
						}
					}
				}
			}
		}
	
	}
	function changeColor(){
		// 对应数值颜色变化
		for(var i=0;i<=15;i++){
			var cellNum = document.querySelectorAll(".cell")[i];

			switch (N[i]) {
				case 0:
					cellNum.style.backgroundColor = "#cdc0b4 ";
					cellNum.style.color = "black";
					break;
				case 2:
					cellNum.style.backgroundColor = "#eee4da";
					cellNum.style.color = "black";
					break;
				case 4:
					cellNum.style.backgroundColor = "#ede0c8";
					cellNum.style.color = "black";
					break;
				case 8:
					cellNum.style.backgroundColor = "#f2b179";
					cellNum.style.color = "white";
					break;
				case 16:
					cellNum.style.backgroundColor = "#f67c5f";
					cellNum.style.color = "white";
					break;
				case 64:
					cellNum.style.backgroundColor = "#f65e3b";
					cellNum.style.color = "white";
					break;
				case 128:
					cellNum.style.backgroundColor = "#edcf72";
					cellNum.style.color = "white";
					break;
				case 256:
					cellNum.style.backgroundColor = "#edcc61";
					cellNum.style.color = "white";
					break;
				case 512:
					cellNum.style.backgroundColor = "#edc850";
					cellNum.style.color = "white";
					break;	
				case 1024:
					cellNum.style.backgroundColor = "#ede0c8";
					cellNum.style.color = "white";
					break;
				case 2048:
					cellNum.style.backgroundColor = "#edc22e";
					cellNum.style.color = "white";
					break;
				case 4096:
					cellNum.style.backgroundColor = "black";
					cellNum.style.color = "white";
					break;		
				case 8192:
					cellNum.style.backgroundColor = "black";
					cellNum.style.color = "white";					
					break;							
				default:
					// statements_def
					break;
			}
		}

	}
	function change(){
		showRn();
		showRn();
		
		changeColor();
		
		pageShow();
	}

	//操作控制部分

	// 按右键
	function rightMove(){
			for(var i=3;i>=0;i--){
			if(N[i]){//找到右边第一个不为零的数

				if(i!=3){//不是最右边
					N[3] = N[i];
					N[i] = 0;//放到最右边
				}
				break;
			}
		}
			outer:
			for(var i=3;i>=0;i--){
				if(N[i]){//不为零
					for(var j=i-1;j>=0;j--){
						if(N[j]){//左边第一个不为零的数
							if(N[i]==N[j]){//相等合并
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{//不相等
								if(j!=(i-1)){//不相邻换位
									N[i-1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
						
					}
				}	
			}
			for(var i=3;i>=0;i--){
				if(!N[i]){//0		
					for(var j=i-1;j>=0;j--){
						if(N[j]){//与左侧非零数互换
							N[i] = N[j];//!0
							N[j] = 0;//0
						}
						
					}
				}
			}
		// }
		//遍历第二行
		// for(var m=0;m<3;m++){
		for(var i=7;i>=4;i--){
			if(N[i]){
				if(i!=7){
					N[7] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=7;i>=4;i--){
				if(N[i]){
					for(var j=i-1;j>=4;j--){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-1)){
									N[i-1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=7;i>=4;i--){
				if(!N[i]){
					for(var j=i-1;j>=4;j--){
						if(N[j]){//与非零数左侧第一个0位置互换
							N[i] = N[j];
							N[j] = 0;
							
						}
						
					}
				}
			}
		// }
		//遍历第三行
		// for(var m=0;m<3;m++){
		for(var i=11;i>=8;i--){
			if(N[i]){
				if(i!=11){
					N[11] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=11;i>=8;i--){
				if(N[i]){
					for(var j=i-1;j>=8;j--){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-1)){
									N[i-1] = N[j];
									N[j] = 0;
								}
								else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=11;i>=8;i--){
				if(!N[i]){
					for(var j=i-1;j>=8;j--){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
		//遍历第四行
		for(var i=15;i>=12;i--){
			if(N[i]){
				if(i!=15){
					N[15] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=15;i>=12;i--){
				if(N[i]){
					for(var j=i-1;j>=12;j--){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-1)){
									N[i-1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=15;i>=12;i--){
				if(!N[i]){
					for(var j=i-1;j>=12;j--){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
	}

	//按左键
	function leftMove(){
		// for(var m=0;m<3;m++){
		for(var i=0;i<=3;i++){
			if(N[i]){
				if(i!=0){
					N[0] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=0;i<=3;i++){
				if(N[i]){
					for(var j=i+1;j<=3;j++){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+1)){
									N[i+1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}		
			}
			for(var i=0;i<=3;i++){
				if(!N[i]){//第一个为0数			
					for(var j=i+1;j<=3;j++){
						if(N[j]){//与左侧非零数互换
							N[i] = N[j];//!0
							N[j] = 0;//0
						}
						
					}
				}
			}
		// }
		//遍历第二行
		// for(var m=0;m<3;m++){
		for(var i=4;i<=7;i++){
			if(N[i]){
				if(i!=4){
					N[4] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=4;i<=7;i++){
				if(N[i]){
					for(var j=i+1;j<=7;j++){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i];
								continue outer; 
							}else{
								if(j!=(i+1)){
									N[i+1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=4;i<=7;i++){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=7;j++){
						if(N[j]){//与非零数左侧第一个0位置互换
							N[i] = N[j];
							N[j] = 0;						
						}
					
					}
				}
			}
		// }
		//遍历第三行
		// for(var m=0;m<3;m++){
		for(var i=8;i<=11;i++){
			if(N[i]){
				if(i!=8){
					N[8] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=8;i<=11;i++){
				if(N[i]){
					for(var j=i+1;j<=11;j++){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+1)){
									N[i+1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=8;i<=11;i++){
				if(!N[i]){
					for(var j=i+1;j<=11;j++){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
					
					}
				}
			}
		// }
		//遍历第四行
		// for(var m=0;m<3;m++){
		for(var i=12;i<=15;i++){
			if(N[i]){
				if(i!=12){
					N[12] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=12;i<=15;i++){
				if(N[i]){
					for(var j=i+1;j<=15;j++){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+1)){
									N[i+1] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=12;i<=15;i++){
				if(!N[i]){//第一个非0数
					for(var j=i+1;j<=15;j++){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
	}

	// 按上键
	function upMove(){
		//第一列
		// for(var m=0;m<3;m++){
		for(var i=0;i<=12;i+=4){
			if(N[i]){
				if(i!=0){
					N[0] = N[i];
					N[i] = 0;
				}
				break;
			}
		}	
			outer:
			for(var i=0;i<=12;i+=4){
				if(N[i]){
					for(var j=i+4;j<=12;j+=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+4)){
									N[i+4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=0;i<=12;i+=4){
				if(!N[i]){//第一个为0数			
					for(var j=i+4;j<=12;j+=4){
						if(N[j]){//不为零，与上面0互换
							N[i] = N[j];//!0
							N[j] = 0;//0
						}
						
					}
				}
			}
		// }
		//遍历第二行
		// for(var m=0;m<3;m++){
		for(var i=1;i<=13;i+=4){
			if(N[i]){
				if(i!=1){
					N[1] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=1;i<=13;i+=4){
				if(N[i]){
					for(var j=i+4;j<=13;j+=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i];
								continue outer; 
							}else{
								if(j!=(i+4)){
									N[i+4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=1;i<=13;i+=4){
				if(!N[i]){//第一个非0数
					for(var j=i+4;j<=13;j+=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
		//遍历第三列
		// for(var m=0;m<3;m++){
		for(var i=2;i<=14;i+=4){
			if(N[i]){
				if(i!=2){
					N[2] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=2;i<=14;i+=4){
				if(N[i]){
					for(var j=i+4;j<=14;j+=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+4)){
									N[i+4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=2;i<=14;i+=4){
				if(!N[i]){
					for(var j=i+1;j<=14;j+=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
					
					}
				}
			}
		// }
		//遍历第四行
		// for(var m=0;m<3;m++){
		for(var i=3;i<=15;i+=4){
			if(N[i]){
				if(i!=3){
					N[3] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=3;i<=15;i+=4){
				if(N[i]){
					for(var j=i+4;j<=15;j+=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i+4)){
									N[i+4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=3;i<=15;i+=4){
				if(!N[i]){
					for(var j=i+4;j<=15;j+=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
	}

	//按下键
	function downMove(){
			//遍历第一列
		// for(var m=0;m<3;m++){
		for(var i=12;i>=0;i-=4){
			if(N[i]){
				if(i!=12){
					N[12] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=12;i>=0;i-=4){
				if(N[i]){
					for(var j=i-4;j>=0;j-=4){
						if(N[j]){//!0
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-4)){
									N[i-4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=12;i>=0;i-=4){
				if(!N[i]){//0
					for(var j=i-4;j>=0;j-=4){
						if(N[j]){//!0
							N[i] = N[j];//!0
							N[j] = 0;//0
						}
						
					}
				}
			}
		// }
		//遍历第二行
		// for(var m=0;m<3;m++){
		for(var i=13;i>=1;i-=4){
			if(N[i]){
				if(i!=13){
					N[13] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=13;i>=1;i-=4){
				if(N[i]){
					for(var j=i-4;j>=1;j-=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-4)){
									N[i-4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}	
			}
			for(var i=13;i>=1;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=1;j-=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
		//遍历第三行
		// for(var m=0;m<3;m++){
		for(var i=14;i>=2;i-=4){
			if(N[i]){
				if(i!=14){
					N[14] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=14;i>=2;i-=4){
				if(N[i]){
					for(var j=i-4;j>=2;j-=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i]; 
								continue outer;
							}else{
								if(j!=(i-4)){
									N[i-4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=14;i>=2;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=2;j-=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
		//遍历第四行
		// for(var m=0;m<3;m++){
		for(var i=15;i>=3;i-=4){
			if(N[i]){
				if(i!=15){
					N[15] = N[i];
					N[i] = 0;
				}
				break;
			}
		}
			outer:
			for(var i=15;i>=3;i-=4){
				if(N[i]){
					for(var j=i-4;j>=3;j-=4){
						if(N[j]){
							if(N[i]==N[j]){
								N[i] = N[i]*2;
								N[j] = 0;
								score +=N[i];
								continue outer; 
							}else{
								if(j!=(i-4)){
									N[i-4] = N[j];
									N[j] = 0;
								}else{//相邻
									continue outer;
								}
							}
						}
					}
				}
			}
			for(var i=15;i>=3;i-=4){
				if(!N[i]){//第一个非0数
					for(var j=i-4;j>=3;j-=4){
						if(N[j]){
							N[i] = N[j];
							N[j] = 0;
						}
						
					}
				}
			}
		// }
	}

//键盘方向键事件
document.onkeyup =function(event){
		event.preventDefault();
		var key = event.keyCode;
		if(key == 37){//按左键
			// alert("按了←键！");
			leftMove();
			change();
		
		}
		if(key == 38){//按上键
			 // alert("按了↑键！");
			upMove();
			change();
			
		}
		if(key == 39){//按右键
			// alert("按了→键！");
			rightMove();
			change();
			
		}
		if(key == 40){//按下键
			 // alert("按了↓键！");
			downMove();
			change();
			
		}
	}

//手机滑动事件
document.ontouchstart = function(e){
	e.preventDefault();
	startX = e.changedTouches[0].pageX;
	startY = e.changedTouches[0].pageY;
} 
document.ontouchend = function(e){
	e.preventDefault();
	endX = e.changedTouches[0].pageX;
	endY = e.changedTouches[0].pageY;
	if(endX>startX && ((endX-startX)>(endY-startY))){//右滑
		rightMove();
		change();
	}else if(endX<startX && ((endX-startX)>(endY-startY))){//左滑
		leftMove();
		change();
	}else if (endY>startY && ((endY-startY)>(endX-startX))) {//上滑
		rightMove();
		change();
	}else if (endY<startY && ((endY-startY)>(endX-startX))) {//下滑
		downMove();
		change();
	}

} 


window.onload = function(){
	change();
	
}
var Btn = document.getElementById("btn");
//重新开始
Btn.onclick = function(){
	 N = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	 score = 0;//得分
	change();
}

