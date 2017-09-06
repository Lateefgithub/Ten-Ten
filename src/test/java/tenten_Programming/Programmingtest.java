package tenten_Programming;



import java.util.ArrayList;
import java.util.HashSet;

public class Programmingtest {

	
	public static int maxLength(int Arr[], int size) {
	    if (size <= 1) return size; // check for null also
	    int maxLength = 1;
	    int curLength = 1;
	    for (int i = 1; i < size; i++) {
	        if (Arr[i] > Arr[i-1]) 
	            curLength++;
	        else {
	            if (maxLength < curLength)
	                maxLength = curLength;
	            curLength = 1;
	        }

	    }
	    //check in case the last element is included in maxLength
	    if (maxLength < curLength)
	        return curLength;
	    return maxLength;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	    int Arr[] = {2,7,1,8,2,8,1};
        int size = Arr.length;
        System.out.println("Size of Array is "+ size);
        System.out.println("Length of Longest Increasing Subsequence is "+ maxLength(Arr, size));
        	

	}

}