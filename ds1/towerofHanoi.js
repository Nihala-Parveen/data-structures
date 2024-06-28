function toweOfHanoi( n , from , to , using ) {
    if ( n === 1 ){ 
        console.log(`Move disk 1 from ${from} to ${to}`);
        return
    }
    toweOfHanoi(n-1 , from , using , to)
    console.log(`Move disk ${n} from ${from} to ${to}`);
    toweOfHanoi(n-1 , using , to ,from )
}
toweOfHanoi(3 , 'A' , 'C' , 'B')

