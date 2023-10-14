class Essential {
	gid = "";
	systemId = "";

	isIdentifiable(): boolean {
		return this.gid.length > 0;
	}

	isPersisted(): boolean {
		return this.systemId.length > 0;
	}

	isWorkable(): boolean {
		return this.isIdentifiable() && this.isPersisted();
	}
}

class Wild {
	gid = "";
	systemId = "";
	name = "hello";

	print(): void {
		console.log(`${this.gid} - ${this.systemId} - ${this.name}`);
	}
}

class Mild extends Essential {
	name = "Howdie";

	print(): void {
		console.log(`${this.gid} - ${this.systemId} - ${this.name}`);
	}
}

const wild = new Wild();
wild.gid = "g123";
wild.systemId = "s789";
wild.print();

// TypeError: wild.isWorkable is not a function
console.log((wild as unknown as Essential).isWorkable());

const mild = new Mild();
mild.gid = "g123";
mild.systemId = "s789";
mild.print();

console.log(mild.isWorkable());
