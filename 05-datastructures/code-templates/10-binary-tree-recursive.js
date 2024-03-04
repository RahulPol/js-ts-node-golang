// Binary tree: DFS (recursive)

let dfs = (root) => {
  if (!root) {
    return;
  }

  let ans = 0;

  // do logic
  dfs(root.left);
  dfs(root.right);
  return ans;
};
