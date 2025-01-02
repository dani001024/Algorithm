public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 6;
        int c = 7;
        int num1 = b;
        int num2 = c;
        b = a;
        c = num1;
        a = num2;

        System.out.printf("%d\n",a);
        System.out.printf("%d\n",b);
        System.out.printf("%d",c);
    }
}