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
    printf("\n");
}

node *search_list(node *l, int x) {
    if (l == NULL) return NULL;
    if (l->data == x) return l;
    else return(search_list(l->next, x));
}

void appendStart(node **n, int x) {
    node *p = malloc(sizeof(node));
    p->data = x;
    p->next = *n;
    *n = p;
}

void appendEnd(node *n, struct node *new) {
    if (n != NULL) {
        if (n->next == NULL) {
            n->next = new;
        } else appendEnd(n->next, new);
    }
}

void deleteNode(node *n, int i) {
    node *prev = n;
    while (n->next != NULL && n->data != i) {
        prev = n;
        n = n->next;
    }
    prev = n->next;
    free(n);
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
    deleteNode(head, 3);
    printList(first);
}
