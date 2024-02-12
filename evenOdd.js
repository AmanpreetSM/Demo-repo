const input = [21,22,23,24,25,26,45,78]
const ans = input.map((n)=>{
if(n % 2 != 0){
	return true;
}
else{
	return false;  
}})
console.log(ans);
