#include <bits/stdc++.h>
#define ll long long
#define ar array
using namespace std;

typedef struct tree {
int num;
struct tree* left;
struct tree* right;
tree* bs_tree(tree* node,int val,int cd = 0){
  if (node == nullptr){
      node = new tree;
      node->num = val;
      node->left = nullptr;
      node->right = nullptr;
      node->depth = cd;
      return node;
  }
  if (node->num >= val){
    node->left  = bs_tree(node->left,val,cd+1); 
    
  }else{
    node->right = bs_tree(node->right,val,cd+1);
  
  }
  return node;
  
}
uint16_t depth ;
}tree;
vector<tree*> v[100];

tree* root = nullptr;

void init_tree(){
  int val[] = {20,50,70,30,40,60,80,10,25,35,45,55,65,75,90};
  for(int i: val){
    root = root->bs_tree(root,i);  
    v[i%100].push_back(root);
  }
  
}
void bfs(tree* r){
  if (r == nullptr){
    cout << "the tree is empty" << endl;
  }
  queue<tree*> q;
  q.push(r);
  while (!q.empty())
  {
    tree* current_n = q.front(); 
    q.pop();
    cout << current_n->num <<'\n';
    (current_n->left) && (q.push(current_n->left),0);
    (current_n->right) &&(q.push(current_n->right),0);


  }
  cout << endl;
  
}
void dfs(tree* r){
  if (r == nullptr){
    cout << "the tree is empty" << endl;
  }
  stack<tree*> s;
  s.push(r);
  while(!s.empty()){
    tree* current_n = s.top();
    s.pop();
    cout << current_n->num <<'\n';
    (current_n->right) && (s.push(current_n->right),0);
    (current_n->left) && (s.push(current_n->left),0);

  }
 

  
}
void print_tree(tree* r,int level=0,bool isleft = false){
  #ifdef __dfs__
    dfs(r);
  #elif defined(__bfs__)  
    bfs(r);
  #else
    if(r == nullptr) return;
    cout << string(level * 4, ' ');
    if (level > 0) {
      for (int i = 0; i < level - 1; i++) {
            cout << "    ";
      }
      cout << (isleft ? "|-----L: " : "|+++++ R: ");
    }
    cout << (level == 0 ? r->num:r->num) << endl;
    if (r->left) {
        print_tree(r->left, level + 1, true);
    }
    if (r->right) {
        print_tree(r->right, level + 1, false);
    }

    #endif  
}


int main() {
 
 
  init_tree();
  print_tree(root); 
  return 0;
}
