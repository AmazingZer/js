let newarrB = [];
        let newarrC = [];

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
        			newarrB = Array.from(new Set(newarrB));
        			let index = newarrB.indexOf(x);
        			if (index > -1) {
        				newarrB.splice(index, 1);
        			}
        		}
        	}
        	for (let i = 0; i < ck1.length - 1; i++) {
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
        	if (newarrB.length === 1 && newarrC.length !== 1) {
        		let row = thead.insertRow(0);
        		for (let i = 0; i < arrthes.length; i++) {
        			let cell = row.insertCell(row.cells.length);
        			cell.innerHTML = arrthesx[i];
        		}
        		let xarr = getdata();
        		for (let i = 0; i < xarr.length; i++) {
        			let tr = newTable.insertRow(newTable.rows.length);
        			let td = tr.insertCell(0);
        			td.innerHTML = xarr[i].region;
        			let td1 = tr.insertCell(1);
        			td1.innerHTML = xarr[i].product;
        			for (let j = 0; j < 12; j++) {
        				let td3 = tr.insertCell(j + 2);
        				td3.innerHTML = xarr[i].sale[j];
        			}
        		}

        	} else {
        		let row = thead.insertRow(0);
        		for (let i = 0; i < arrthes.length; i++) {
        			let cell = row.insertCell(row.cells.length);
        			cell.innerHTML = arrthes[i];
        		}
        		let xarr = getdata();
        		for (let i = 0; i < xarr.length; i++) {
        			let tr = newTable.insertRow(newTable.rows.length);
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
        }
				
