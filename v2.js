const wpmMin = 150;
const wpmMax = 160;

function timeToTurn(pastWord, currentWord){
    wpm = Math.floor( Math.random() * (wpmMax - wpmMin + 1) + wpmMin );
    //Time(second)
    let time = parseInt( (currentWord - pastWord) )/wpm * 60;
    console.log("Time(sec) to read:", time);
    return time;
}

function getWord(){
    let word = parseInt(
        document.querySelectorAll('.activeContents')[1].getAttribute('sectioncount')
    );
    console.log("Get word", word);
    return word;
}

function reading(pastWord, currentWord){

    let time = timeToTurn(pastWord, currentWord);
    setTimeout( () => {
        if(document.querySelector('button.close-book') != null){
            document.querySelcetor('button.close-book').click();
        }
        else {
            document.querySelector('button.next-slide').click();
            console.log('Turn to next page');
            setTimeout( () => {
                pastWord = currentWord;
                currentWord = getWord();
                reading(pastWord, currentWord);
            }, 3000)
        }
    }, time * 1000 );
}

function main(){

    setInterval( () => {
        if(document.querySelector('button.continue-reading') == null ){
            console.log('close afk alert');
        }
        else{ 
            document.querySelector('button.continue-reading').click();
            console.log('reading');
        }

    }, 3000);

    let pastWord = getWord();
    if(getWord() === 0){
        while( getWord() ){
            document.querySelector('button.continue-reading').click();
        }
    }
    else{
        document.querySelector('button.continue-reading').click();
    }

    let currentWord = getWord();
    reading(pastWord, currentWord);
    console.log('Start !');
}
main();