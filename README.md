# xreading_autoClick

## step 1

You just need to customize **wpmMin** and **wpmMax**
```js
const wpmMin = 150;
const wpmMax = 160;
```
Reading Time is between [wpmMin, wpmMax], including **wpmMin** and **wpmMax**

## step 2

open developer tool
>how to open
1. ctrl + shift + i
2. F12

## step 3

copy the code and then paste on console
```js
const wpmMin = 150;
const wpmMax = 160;

function timeToTurn(pastWord, nowWord){
    if(pastWord == nowWord)
        return 1;
    let wpm = Math.random() * (wpmMax - wpmMin + 1) + wpmMin;
    let time = (nowWord - pastWord) / wpm * 60; 
    return time;
}
function reading(pastWord, nowWord, totalWord){
    console.log("Read time:", timeToTurn(pastWord, nowWord), "sec");
    setTimeout( () => {
        if( document.querySelector('.close-book').style.display == ''){
            document.querySelector('.close-book').click();
            console.log('Done !');
        }
        else if(totalWord <= nowWord){
            document.querySelector('button.next-slide').click();
            
            setTimeout( () => {
                reading(pastWord, nowWord, totalWord);
            }, 1000);
        }
        else{
            pastWord = nowWord;
            pastWord = parseInt( pastWord );
            // console.log(pastWord);
            
            document.querySelector('button.next-slide').click();
            console.log("Turn to next page");

            nowWord = document.querySelectorAll('.activeContents')[1].getAttribute('sectioncount');
            nowWord = parseInt( nowWord );
            // console.log(nowWord);
            setTimeout( () => {
                reading(pastWord, nowWord, totalWord);
            }, 2000)
        }
    },timeToTurn(pastWord, nowWord) * 1000)
}

function main(){

    //check whether afk alert pop up
    setInterval( () => {
        if(document.querySelector('button.continue-reading') == null ){
            console.log('close afk alert');
        }
        else{ 
            document.querySelector('button.continue-reading').click();
            console.log('reading');
        }

    }, 3000);

    var showTopWord = document.querySelector('#count_signal0').getAttribute('sectioncount');
    var pastWord = parseInt( showTopWord.split('/')[0] );
    var nowWord = parseInt( showTopWord.split('/')[0] );
    const totalWord = parseInt( showTopWord.split('/')[1] );
    
    reading(pastWord, nowWord, totalWord);
    console.log('Start !');
}
main();

```
## enjoy it!
