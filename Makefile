wasm:
	emcc test.c \
	-s USE_SDL=2 \
	-s MODULARIZE=1 \
	-s ENVIRONMENT=web \
	-o test.js
