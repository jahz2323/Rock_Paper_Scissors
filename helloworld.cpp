#include <iostream> 

int HelloWorld(int Number){ 
    std::cout << "hello world"  << std::endl; 
    return Number; 
}

int addition(int a, int b ){ 
    int result = a + b; 
    return result; 
}


int main() { 
    int number = 5;
    int result; 
    int a;
    int b;  
    // result = HelloWorld(number);
    //std::cout << "RESULT IS " << result << std::endl;
    std::cout << "Enter two numbers u want to add" << std::endl; 
    std::cin >> a; 
    std::cin >> b; 
    std::cout << "ADD = " << addition(a,b) << std::endl;
    
    int arr[][4] = [ {1,1,1,1} , 
                    {1,0,0,1} , 
                    {1,0,0,1} , 
                    {1,1,1,1} ]
    return 0; 
}