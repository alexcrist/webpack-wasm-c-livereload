#include <stdio.h>
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE 
int add(int n1, int n2) {
    printf("Hello from C!\n");
    return n1 + n2;
}
