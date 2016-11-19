#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *next;
} node;

void printList(struct node *n) {
    if (n != NULL) {
        printf("[%d]-->", n->data);
        printList(n->next);
    }
}

int main() {
    node *head = NULL;
    node *first = NULL;
    node *second = NULL;
    node *third = NULL;

    first = malloc(sizeof(node));
    second = malloc(sizeof(node));
    third = malloc(sizeof(node));

    if (first == NULL
    || second == NULL
    || third  == NULL) return 1;
    

    first->data = 1;
    first->next = second;
    second->data = 2;
    second->next = third;
    third->data = 3;
    third->next = NULL;
    printList(first);
}
