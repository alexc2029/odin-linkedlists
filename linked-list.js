import { Node } from "./node.js";

class LinkedList {
	#head = null;
	append(value) {
		let node = new Node(value);
		if (this.#head === null) this.#head = node;
		else {
			let traverse = this.#head;
			while (traverse.nextNode != null) traverse = traverse.nextNode;
			traverse.nextNode = node;
		}
	}
	prepend(value) {
		let node = new Node(value);
		if (this.#head === null) this.#head = node;
		else {
			node.nextNode = this.#head;
			this.#head = node;
		}
	}
	head() {
		return this.#head;
	}
}

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);
list1.prepend(5);
list1.append(4);

console.log(list1.head());
