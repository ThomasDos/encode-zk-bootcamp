### Homework 2

1. Modular arithmetic - you just need to find examples, you don't need to
   prove anything.

   - **Is it true that all odd squares are ≡ 1 (mod 8) ?**

     Yes, it is true that all odd squares are congruent to 1 modulo 8.

     In modular arithmetic, "≡" denotes congruence. When we say that an odd square is ≡ 1 (mod 8), it means that the remainder when the square is divided by 8 is 1.

     To understand why this is true, let's consider the squares of odd numbers:

     1^2 = 1 ≡ 1 (mod 8)
     3^2 = 9 ≡ 1 (mod 8)
     5^2 = 25 ≡ 1 (mod 8)
     7^2 = 49 ≡ 1 (mod 8)
     and so on...

     The squares of all odd numbers leave a remainder of 1 when divided by 8. Hence, it is true that all odd squares are ≡ 1 (mod 8).

   - **what about even squares (mod 8) ?**
     For even squares modulo 8, the situation is different from odd squares.

     Let's consider the squares of even numbers:

     2^2 = 4 ≡ 4 (mod 8)
     4^2 = 16 ≡ 0 (mod 8)
     6^2 = 36 ≡ 4 (mod 8)
     8^2 = 64 ≡ 0 (mod 8)
     and so on...

     The squares of even numbers have different remainders when divided by 8. Even squares alternate between ≡ 0 and ≡ 4 (mod 8). So, all even squares are either congruent to 0 or 4 modulo 8.

2. Try out the vanity bitcoin address example at asecurity or the Ethereum
   [version](https://vanity-eth.tk/) ✅
3. What do you understand by

   - O(n)

     Linear time complexity, running time of the algorithm grows linearly wit hthe size of the input(n).

   - O(1)

     Constant time complexity, running time remains constant, regardless of the size of the input(n).

   - O(log n)

     Logarithmic time complexity, running time increases logarithmically with the input size(n).

   * **For a proof size, which of these would you want ?**
     O(1) > O(log n) > O(n)
