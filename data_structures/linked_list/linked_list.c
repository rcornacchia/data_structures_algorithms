#include <stdio.h>
#include <stdlib.h>

int main() {
    typedef struct node {
        int data;
        struct node *next;
    } node;
    node *head = NULL;

    head = malloc(sizeof(node));
    if (head == NULL) {
        return 1;
    }

    head->data = 1;
    head->next = NULL;
    printf("%d", head->data);
}
