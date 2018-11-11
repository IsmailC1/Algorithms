class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 class BinarySearchTree{
     constructor(){
         this.root = null;
     }
     insert(value){
         var newNode = new Node(value);
         if(this.root === null){
             this.root = newNode;
             return this;
         } else {
             var current = this.root;
             while(true){
                 if(value === current.value) return undefined;
                 if(value < current.value){
                     if(current.left === null){
                         current.left =newNode;
                         return this;
                     } else {
                         current = current.left;
                     }
                 }else if(value > current.value){
                     if(current.right === null){
                         current.right = newNode;
                         return this;
                     } else {
                         current = current.right;   
                     }
                 }
             }
         }
     }
     contains(value){
         if(this.root === null) return false;
         var current = this.root,
             found = false;
             while(current && !found){
                 if(value < current.value){
                     current = current.left;
                 }else if(value > current.value){
                    current = current.right;
                 }else {
                     found = true;
                 }
             }
             if(!found) return undefined;
             return current;    
     }
     BFS()
     {
         var node = this.root,
             data = [],
             queue = [];
       
       queue.push(node);
       while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
       }
       return data;
     }
     DFSPreOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            data.push(node);
            if(node.left)  traverse(node.left);
            if(node.right) traverse(node.right);    
           }
        traverse(this.root);
        return data;
        }
        DFSPostOrder(){
            var data = [];
            function traverse(node){
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                data.push(node.value)
            }
            traverse(this.root);
            return data;
        }
        DFSInOrder(){
            var data =[];
            function traverse(node){
                node.left && traverse(node.left);
                data.push(node.value);
                node.right && traverse(node.right);
            }
            traverse(this.root);
            return data;
        }
     }
 
 
 
 
 
 var tree = new BinarySearchTree();
 tree.root = new Node(10);
 tree.root.right = new Node(15);
 tree.root.left = new Node(7);
 tree.root.left.right = new Node(9);
 // Big O of BST
 // Insertion - O(log n)
 //Searching - O(log n)   this is not the case in every situation there are some exceptions.