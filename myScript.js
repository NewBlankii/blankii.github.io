/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var res = [];
    candidates = candidates.sort();
    // for(var i =0; i <candidates.length;i++){
    // 	console.log(i+candidates[i]);
    // }
    
    function dfs(i,sum,ans){
        if(sum > target) return;
        if(sum == target){
            res.push([...ans]);
        }
        for(i;i < candidates.length;i++){
            sum += candidates[i];
            ans.push(candidates[i]);
            dfs(i+1,sum,ans);
            sum -= candidates[i];
            ans.pop();
            while(candidates[i+1] == candidates[i]) i++;
        }
    }

    dfs(0,0,[]);
    return res;
};


function submit(){
	var sum=document.getElementById("sum").value;
	// console.log(sum);
	var result=""
	var content=document.getElementById("content").value.trim();
	let arr=content.split(" ").map(Number);
	if (sum==""||content==""||arr.length==0) {
		document.getElementById("result").innerHTML="未找到结果";
	
	}else{
		let resultArr=combinationSum2(arr,sum);
	if (resultArr.length==0) {
		document.getElementById("result").innerHTML="未找到结果";
	}else{
		for(var i=0;i<resultArr.length;i++){
		result+="第"+(i+1)+"组数据:\t";
		// console.log("第"+(i+1)+"组数据");
		for(var j=0;j<resultArr[i].length;j++){
			result+=resultArr[i][j]+" "
			console.log(resultArr[i][j]+" ")
		}
		result+="\r\n"
		console.log("\r\n")
		}
		document.getElementById("result").innerHTML=result
	}
	}
	
	
}

