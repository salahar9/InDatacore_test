package com.DataIncore.DataIncore.Utils;

import java.util.Random;

public class randomUtil{

    public static int generateRandomId() {
        Random random = new Random();
        return random.nextInt(100); // Adjust the range as needed
    }

    // Method to get a random element from an array
    public static String getRandomElement(String[] array) {
        Random random = new Random();
        int index = random.nextInt(array.length);
        return array[index];
    }

}