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
		let listSize = 0;
		while (traverse) {
			listSize++;
			traverse = traverse.nextNode;
		}
		return listSize;
	}
	head() {
		return this.#head;
	}
	tail() {
		let traverse = this.#head;
		while (traverse && traverse.nextNode != null)
			traverse = traverse.nextNode;
		return traverse;
	}
	at(index) {
		if (index >= this.size())
			return { error: new Error("Index must be less than list size!") };
		else {
			let traverse = this.#head;
			let listIndex = 0;
			while (listIndex < index && traverse && traverse.nextNode != null) {
				traverse = traverse.nextNode;
				listIndex++;
			}
			return traverse;
		}
	}
	pop() {
		let traverse = this.#head;
		while (
			traverse &&
			traverse.nextNode != null &&
			traverse.nextNode.nextNode != null
		)
			traverse = traverse.nextNode;
		traverse.nextNode = null;
	}
	contains(value) {
		let traverse = this.#head;
		while (traverse) {
			if (traverse.value === value) return true;
			traverse = traverse.nextNode;
		}
		return false;
	}
	find(value) {
		let traverse = this.#head;
		let index = 0;
		while (index < this.size() - 1 && traverse) {
			if (traverse.value === value) return index;
			traverse = traverse.nextNode;
			index++;
		}
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
		if (index >= this.size())
			return { error: new Error("Index must be less than list size!") };
		let node = new Node(value);
		if (!this.#head) {
			this.#head = node;
		} else {
			let traverse = this.#head;
			let listIndex = 0;
			while (
				listIndex < index - 1 &&
				traverse &&
				traverse.nextNode != null
			) {
				traverse = traverse.nextNode;
				listIndex++;
			}
			node.nextNode = traverse.nextNode;
			traverse.nextNode = node;
		}
	}
	removeAt(index) {
		if (index >= this.size())
			throw new Error("Index must be less than list size!");
		let traverse = this.#head;
		if (index === 0) {
			if (traverse.nextNode === null) this.#head = null;
			else this.#head = this.#head.nextNode;
		} else {
			let listIndex = 0;
			while (
				listIndex < index - 1 &&
				traverse &&
				traverse.nextNode != null
			) {
				traverse = traverse.nextNode;
				listIndex++;
			}
			if (traverse && traverse.nextNode !== null) {
				traverse.nextNode = traverse.nextNode.nextNode;
			} else {
				traverse.nextNode = null;
			}
		}
	}
}
