'use strict';

const substitutions = require('./substitute-javascript');
const TemplateStringifier = require('./template-stringifier');

module.exports = function TemplateStringify(node, builder) {
	substitutions.removeSubstitutions(node);

	const str = new TemplateStringifier(builder);

	str.stringify(node);

	substitutions.addSubstitutions(node);
};
