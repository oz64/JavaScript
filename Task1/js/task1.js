/**
 * Created by Oz64 on 16/11/2015.
 */

var sumRecursive = function(arg, index)
{
    if(index == 0)
        return arg[0];
    else
        return arg[index] + sumRecursive(arg, index-1);
}

var minRecursive = function(arg, index) {
    if (index == 0)
        return arg[0];
    else
    {
        if (arg[index] < minRecursive(arg, index-1))
            return arg[index];
        else
            return minRecursive(arg, index-1);
    }
}

var maxRecursive = function(arg, index) {
    if (index == 0)
        return arg[0];
    else
    {
        if (arg[index] > maxRecursive(arg, index-1))
            return arg[index];
        else
            return maxRecursive(arg, index-1);
    }
}

var avg = function(arg, index){
    return (sumRecursive(arg,index))/(index+1);
}




var evaluate = function(){
    console.log('arg: ',arguments);
    console.log('The sum of all arguments is: ',sumRecursive(arguments,arguments.length-1));
    console.log('The min of all arguments is: ',minRecursive(arguments,arguments.length-1));
    console.log('The max of all arguments is: ',maxRecursive(arguments,arguments.length-1));
    console.log('The avg of all arguments is: ',avg(arguments,arguments.length-1));

}