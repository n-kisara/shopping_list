'use strict';

function memo() {
    const memo = prompt('入力して下さい');
    let li = document.createElement('li');
     li.textContent = memo;
    const memoList = document.getElementById('memo_list');
    memoList.appendChild(li); 
}

const btn = document.getElementById('btn');
btn.addEventListener('click',memo);