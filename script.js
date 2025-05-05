function mincost(arr)
{ 
	let cost=0;
	arr.sort((a,b)=>a-b);
	while(arr.length>1){
		let a=arr.shift()
		let b=arr.shift()
		cost+=a+b;
		arr.push(a+b);
		arr.sort((a,b)=>a-b);
	}
	return cost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
