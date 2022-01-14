## 拷贝
JSON 对象的 parse 和 stringify都是深拷贝（var obj_json = JSON.parse(JSON.stringify(obj));）    
    会忽略undefined
    会忽略symbol
    不能序列化函数
    不能解决循环引用的对象

var obj = {name:'cancan',age:23,company : { name : '阿里', address : '杭州'} };
var obj_json = JSON.parse(JSON.stringify(obj));
console.log(obj === obj_json);
obj.company.name = "cancan82";
obj.name = "haha";
console.log(obj);
console.log(obj_json);

浅拷贝（如果obj只有一层的时候，是深拷贝）
1. var obj = {
    a: {
        name: 'Fanfei',
        age: 22
    }
};

var newobj = Object.assign({}, obj);
newobj.a.name = "Jason";
console.log(obj.a.name) //Jason

2. let arr = [1, 3, {
    name: 'Fanfei'
}];
let arr2 = arr.concat()
arr2[2].name = "Jason"
console.log(arr) //[ 1, 3, { name: 'Jason' } ]

3. let arr = [1, 3, {
    name: 'Fanfei'
}];
let arr2 = arr.slice()
arr2[2].name = 'Jason'
console.log(arr) //[ 1, 3, { name: 'Jason' } ]
console.log(arr2) //[ 1, 3, { name: 'Jason' } ]

修改对象会修改原对象的，但是第一层上的基本数据类型修改不会影响

函数库lodash实现深拷贝
let _ = require('lodash');
let obj3 = _.cloneDeep(obj2)

自己递归实现深拷贝
递归方法实现深度克隆原理:遍历对象，数组直到里面都是基本数据类型，然后再去复制，就是深度拷贝.
function deepCopy(obj) {
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o != null
    }
    if (!isObject(obj)) {
        throw new Error('非对象')
    }
    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : {...obj
    }
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepCopy(obj[key]) : obj[key]
    })
    return newObj
}
let obj = {
    a: [1, 2, 3],
    b: {
        c: 2,
        d: 3
    }
}
let newObj = deepCopy(obj)
newObj.b.c = 1
console.log(obj.b.c)//2

## js算法
### 冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
### 插入排序（Insertion Sort）
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
### 快速排序（Quick Sort）
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

## 递归
function sum(num){
    if(num<=1){    
        return 1;  
    }else{    
        return num+sum(num-1);  
    }
}

function Fibonacci (n) {
  if ( n <= 2 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
