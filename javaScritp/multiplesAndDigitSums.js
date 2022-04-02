let multipleAndDigitSums = (i) => {
	let N = [];
	let count = 1;

	for (let resultado = 0; resultado !== 100; count++) {// encontrar multiplos de (i) hasta 100 o menor que 100
		resultado = i * count;
		if (resultado > 100) { break; }
		N.push(resultado);
	}
	let Nsuma = []
	N.map((nums) => {
		String(nums /= 10).split(".");
		if (nums[1] == undefined) {
			nums = String(Number(nums /= 100)).split(".")
		}
		Nsuma.push(Number(nums[0]) + Number(nums[1]))
	})

	let tmp = Nsuma.reduce((tmp, n) => n + tmp);
	//return(N, Nsuma, tmp)
	console.log(N, Nsuma, tmp);


}


let vowelCount = (str) => {
	let vowel = str.match(/[a,e,i,o,u]/gi);
	if (!vowel) { vowel = [] }
	vowelCount = vowel.length
	console.log(vowelCount)


}


console.time("multipleAndDigitSums");
multipleAndDigitSums(30)

console.timeEnd("multipleAndDigitSums");
vowelCount("abadracabadra")
