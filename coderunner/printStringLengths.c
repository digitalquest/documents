void printStringLengths(int numStrings, char** strings) {
	for (int i=0; i<numStrings; i++) {
		printf("%ld\n",strlen(strings[i]));
	}
}