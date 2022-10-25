async function unfollow_All() {
	let followingList = document.getElementsByClassName("_aacl _aaco _aacw _aad6 _aade")
	for(let i in followingList){
		await followingList[i].click();
		await document.getElementsByClassName("_a9-- _a9-_")[0].click();
	}
}

unfollow_All()
