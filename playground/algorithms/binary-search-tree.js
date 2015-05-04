test("Implement a Binary Tree", function() {

    'use strict';

    var BinarySearchTree = function(data) {

        var self = this;
        self.root = null;

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

        self.search = function(data) {
            var current = self.root;
            while (current !== null && current.data !== data) {
                if (data < current.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            return current;
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

        self.inOrder = function(node) {
            if (node !== null) {
                self.inOrder(node.left);
                console.log(node.data);
                self.inOrder(node.right);
            }
        };

        self.preOrder = function(node) {
            if (node !== null) {
                console.log(node.data);
                self.preOrder(node.left);
                self.preOrder(node.right);
            }
        };

        self.postOrder = function(node) {
            if (node !== null) {
                self.postOrder(node.left);
                self.postOrder(node.right);
                console.log(node.data);
            }
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
    bst_1.inOrder(bst_1.root);
    console.log('preOrder');
    bst_1.preOrder(bst_1.root);
    console.log('postOrder');
    bst_1.postOrder(bst_1.root);

    strictEqual(bst_1.min().data, 3);
    strictEqual(bst_1.max().data, 99);
    strictEqual(bst_1.search(3).data, 3);

    var bst_2 = new BinarySearchTree(50);
    bst_2.insert(40);
    bst_2.insert(24);
    bst_2.insert(45);

    strictEqual(bst_2.max().data, 50);
    strictEqual(bst_2.search(50).data, 50);

    var bst_3 = new BinarySearchTree(12);
    bst_3.insert(15);
    bst_3.insert(14);
    bst_3.insert(16);
    bst_3.insert(13);

    strictEqual(bst_3.min().data, 12);
    strictEqual(bst_3.search(15).data, 15);

    var bst_4 = new BinarySearchTree(15);
    bst_4.insert(20);
    bst_4.insert(18);
    bst_4.insert(20);
    bst_4.insert(16);

    strictEqual(bst_4.search(15).data, 15);

});