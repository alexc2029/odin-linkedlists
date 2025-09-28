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
	size() {
		let traverse = this.#head;
		let listSize = 1;
		while (traverse.nextNode != null) {
			traverse = traverse.nextNode;
			listSize++;
		}
		return listSize;
	}
	head() {
		return this.#head;
	}
	tail() {
		let traverse = this.#head;
		while (traverse.nextNode != null) traverse = traverse.nextNode;
		return traverse;
	}
	at(index) {
		if (index >= this.size())
			return { error: new Error("Index must be less than list size!") };
		else {
			let traverse = this.#head;
			let listIndex = 0;
			while (listIndex < index && traverse.nextNode != null) {
				traverse = traverse.nextNode;
				listIndex++;
			}
			return traverse;
		}
	}
	pop() {
		let traverse = this.#head;
		while (traverse.nextNode.nextNode != null) traverse = traverse.nextNode;
		traverse.nextNode = null;
	}
}

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);

console.log(list1.head());
console.log(list1.size());
console.log(list1.tail());
