/*
Introduction
Bob is a lackadaisical teenager. He likes to think that he's very cool. 
And he definitely doesn't get excited about things. That wouldn't be cool.

When people talk to him, his responses are pretty limited.

Instructions
Your task is to determine what Bob will reply to someone when they say something to him 
or ask him a question.

Bob only ever answers one of five things:

"Sure." This is his response if you ask him a question, such as "How are you?" 
The convention used for questions is that it ends with a question mark.
"Whoa, chill out!" This is his answer if you YELL AT HIM. 
The convention used for yelling is ALL CAPITAL LETTERS.
"Calm down, I know what I'm doing!" This is what he says if you yell a question at him.
"Fine. Be that way!" This is how he responds to silence. 
The convention used for silence is nothing, or various combinations of whitespace characters.
"Whatever." This is what he answers to anything else.
*/

// lessons, nao levei em conta os requisitos, possibilidades, 
// de ter textos so com numeros que nao tem lower e upper case
// trim para todas as mensagens etc

export function hey(message: string): string {
    message = message.trim()
    if (message.match(/[a-zA-Z]/g)) {
        if (message === message.toUpperCase() && message.endsWith('?')) {
            return "Calm down, I know what I'm doing!"
        }  else if (message === message.toUpperCase()) {
            return 'Whoa, chill out!'
        }
    }
    if (message.endsWith('?')) {
        return 'Sure.'
    } else if (message.length === 0) {
        return 'Fine. Be that way!'
    } else {
        return 'Whatever.'
    }
        
}

console.log(hey('alou?'))
  