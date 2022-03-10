const wpm = 150;

function timeToTurn(pastWord, currentWord){
    console.log("Time to read:", parseInt( (currentWord - pastWord))/wpm * 60 );
    return parseInt((currentWord - pastWord)/ wpm);
}

function getWord(){
    let word = parseInt(document.querySelectorAll('.activeContents')[1].getAttribute('sectioncount'));
    console.log("Get word", word);
    return word;
}

function reading(currentWord){

    setTimeout( () => {
        currentWord = getWord();

        if(document.querySelector('button.close-book') != null){
            document.querySelcetor('button.close-book').click();
        }
        else {
            document.querySelector('button.next-slide').click();
            setTimeout( () => {
                reading(currentWord);
            }, 3000)
        }
    }, timeToTurn(currentWord, getWord()) * 60 * 1000 );
}

function main(){

    setInterval( () => {
        if(document.querySelector('button.continue-reading') == null ){
            console.log('watching');
        }
        else{ 
            document.querySelector('button.continue-reading').click();
            console.log('still reading');
        }

    }, 2000);

    let currentWord = getWord();
    reading( currentWord );
    console.log('Start !');
}
main();
