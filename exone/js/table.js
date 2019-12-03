				let newarrB = [];//选中的商品
				let newarrC = [];//选中的地区
        function maketable() { //渲染表格
        	tdiv.removeChild(tdiv.childNodes[0]);
        	let newTable = document.createElement("table");
        	let arrthes = ["商品", "地区", "1月", "2月", "3月", " 4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        	let arrthesx = ["地区", "商品", "1月", "2月", "3月", " 4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        	let thead = newTable.createTHead();
        	let ck1 = regionbox.getElementsByTagName('input');
        	let ck2 = productbox.getElementsByTagName('input');

        	for (let i = 0; i < ck1.length - 1; i++) {
        		if (ck1[i].checked === true) {
        			let x = ck1[i].nextSibling.nodeValue;
        			newarrB.push(x);
        		} else {
        			let x = ck1[i].nextSibling.nodeValue;
        			newarrB = Array.from(new Set(newarrB));//去除重复元素
        			let index = newarrB.indexOf(x);
        			if (index > -1) {
        				newarrB.splice(index, 1);
        			}
        		}
        	}
        	for (let i = 0; i < ck2.length - 1; i++) {
        		if (ck2[i].checked === true) {
        			let x = ck2[i].nextSibling.nodeValue;
        			newarrC.push(x);
        		} else {
        			let x = ck2[i].nextSibling.nodeValue;
        			newarrC = Array.from(new Set(newarrC));
        			let index = newarrC.indexOf(x);
        			if (index > -1) {
        				newarrC.splice(index, 1);
        			}
        		}
        	}
        	if (newarrB.length === 1 && newarrC.length !== 1) {//判断商品和地区的选中个数
        		let row = thead.insertRow(0);
        		for (let i = 0; i < arrthes.length; i++) {
        			let cell = row.insertCell(row.cells.length);
        			cell.innerHTML = arrthesx[i];
        		}
        		let xarr = getdata();
						
        		for (let i = 0; i < xarr.length; i++) {
        			let tr = newTable.insertRow(newTable.rows.length);
							let x=xarr[i].region;
							let y=xarr[i].product;
							tr.setAttribute('region',x);
							tr.setAttribute('product',y);
        			let td = tr.insertCell(0);
        			td.innerHTML = xarr[i].region;
        			let td1 = tr.insertCell(1);
        			td1.innerHTML = xarr[i].product;
        			for (let j = 0; j < 12; j++) {
        				let td3 = tr.insertCell(j + 2);
        				td3.innerHTML = xarr[i].sale[j];
        			}
        		}
        	} 
					else {
        		let row = thead.insertRow(0);
        		for (let i = 0; i < arrthes.length; i++) {
        			let cell = row.insertCell(row.cells.length);
        			cell.innerHTML = arrthes[i];
        		}
        		let xarr = getdata();
        		for (let i = 0; i < xarr.length; i++) {
        			let tr = newTable.insertRow(newTable.rows.length);
						let x=xarr[i].region;
						let y=xarr[i].product;
						tr.setAttribute('region',x);
						tr.setAttribute('product',y);
        			let td = tr.insertCell(0);
        			td.innerHTML = xarr[i].product;
        			let td1 = tr.insertCell(1);
        			td1.innerHTML = xarr[i].region;
        			for (let j = 0; j < 12; j++) {
        				let td3 = tr.insertCell(j + 2);
        				td3.innerHTML = xarr[i].sale[j];
        			}
        		}


        	}

        	tdiv.appendChild(newTable);
					getTable();
        }
	  function getTable() {//合并单元格
	    var tbtble = document.getElementById("table-wrapper");
			let tb=tbtble.getElementsByTagName('table')[0];
	    trL = tb.rows.length;
	    tdL = tb.rows[0].cells.length;
	    var c;
	    var count = 0
	    for (let td = tdL - 1; td >= 0; td--) {
	      for (var tr = 0; tr < trL; tr++) {
	        if (count !== 0 && c && c !== tb.rows.length - 1) {
	          tr = c
	        }
	        count = findSame(tb, tr, td)
	        if (count !== 0) c = count + 2
	        if (count === 0) { }
	        else {
	          tb.rows[tr].cells[td].rowSpan = count + 1
	          for (var i = 1; i <= count; i++) {
	            tb.rows[tr + i].removeChild(tb.rows[tr + i].cells[td])
	          }
	
	        }
	        function findSame(tb, tr, td) {
	          count = 0
	          /*纵向比较*/
	          function z(tb, tr, td) {
	            if (td === 0) return true
	            if (tb.rows[tr].cells[td - 1].innerHTML === tb.rows[tr + 1].cells[td - 1].innerHTML) {
	              return z(tb, tr, td - 1)
	            } else {
	              return false
	            }
	          }
	          /*横向比较*/
	          function h(tb, tr, td, ) {
	            if (tb.rows[tr + 1] && tb.rows[tr].cells[td] && tb.rows[tr + 1].cells[td] && tb.rows[tr].cells[td].innerHTML === tb.rows[tr + 1].cells[td].innerHTML) {
	              if (z(tb, tr, td)) {
	                count++
	                return h(tb, tr + 1, td)
	              } else {
	                return count
	              }
	            } else {
	              return count
	            }
	          }
	
	          count = h(tb, tr, td)
	          return count	
	        }
	      }
	
	    }
	  }	
	 
	
