var arr=[1,3,4,2,5];
for(var i=0;i<=arr.length;i++)
for(var j=-1;j<arr.length;j++)
    if(arr[i]<arr[j]){
        var x=arr[i];
        arr[i]=arr[j];
        arr[j]= x;
    }
    console.log(arr);
