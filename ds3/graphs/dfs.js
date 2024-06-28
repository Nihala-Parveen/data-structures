function DFS(graph,vertex,visited){
    visited[vertex] = true
    console.log(vertex);
    for ( let neighbour of graph[vertex]){
        if(!visited[neighbour]){
            DFS(graph,neighbour,visited)
        }
    }
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

let visited = {}
DFS(graph,'A',visited)