$('#header').html('Hi friend, try edit me!')
	function MakeHeap(array,size,root)
	{
		let largest = root;
		let left = root * 2 + 1;
		let right = root * 2 + 2;

		if(right < size && array[largest]<array[right])
			largest = right;


		if(left < size && array[largest]<array[left])
			largest = left;

		if(largest != root)
		{
			let toSwap = array[root];
			array[root] = array[largest];
			array[largest] = toSwap;
			MakeHeap(array,size,largest);
		}
	}

	function Sort(array)
	{
		let size = array.length;

		for(let i = size ;i >= 0; i--)
		{
			MakeHeap(array,size,i);
		}

		for(let i = size-1; i>=0; i--)
		{
			let swap = array[i];
			array[i] = array[0];
			array[0] = swap;
			MakeHeap(array,i,0);
		}
	}
let a = [11, 2, 3, 18, 15, 8, 4, 5, 8, 1, 24, -1];
Sort(a);
console.log(a.join());