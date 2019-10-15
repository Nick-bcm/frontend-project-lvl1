install:
	npm install

lint:
	npx eslint .

start:
	npx babel-node src/bin/brain-games.js

pub:
	npm publish --dry-run
