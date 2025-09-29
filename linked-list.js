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
	contains(value) {
		let traverse = this.#head;
		while (traverse.nextNode != null) {
			if (traverse.value === value) return true;
			traverse = traverse.nextNode;
		}
		if (traverse.value === value) return true; //check for last node
		return false;
	}
	find(value) {
		let traverse = this.#head;
		let index = 0;
		while (traverse.nextNode != null) {
			if (traverse.value === value) return index;
			traverse = traverse.nextNode;
			index++;
		}
		if (traverse.value === value) return index; //check for last node
		return null;
	}
	toString() {
		let traverse = this.#head;
		let listString = "";
		while (traverse.nextNode != null) {
			listString = listString + `( ${traverse.value} ) -> `;
			traverse = traverse.nextNode;
		}
		listString = listString + `( ${traverse.value} ) -> null`;
		return listString;
	}
	insertAt(value, index) {
		let node = new Node(value);
		let traverse = this.#head;
		let listIndex = 0;
		while (listIndex < index - 1 && traverse.nextNode != null) {
			traverse = traverse.nextNode;
			listIndex++;
		}
		node.nextNode = traverse.nextNode;
		traverse.nextNode = node;
	}
}

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);
list1.insertAt(29, 1);

console.log(list1.toString());
