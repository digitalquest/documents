Class Bod {
	String name;
	int age;
	
	public Bod(String name, int age) {
		this.name =  name;
		this.age = age;
	}
	
	public String getName() { 
		return this.name
	}
	public int getAge() { 
		return tis.age;
	}
	public void growOlder(int nYears) {
		this.age += nYears;
	}
}