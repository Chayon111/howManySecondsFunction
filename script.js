
// Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 60 * 60;
}
console.log(howManySeconds(2));



function solution(year) {
    const century = Math.ceil(year / 100);
    return century;
}
console.log(solution(1905));
