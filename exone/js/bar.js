function makeBarchart(reg,pro) {
			 let drawBar=document.getElementById("svg-wrapper");
			 drawBar.innerHTML='';
			 let chartDivh=320;//绘制区域高度
			 let chartDivw=520;//绘制区域宽度
			 let xwidth=500;//x轴长度
			 let yheight=320;//y轴长度
			 let wz=25;
			 let space=10;
			 let parr=[];
				for(let i=0;i<sourceData.length;i++){
					if(sourceData[i].region===reg&&sourceData[i].product===pro)
						 {parr=parr.concat(sourceData[i].sale)
						 }
					}	
							 let  maxsale=Math.max(...parr);
							 let rata=yheight/maxsale; 
							 let wharr=[];
							 wharr=parr.map(x=>x*rata);
							 
							 let svgStart = '<svg width=' + chartDivw + ' height=' + chartDivh + ' version="1.1" xmlns="http://www.w3.org/2000/svg">';
							 let xrow = "<line x1=" + 0 + " y1=" + yheight + " x2=" + xwidth + " y2=" + yheight + ' style="stroke:rgb(0,99,99);stroke-width:1"/>';
							 let xclu = "<line x1=" + 0 + " y1=" + yheight + " x2=" + 0 + " y2=" + 0 + ' style="stroke:rgb(0,99,99);stroke-width:1"/>';
							 let svgEnd='</svg>'		
							 let svg=svgStart+xrow+xclu;		
							 	for(let i=0;i<12;i++){
							 		x=space*(i+1)+wz*i
									let z=wharr[i];
							 		let rectSvg="<rect width=" + wz + " height=" + z + " x=" + x + " y=" + (yheight - z)  + ' style="fill:rgb(0,30,150);stroke-width:1;opacity: 0.5;stroke:rgb(0,0,0)" />"'
							 		svg=svg+rectSvg;
							 	}
							 let svge=svg+svgEnd;
							 	drawBar.innerHTML=svge;
					}	
