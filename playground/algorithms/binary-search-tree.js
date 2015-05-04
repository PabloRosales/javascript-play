test("Implement a Binary Tree", function() {

    'use strict';

    var BinarySearchTree = function(data) {

        var self = this;
        self.root = null;

        function searchIterative(data, current) {
            if (data == null) return null;
            while (current != null && current.data !== data) {
                if (data < current.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            return current;
        }

        function searchRecursive(data, node) {
            if (data == null || node == null) return null;
            if (node.data === data) return node;
            if (data < node.data) {
                return searchRecursive(data, node.left);
            }
            else {
                return searchRecursive(data, node.right);
            }
        }

        function internalInOrder(node) {
            if (node !== null) {
                internalInOrder(node.left);
                console.log(node.data);
                internalInOrder(node.right);
            }
        }

        function internalPreOrder(node) {
            if (node !== null) {
                console.log(node.data);
                internalPreOrder(node.left);
                internalPreOrder(node.right);
            }
        }

        function internalPostOrder(node) {
            if (node !== null) {
                internalPostOrder(node.left);
                internalPostOrder(node.right);
                console.log(node.data);
            }
        }

        self.insert = function(d) {

            var n = new Node(d);

            if (self.root === null) {
                self.root = n;
                return;
            }

            var parent, current = self.root;

            while (true) {
                parent = current;
                if (d < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        return;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        return
                    }
                }
            }

        };

        self.iterativeSearch = function(data) {
            return searchIterative(data, self.root);
        };

        self.recursiveSearch = function(data) {
            return searchRecursive(data, self.root);
        };

        self.min = function() {
            var node = self.root;
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        };

        self.max = function() {
            var node = self.root;
            while (node.right !== null) {
                node = node.right;
            }
            return node;
        };

        self.inOrder = function(data) {
            var start = searchIterative(data || self.root.data, self.root);
            return internalInOrder(start);
        };

        self.preOrder = function(data) {
            var start = searchIterative(data || self.root.data, self.root);
            return internalPreOrder(start);
        };

        self.postOrder = function(data) {
            var start = searchIterative(data || self.root.data, self.root);
            return internalPostOrder(start);
        };

        self.remove = function() {

        };

        self.insert(data);

    };

    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    };

    var bst_1 = new BinarySearchTree(23);
    bst_1.insert(45);
    bst_1.insert(16);
    bst_1.insert(37);
    bst_1.insert(3);
    bst_1.insert(99);
    bst_1.insert(22);

    console.log('inOrder');
    bst_1.inOrder();
    console.log('preOrder');
    bst_1.preOrder();
    console.log('postOrder');
    bst_1.postOrder();

    strictEqual(bst_1.min().data, 3);
    strictEqual(bst_1.max().data, 99);
    strictEqual(bst_1.iterativeSearch(3).data, 3);
    strictEqual(bst_1.recursiveSearch(3).data, 3);
    strictEqual(bst_1.iterativeSearch(100), null);
    strictEqual(bst_1.recursiveSearch(100), null);

    var bst_2 = new BinarySearchTree(50);
    bst_2.insert(40);
    bst_2.insert(24);
    bst_2.insert(45);

    strictEqual(bst_2.max().data, 50);
    strictEqual(bst_2.iterativeSearch(50).data, 50);
    strictEqual(bst_2.recursiveSearch(50).data, 50);
    strictEqual(bst_2.iterativeSearch(100), null);
    strictEqual(bst_2.recursiveSearch(100), null);

    var bst_3 = new BinarySearchTree(12);
    bst_3.insert(15);
    bst_3.insert(14);
    bst_3.insert(16);
    bst_3.insert(13);

    strictEqual(bst_3.min().data, 12);
    strictEqual(bst_3.iterativeSearch(15).data, 15);
    strictEqual(bst_3.recursiveSearch(15).data, 15);

    var bst_4 = new BinarySearchTree(15);
    bst_4.insert(20);
    bst_4.insert(18);
    bst_4.insert(20);
    bst_4.insert(16);

    strictEqual(bst_4.iterativeSearch(15).data, 15);
    strictEqual(bst_4.recursiveSearch(15).data, 15);
    strictEqual(bst_4.iterativeSearch(null), null);
    strictEqual(bst_4.recursiveSearch(null), null);

});