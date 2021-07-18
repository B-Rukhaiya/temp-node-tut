 //*******************//
//fs(File System)

//asynchronous

const { readFile, writeFile } = require('fs');

console.log('start')
readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err)
        return;
    }
const first  = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            result
        }
        const second = result
        writeFile('./content/result-async.txt',`Here are the results ${first},  ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return 
            }
        console.log('Done with this task')
        })  
    })
})