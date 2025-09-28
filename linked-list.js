import { Node } from "./node.js";

class LinkedList {
	constructor() {
		this.listArr = [];
		this.head = null;
	}
	append(value) {
		let node = new Node(value);
		let i = 0;
		while (i < this.listArr.length && this.listArr[i].nextNode != null) i++;
		this.listArr[i] = node;
	}
}

let list1 = new LinkedList();
list1.append(1);
console.log(list1.listArr);
