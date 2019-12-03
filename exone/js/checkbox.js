function foo(x, y) { //生成checkbox选项
					for (let i = 0; i < y.length; i++) {
						let checkbox = document.createElement("input");
						checkbox.setAttribute('type', 'checkbox');
						let myText = document.createTextNode(y[i].text);
						let dodevalue = myText.nodeValue;
						if (dodevalue != "全选") {
							checkbox.setAttribute("Select-type", "one");
						} else {
							checkbox.setAttribute("Select-type", "all");
						}
						if (x == "box1") {
							regionbox.appendChild(checkbox);
							regionbox.appendChild(myText);
						} else if (x == "box2") {
							productbox.appendChild(checkbox);
							productbox.appendChild(myText);
						}
					}
				}
				let bar = function bar(e) {
					let numCheck = this.getElementsByTagName('input');
					if (e.target.type == "checkbox") {
						let isoneall = e.target.getAttribute("Select-type");
						if (isoneall === "one") {
							let count = [];
							for (let i = 0; i < numCheck.length - 1; i++) {
								if (numCheck[i].checked === true) {
									count.push(numCheck[i]);
								}
							}
							if (e.target.checked === false) {
								if (count.length === 0) {
									e.preventDefault();
									return;
								}
				
							}
							if (count.length < 3) { //决定全选checbox的状态					
								numCheck[numCheck.length - 1].checked = false;
							}
							if (count.length === 3) {
								numCheck[numCheck.length - 1].checked = true;
							}
				
						} else {
							if (e.target.checked) {
								for (let i = 0; i < numCheck.length - 1; i++) {
									numCheck[i].checked = true;
								}
							} else {
								for (let i = 0; i < numCheck.length - 1; i++) {
									numCheck[i].checked = false;
								}
							}
						}
				
						maketable();
					}
				}