module.exports = function(content) {
	return 'module.exports = ' + JSON.stringify(this.exec(content, this.resource).toString());
}
