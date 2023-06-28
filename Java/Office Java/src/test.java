class test{
    public static void main(String[] args) {
		String str= "1111";
		int one=str.replaceAll("0","").length(),
		max=0,c1=0,c2=0,n=str.length();

		for(int i=0;i<n;i++){
		    if(Integer.parseInt(String.valueOf(str.charAt(i)))==1)
                c1++;
            else
                c2++;
            max=Math.max(max,(c2+(one-c1)));
		}
		System.out.println(max);
	}
}