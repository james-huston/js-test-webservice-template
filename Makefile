testTimeout = 2000
testSlow = 500
baseCommand = ./node_modules/.bin/mocha -r should -t $(testTimeout) -s $(testSlow) -G --recursive
filePath = test/**/*.test.js

install:
	@npm install

test:
	@$(baseCommand) -R spec $(filePath)

test-watch:
	@$(baseCommand) -R spec --watch $(filePath)

test-jenkins:
	@$(baseCommand) -R xunit $(filePath)

.PHONY: test