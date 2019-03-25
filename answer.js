let input = {
	"r1": [0, 0, 0, 8, 0, 0, 1, 2, 9],
	"r2": [0, 0, 5, 0, 0, 0, 0, 0, 4],
	"r3": [4, 0, 0, 1, 9, 0, 0, 3, 0],
	"r4": [0, 0, 0, 0, 0, 0, 0, 8, 0],
	"r5": [0, 0, 0, 3, 0, 5, 2, 7, 0],
	"r6": [0, 0, 0, 0, 2, 0, 0, 0, 0],
	"r7": [1, 3, 0, 9, 0, 0, 0, 4, 0],
	"r8": [0, 8, 0, 0, 6, 0, 0, 0, 0],
	"r9": [0, 0, 6, 4, 0, 0, 0, 0, 0]
}

function SolutionIndependence(input) {
	let r1 = input.r1;
	let r2 = input.r2;
	let r3 = input.r3;
	let r4 = input.r4;
	let r5 = input.r5;
	let r6 = input.r6;
	let r7 = input.r7;
	let r8 = input.r8;
	let r9 = input.r9;

	let out_r1 = new Set();;
	let r = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	r.map((item, index) => {
		for (let i of r1) {
			console.log('item', item, i);
			if (item !== i) {
				out_r1.add(item);
			}
		}
	})
	console.log('out_r1', out_r1)
}

SolutionIndependence(input);