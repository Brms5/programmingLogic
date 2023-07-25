#include <iostream>

int hello() {
    std::cout << "Hello World!!" << "\n";
    return 0;
}

// Parametro por valor

#include <iostream>
using namespace std;

void troca_por_valor(int a, int b) {
    int temp;
    temp = a;
    a = b;
    b = temp;
}

int valor() {
    int a = 2, b = 3;
    cout << "Antes da troca: a = " << a << " b = " << b << endl;
    troca_por_valor(a, b);
    cout << "Depois da troca: a = " << a << " b = " << b << endl;
    return 0;
}

// Parametro por referencia

#include <iostream>
using namespace std;

void troca_por_referencia(int &a, int &b) {
    int temp;
    temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 2, b = 3;
    cout << "Antes da troca: a = " << a << " b = " << b << endl;
    troca_por_referencia(a, b);
    cout << "Depois da troca: a = " << a << " b = " << b << endl;
    return 0;
}


