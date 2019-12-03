	function makeLinechart(reg,pro) {
		let canvas = document.getElementById('canvas');	
		canvas.width=canvas.width;
		let parr=[];
		for(let i=0;i<sourceData.length;i++){
			if(sourceData[i].region===reg&&sourceData[i].product===pro)
				 {parr=parr.concat(sourceData[i].sale)
				 }
			}	
		if (canvas.getContext){
		var ctx = canvas.getContext('2d');	
		   ctx.beginPath();
			 ctx.strokeStyle="#333333";
		    ctx.moveTo(0,0);
				ctx.lineWidth=1.5;
		    ctx.lineTo(0,330);
		    ctx.lineTo(520,330);
				ctx.stroke();
				// let arr=[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
				let maxsale=Math.max(...parr);//最大销量
				let p=310/maxsale;//销售量与坐标高度比例
				let yarr=parr.map(x=>x*p);//y轴坐标
				let a,b;//当前数据点坐标		
				function dopoint(){
					let xpoint=35;
					for(let i=0;i<12;i++){	
						let ypoint=320-yarr[i];
						drawpoint(ctx,xpoint,ypoint);
						xpoint=xpoint+35;
					}
				}
			dopoint();  
		
		
		}
			 
		function drawpoint(ctx,xpoint,ypoint){ 		
							 		ctx.beginPath();
									ctx.lineWidth=1.5;
							 		ctx.arc(xpoint,ypoint,2.5,0,2*Math.PI);
							 		ctx.stroke();
							 	if(xpoint!=35){
							 		ctx.beginPath();
							 		ctx.moveTo(xpoint,ypoint);
							 		ctx.lineTo(a,b);
							 		ctx.stroke();
							 	}
							 		 a=xpoint;
							 		 b=ypoint;
							 		
							 	}
								
							
	}	