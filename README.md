#js-test-webservice-template
===

Template for creating unit tests for testing api's using Mocha, Should, and SuperAgent

##What is this for?

If you have some API's that you need to test, at this point preferably JSON, and you want to know how to get started easily with Node and Javascript then this is for you.

##How do I use this?
You can clone this repo directly and run the following commands to run an example test against [jsonplaceholder](https://github.com/typicode/jsonplaceholder).

	npm install
	make test

Example output:

	For our example test
    	✓ should of course find true to be true
    	When hitting jsonplaceholder
    		✓ should be able to post correctly (379ms)
	
	
	2 passing (383ms)
	
	#

##How do I start my own repo?
Create your new repo at Github or in your version control system of choice. Check out a copy locally and switch to the root of your new repo. From the root run this command to copy the skeleton into your repo.

	curl -o js-test-webservice-template.zip \
	'https://github.com/james-huston/js-test-webservice-template/archive/master.zip' \
	&& unzip js-test-webservice-template.zip && rm -f js-test-webservice-template.zip
 