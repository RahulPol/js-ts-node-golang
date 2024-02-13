/**
 * Depth First Search [DFS]
DFS algorithm works in a manner similar to preorder traversal of the trees. Like preorder
traversal, internally this algorithm also uses stack.
Let us consider the following example. Suppose a person is trapped inside a maze. To come out
from that maze, the person visits each path and each intersection (in the worst case). Let us say the
person uses two colors of paint to mark the intersections already passed. When discovering a new
intersection, it is marked grey, and he continues to go deeper.
After reaching a “dead end” the person knows that there is no more unexplored path from the grey
intersection, which now is completed, and he marks it with black. This “dead end” is either an
intersection which has already been marked grey or black, or simply a path that does not lead to
an intersection.
The intersections of the maze are the vertices and the paths between the intersections are the
edges of the graph. The process of returning from the “dead end” is called backtracking. We are
trying to go away from the starting vertex into the graph as deep as possible, until we have to
backtrack to the preceding grey vertex. In DFS algorithm, we encounter the following types of
edges.

Tree edge: encounter new vertex
Back edge: from descendent to ancestor
Forward edge: from ancestor to descendent
Cross edge: between a tree or subtrees

For most algorithms boolean classification, unvisited/visited is enough (for three color
implementation refer to problems section). That means, for some problems we need to use three
colors, but for our discussion two colors are enough.

Initially all vertices are marked unvisited (false). The DFS algorithm starts at a vertex u in the
graph. By starting at vertex u it considers the edges from u to other vertices. If the edge leads to
an already visited vertex, then backtrack to current vertex u. If an edge leads to an unvisited
vertex, then go to that vertex and start processing from that vertex. That means the new vertex
becomes the current vertex. Follow this process until we reach the dead-end. At this point start
backtracking

The process terminates when backtracking leads back to the start vertex. The algorithm based on
this mechanism is given below: assume Visited[] is a global array.

 */

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    } else {
      console.log("Vertex already exists!");
    }
  }

  addEdge(from, to) {
    this.adjacencyList.get(from).push(to);
  }

  bfs() {}

  print() {
    for (let [vertex, edges] of this.adjacencyList) {
      let connections = [...edges].join(", ");
      console.log(`${vertex} --> ${connections}`);
    }
  }
}

const graph = new Graph();
const nodes = ["a", "b", "c", "d"];
const edges = [
  ["a", "b"],
  ["b", "d"],
  ["d", "c"],
  ["c", ""],
];

nodes.forEach((node) => graph.addVertex(node));
edges.forEach((edge) => graph.addEdge(...edge));
graph.print();

// let visited = [];

// const DFS = (u, edges) => {
//   visited[u] = true;
// };

// const DFSTraversal = (n, edges) => {
//   for (i = 0; i < n - 1; i++) {
//     visited.push(false);
//   }

//   for (i = 0; i < n; i++) {
//     if (!visited[i]) {
//       DFS(i, edges);
//     }
//   }
// };

// DFSTraversal(4, [
//   [1, 2],
//   [2, 4],
//   [2, 3],
//   [3, 4],
// ]);
