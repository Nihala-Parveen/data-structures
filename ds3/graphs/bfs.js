function BFS(graph , vertex) {
    let queue = [ vertex ] 
    let visited = new Set(vertex)

    while(queue.length){
        let curr = queue.shift()
        console.log(curr);

        for ( let neighbour of graph[curr]){
            if ( !visited.has(neighbour) ) {
                queue.push(neighbour)
                visited.add(neighbour)
            }
        }
    }
    return null 
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B','G'],
    'E': ['B', 'F'],
    'F': ['C', 'E'] ,
    'G': ['A','E']
};

BFS(graph,'A')