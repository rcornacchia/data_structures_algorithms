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

void appendEnd(node *n, struct node *new) {
    if (n != NULL) {
        if (n->next == NULL) {
            n->next = new;
        } else appendEnd(n->next, new);
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

    if (first == NULL || second == NULL || third  == NULL) return 1;

    head = first;

    first->data = 1;
    first->next = NULL;
    second->data = 2;
    second->next = NULL;
    third->data = 3;
    third->next = NULL;

    appendEnd(head, second);
    appendEnd(head, third);
    printList(first);
}
