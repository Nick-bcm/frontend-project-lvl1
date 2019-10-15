install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

pub:
	npm publish --dry-run
