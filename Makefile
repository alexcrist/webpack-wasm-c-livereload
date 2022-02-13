INPUT_FILES = src/wasm/main.c
OUTPUT_FILE = -o public/build/wasm.js
DEV_OPTIMIZATION = -O0
PROD_OPTIMIZATION = -O3
EMCC_OPTIONS = \
	-s WASM=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s EXPORTED_RUNTIME_METHODS=ccall,cwrap

dev: clean build
	emcc \
	  ${INPUT_FILES} \
		${OUTPUT_FILE} \
		${EMCC_OPTIONS} \
	  ${DEV_OPTIMIZATION}

prod: clean build
	emcc \
	  ${INPUT_FILES} \
		${OUTPUT_FILE} \
		${EMCC_OPTIONS} \
	  ${PROD_OPTIMIZATION}

build:
	mkdir -p public/build

clean:
	rm -f public/build/wasm.js public/build/wasm.wasm
	




