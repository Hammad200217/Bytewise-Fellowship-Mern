function generate(){
    var quotes={
        "- Maya Angleo" :'"The truth is, no one of us can be free until everybody is free"',

        "- john Straut Mill" :'"A man who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself"',

        "- Nelson Mandela" :'"For to be free is not merely to cast off ones chains but to live in a way that respects and enhances the freedom of others."',

        "- Richard Bach" :'"True love stories never have endings"'

    }
    var authors= Object.keys(quotes);
    var author= authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
     document.getElementById("quote").innerHTML=quote;
     document.getElementById("author").innerHTML=author;



}