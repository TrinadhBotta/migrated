public class Calculator {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;

        int sum = add(a, b);
        int difference = subtract(a, b);

        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
    }

    public static int add(int x, int y) {
        return x + y;
    }

    public static int subtract(int x, int y) {
        return x - y;
    }
}