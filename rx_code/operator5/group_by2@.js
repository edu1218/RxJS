var people = [
    {name: 'Anna', score: 96, subject: 'Chinese' }, 
    { name: 'Jerry', score: 80, subject: 'English' },
    {name: 'Anna', score: 90, subject: 'Math'},
    { name: 'Jerry', score: 100, subject: 'Math' },
    {name: 'Anna', score: 100, subject: 'English'},
    {name: 'Jerry', score: 90, subject: 'Chinese' }, 
];
const Rx=require('rxjs/Rx')
var source = Rx.Observable.from(people)
						   .zip(//將元素攤在時間間隔上處理
						     Rx.Observable.interval(300), 
						     (x, y) => x);

var example = source
  .groupBy(person => person.name)
    .map(group => group.reduce((acc, curr) => (
        { name: curr.name,score: curr.score + acc.score}
    )))
	.mergeAll();
	
example.subscribe(console.log);
/*
source : --A--B--A--B--A--B|   Observable<datas>
  
  groupBy(person => person.name)   
                                   
     
       : --a--------b------|       
           \        \
           \         B--B--B| 
            A--A--A--| 
                                     
	   map(group => group.reduce(...)) 
	     
       : --a---------b------|    
           \         \         
           o|        o| 
        
             mergeAll()
example: --o---------o------|   
*/