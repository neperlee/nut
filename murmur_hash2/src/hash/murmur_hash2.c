#include <stdio.h>
#include <stdlib.h>
#include <string.h>



uint32_t
murmur_hash2(char *data, int len)
{
    uint32_t  h, k;

    h = 0 ^ len;


    while (len >= 4) {
        k  = data[0];
        k |= data[1] << 8;
        k |= data[2] << 16;
        k |= data[3] << 24;

        k *= 0x5bd1e995;
        k ^= k >> 24;
        k *= 0x5bd1e995;

        h *= 0x5bd1e995;
        h ^= k;

        data += 4;
        len -= 4;
    }

    switch (len) {
    case 3:
        h ^= data[2] << 16;
        /* fall through */
    case 2:
        h ^= data[1] << 8;
        /* fall through */
    case 1:
        h ^= data[0];
        h *= 0x5bd1e995;
    }

    h ^= h >> 13;
    h *= 0x5bd1e995;
    h ^= h >> 15;

    return h;
}

int main(void){

	char buf[1024];
	while (EOF != fscanf(stdin, "%s", buf)) {
		printf("%ld\n", murmur_hash2(buf, strlen(buf)));
	}
	/*
	char    *line;
	size_t  n = 1024;
	line = malloc(n);

	while(getline(&line, &n, stdin) != -1){
		printf("%s %d\n", line, strlen(line));
		// printf("%ld\n", murmur_hash2(line, strlen(line)));
	}*/


	return 0;
}


