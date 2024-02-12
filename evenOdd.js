const input = [21,22,23,24,25,26,45,78]
const ans = input.filter((n)=>{
if(n % 2 != 0){
	return true;
}
else{
	return false;  
}})
const ans2 = input.map((n)=>{
return n + 2;
})
console.log(ans);
console.log(ans2);
