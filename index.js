#!/usr/bin/env node

import _ from 'lodash';
export default function solution(content){
  // BEGIN
  const info = content.split('\n').slice(1).map((el)=>el.slice(0,-1).split(',')).slice(0,-1)

  //Fisrt Step
  console.log(`Count: ${info.length}`)
  
  //Second Step
  console.log(`Cities: ${_.uniq(info.map((el)=>el[7]).sort()).join(', ')}`)
  
  //Third Step
  console.log(`Humidity: Min: ${Math.min(...info.map((el)=>+el[3]))}, Max: ${Math.max(...info.map((el)=>+el[3]))}`)
  
  //Fourth Step
  const hottestDay = info.sort((a, b)=> +b[1] - +a[1])[0]
  console.log(`HottestDay: ${hottestDay[0]} ${hottestDay[7]}`)
  
  //Fifth Step
  const maxTemps = info.reduce((acc, el)=>{
    if(acc[el[7]]){
      acc[el[7]].push(+el[1])
    }
    else{
      acc[el[7]] = []
    }
    return acc
  },{})
  console.log(`HottestCity: ${Object.entries(maxTemps).map((el)=>[el[0], _.meanBy(el[1])]).sort((a, b)=> b[1] - a[1])[0][0]}`) 
  // END
}