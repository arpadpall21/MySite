var map1 = {
    start: {edges:{A:5, C:5}},
    A: {edges:{B:4, D:2}},
    B: {edges:{D:6, finish:3}},
    C: {edges:{A:8, D:7}},
    D: {edges:{finish:1}},
    finish: {edges:{}}
}

var map2 = {
    start: {edges:{A:10}},
    A: {edges:{B:20}},
    B: {edges:{finish:30, C:1}},
    C: {edges:{A:1}},
    finish: {edges:{}}
}

var map3 = {
    start: {edges:{A:2, B:2}},
    A: {edges:{finish:2, C:2}},
    B: {edges:{A:2}},
    C: {edges:{B:-1, finish:2}},
    finish: {edges:{}}
}


function dijkstra(graph, start, target){
    let cost = {} 
    let result = {}
    let nrOfNodes = 0;
    
    for(let i in graph){
        nrOfNodes++;
        result[i] = {cost:Infinity, parent:''};
        
        if (i == start) {
            cost[i] = 0;
        } else {
            cost[i] = Infinity;
        }
    }
    
    for(let i = 0; i < nrOfNodes; i++){
        prevParent = checkNode(graph, cost, result);
    }
    
    for(let i in graph){
        graph[i].checked = false;
    }
    
    return buildRoute(result, target, nrOfNodes);
}


function checkNode(graph, cost, result){
    let chpNode = '';
    let nodeVal = Infinity;
    
    for (let i in cost){
        if (cost[i] < nodeVal) {
            chpNode = i;
            nodeVal = cost[i];
        }
    }
    
    graph[chpNode].checked = true;
    result[chpNode].cost = cost[chpNode];
    
    for(let i in graph[chpNode].edges){
        if (!graph[i].checked) {
            if (cost[i] > cost[chpNode] + graph[chpNode].edges[i]){         // if the newly calculated route is shorter we update!
                cost[i] = graph[chpNode].edges[i] + cost[chpNode];
                result[i].parent = chpNode;                                 // only update the parent if shorter route is found 
            } 
        }
    }
    
    delete cost[chpNode];
}


function buildRoute(result, target, nrOfNodes){
    let routes = {}
    
    for(let i in result){
        if (target !== true) i = target;
        
        let route = {cost:result[i].cost, route:[]};
    
        let check = i;
        let parent = result[i].parent;
        
        route.route.unshift(check);
        
        while(parent !== ''){
            route.route.unshift(parent)
            check = parent;
            parent = result[check].parent        
        }
        
        if (target !== true) return route;
        
        routes[i] = route;
    }
    
    return routes;
}

console.log( dijkstra(map3, 'start', 'finish') );   
console.log( dijkstra(map3, 'start', true) );  
